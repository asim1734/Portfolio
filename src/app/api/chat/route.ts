import { groq } from '@ai-sdk/groq';
import { streamText, convertToModelMessages } from 'ai';
import { CHATBOT_SYSTEM_PROMPT } from '@/data/chatbot';

export const maxDuration = 30;

// ── Rate limiting ────────────────────────────────────────────────────────────
// In-memory, per-serverless-instance. Good enough for a portfolio — a dedicated
// Redis store would be needed for strict cross-instance enforcement at scale.
const WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS = 20;          // requests per window per IP

const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): { limited: boolean; retryAfterSecs: number } {
  const now = Date.now();

  // Prune expired entries to prevent unbounded memory growth
  for (const [key, entry] of rateLimitStore) {
    if (now > entry.resetAt) rateLimitStore.delete(key);
  }

  const entry = rateLimitStore.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return { limited: false, retryAfterSecs: 0 };
  }

  if (entry.count >= MAX_REQUESTS) {
    return { limited: true, retryAfterSecs: Math.ceil((entry.resetAt - now) / 1000) };
  }

  entry.count++;
  return { limited: false, retryAfterSecs: 0 };
}
// ────────────────────────────────────────────────────────────────────────────

export async function POST(req: Request) {
  try {
    // ── Rate limit check ───────────────────────────────────────────────────
    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
      req.headers.get('x-real-ip') ??
      'unknown';

    const { limited, retryAfterSecs } = checkRateLimit(ip);

    if (limited) {
      return new Response(
        JSON.stringify({ error: 'Too many requests. Please wait a few minutes and try again.' }),
        {
          status: 429,
          headers: {
            'Content-Type': 'application/json',
            'Retry-After': String(retryAfterSecs),
          },
        }
      );
    }

    // ── Input validation ───────────────────────────────────────────────────
    const { messages } = await req.json();

    if (!Array.isArray(messages) || messages.length === 0) {
      return new Response(JSON.stringify({ error: 'Invalid request.' }), { status: 400 });
    }

    // Cap conversation length to prevent context stuffing
    if (messages.length > 20) {
      return new Response(
        JSON.stringify({ error: 'Conversation too long. Please restart the chat.' }),
        { status: 400 }
      );
    }

    // Cap individual message length
    const lastMessage = messages[messages.length - 1];
    if (typeof lastMessage?.content === 'string' && lastMessage.content.length > 1000) {
      return new Response(
        JSON.stringify({ error: 'Message too long.' }),
        { status: 400 }
      );
    }

    // ── Stream response ────────────────────────────────────────────────────
    const result = streamText({
      model: groq('openai/gpt-oss-120b'),
      messages: await convertToModelMessages(messages),
      system: CHATBOT_SYSTEM_PROMPT,
      maxOutputTokens: 600, // cap per-response cost
    });

    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.error('Error in AI Chat Route:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to process chat request.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
