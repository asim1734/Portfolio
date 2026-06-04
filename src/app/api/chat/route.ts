import { groq } from '@ai-sdk/groq';
import { streamText, convertToModelMessages } from 'ai';
import { CHATBOT_SYSTEM_PROMPT } from '@/data/chatbot';

export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const result = streamText({
      model: groq('llama-3.3-70b-versatile'),
      messages: await convertToModelMessages(messages),
      system: CHATBOT_SYSTEM_PROMPT,
    });

    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.error('Error in AI Chat Route:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to process chat request' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
