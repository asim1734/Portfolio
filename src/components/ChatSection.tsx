'use client';

import React, { useRef, useEffect, useState } from 'react';
import { useChat, UIMessage } from '@ai-sdk/react';
import { DefaultChatTransport } from 'ai';
import { Send, Bot, User, Sparkles, RotateCcw, Loader2, ArrowRight } from 'lucide-react';
import { SUGGESTED_QUESTIONS } from '@/data/chatbot';

export function ChatSection() {
  const {
    messages,
    sendMessage,
    status,
    error,
    setMessages
  } = useChat({
    transport: new DefaultChatTransport({ api: '/api/chat' }),
  });

  const [input, setInput] = useState('');
  const isLoading = status === 'submitted' || status === 'streaming';
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Automatically scroll to the bottom when messages or loading state changes
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'auto',
      });
    }
  }, [messages, status]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    const textToSend = input;
    setInput('');
    try {
      await sendMessage({ text: textToSend });
    } catch (err) {
      console.error('SendMessage error:', err);
    }
  };

  const handleSuggestionClick = async (questionText: string) => {
    if (isLoading) return;
    try {
      await sendMessage({ text: questionText });
    } catch (err) {
      console.error('SendMessage error:', err);
    }
  };

  const handleClearChat = () => {
    setMessages([]);
  };

  // Helper function to format basic markdown (bold text, bullet lists, numbered lists)
  const formatMessageContent = (content: string, isUser: boolean = false) => {
    const lines = content.split('\n');
    let inUnorderedList = false;
    let inOrderedList = false;
    const elements: React.ReactNode[] = [];
    let currentListItems: React.ReactNode[] = [];

    const processText = (text: string) => {
      const parts = [];
      let currentIdx = 0;
      const realBoldRegex = /\*\*(.*?)\*\*/g;
      let match;

      while ((match = realBoldRegex.exec(text)) !== null) {
        const precedingText = text.substring(currentIdx, match.index);
        if (precedingText) parts.push(precedingText);
        parts.push(
          <strong key={match.index} className={`font-bold ${isUser ? 'text-white' : 'text-zinc-950'}`}>
            {match[1]}
          </strong>
        );
        currentIdx = realBoldRegex.lastIndex;
      }
      const remainingText = text.substring(currentIdx);
      if (remainingText) parts.push(remainingText);
      return parts;
    };

    const flushList = (key: string | number) => {
      if (inUnorderedList) {
        elements.push(
          <ul key={`ul-${key}`} className={`my-2 list-disc pl-6 space-y-1 ${isUser ? 'text-white/90' : 'text-zinc-800'}`}>
            {currentListItems}
          </ul>
        );
        currentListItems = [];
        inUnorderedList = false;
      } else if (inOrderedList) {
        elements.push(
          <ol key={`ol-${key}`} className={`my-2 list-decimal pl-6 space-y-1 ${isUser ? 'text-white/90' : 'text-zinc-800'}`}>
            {currentListItems}
          </ol>
        );
        currentListItems = [];
        inOrderedList = false;
      }
    };

    lines.forEach((line, index) => {
      const trimmed = line.trim();

      if (!trimmed) {
        flushList(index);
        elements.push(<div key={`gap-${index}`} className="h-2" />);
        return;
      }

      const isUnordered = trimmed.startsWith('- ') || trimmed.startsWith('* ');
      const isOrdered = /^\d+\.\s/.test(trimmed);

      if (isUnordered) {
        if (inOrderedList) flushList(index);
        inUnorderedList = true;
        const itemText = trimmed.substring(2);
        currentListItems.push(
          <li key={`li-${index}`} className={`text-sm ${isUser ? 'text-white/95' : 'text-zinc-800'} leading-relaxed`}>
            {processText(itemText)}
          </li>
        );
      } else if (isOrdered) {
        if (inUnorderedList) flushList(index);
        inOrderedList = true;
        const itemText = trimmed.replace(/^\d+\.\s/, '');
        currentListItems.push(
          <li key={`li-${index}`} className={`text-sm ${isUser ? 'text-white/95' : 'text-zinc-800'} leading-relaxed`}>
            {processText(itemText)}
          </li>
        );
      } else {
        flushList(index);
        elements.push(
          <p key={`p-${index}`} className={`text-sm ${isUser ? 'text-white/95' : 'text-zinc-800'} leading-relaxed my-1.5`}>
            {processText(line)}
          </p>
        );
      }
    });

    flushList('final');
    return elements;
  };

  return (
    <section id="chat" className="px-6 py-10 md:px-12 md:py-12 scroll-mt-24 md:scroll-mt-28">
      <div className="w-full rounded-[2rem] border border-border/80 bg-gradient-to-br from-surface via-surface to-surface-strong/70 p-6 shadow-[0_22px_60px_-40px_rgba(15,118,110,0.25)] md:p-8">
        
        {/* Header Section */}
        <div className="mb-8 w-full max-w-4xl flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              AI Assistant
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl text-zinc-950">Chat with Asim's Portfolio</h2>
            <p className="mt-3 text-sm text-text-secondary leading-relaxed font-normal">
              Ask about Asim's technical toolkit, professional projects, leadership background, or contact details. The assistant streams responses dynamically using Llama 3.3.
            </p>
          </div>
          {messages.length > 0 && (
            <button
              onClick={handleClearChat}
              className="flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-text-secondary transition hover:border-accent hover:text-accent cursor-pointer self-start md:self-auto"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              Restart Chat
            </button>
          )}
        </div>

        {/* Chat Window Box */}
        <div className="flex flex-col rounded-3xl border border-border bg-surface shadow-xs overflow-hidden">
          
          {/* Scrollable Message History Area */}
          <div
            ref={chatContainerRef}
            className="h-[420px] overflow-y-auto p-5 md:p-6 space-y-4 bg-zinc-50/30"
          >
            {messages.length === 0 ? (
              <div className="flex h-full flex-col items-center justify-center text-center p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-soft text-accent mb-4">
                  <Bot className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold tracking-tight text-zinc-950">How can I help you today?</h3>
                <p className="mt-2 text-sm text-text-secondary max-w-md leading-relaxed font-normal">
                  I can provide detailed information about Asim's background. Tap a suggestion below or write your own question.
                </p>

                {/* Suggested Questions Grid (Centered) */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-2xl">
                  {SUGGESTED_QUESTIONS.map((question, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSuggestionClick(question.text)}
                      className="group flex items-center justify-between gap-3 text-left rounded-2xl border border-border bg-surface p-4 transition-all duration-300 hover:border-accent hover:bg-accent-soft/10 hover:scale-[1.01] cursor-pointer"
                    >
                      <div>
                        <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.15em] text-accent">{question.label}</span>
                        <p className="text-xs font-semibold text-zinc-800 leading-snug mt-1">{question.text}</p>
                      </div>
                      <ArrowRight className="h-4 w-4 shrink-0 text-text-secondary transition-transform group-hover:translate-x-1 group-hover:text-accent" />
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              messages.map((message: UIMessage) => {
                const isUser = message.role === 'user';
                return (
                  <div
                    key={message.id}
                    className={`flex gap-3.5 max-w-[85%] ${isUser ? 'ml-auto flex-row-reverse' : 'mr-auto'}`}
                  >
                    {/* Avatar */}
                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-xs font-bold ${
                        isUser
                          ? 'bg-accent text-white'
                          : 'bg-zinc-200 text-zinc-700 border border-zinc-300'
                      }`}
                    >
                      {isUser ? <User className="h-4.5 w-4.5" /> : <Bot className="h-4.5 w-4.5" />}
                    </div>

                    {/* Bubble Content */}
                    <div
                      className={`rounded-2xl px-4 py-3 shadow-xs ${
                        isUser
                          ? 'bg-accent text-white rounded-tr-sm'
                          : 'bg-surface border border-border rounded-tl-sm text-zinc-950'
                      }`}
                    >
                      {message.parts.map((part, pIdx) => {
                        if (part.type === 'text') {
                          return (
                            <div key={pIdx} className="space-y-1">
                              {formatMessageContent(part.text, isUser)}
                            </div>
                          );
                        }
                        if (part.type === 'reasoning') {
                          return (
                            <div key={pIdx} className="text-xs text-zinc-500 border-l-2 border-accent/40 pl-3 my-2 italic bg-zinc-100/50 py-1.5 rounded-r-md">
                              <span className="font-mono text-[9px] uppercase tracking-wider block text-accent not-italic mb-1 font-semibold">Thought process:</span>
                              {part.text}
                            </div>
                          );
                        }
                        return null;
                      })}
                    </div>
                  </div>
                );
              })
            )}

            {/* Waiting for Response Indicator */}
            {status === 'submitted' && (
              <div className="flex gap-3.5 max-w-[85%] mr-auto">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-zinc-200 text-zinc-700 border border-zinc-300">
                  <Bot className="h-4.5 w-4.5 animate-pulse" />
                </div>
                <div className="rounded-2xl rounded-tl-sm border border-border bg-surface px-4 py-3 shadow-xs flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin text-accent" />
                  <span className="text-xs text-text-secondary">Thinking...</span>
                </div>
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-800 flex flex-col gap-2 max-w-2xl mx-auto text-center">
                <p>An error occurred while getting the assistant's reply. Please make sure the Groq API key is set properly.</p>
                <button
                  onClick={handleClearChat}
                  className="rounded-full bg-red-100 px-4 py-1.5 font-mono text-xs uppercase text-red-800 transition hover:bg-red-200 cursor-pointer self-center"
                >
                  Reset Chat
                </button>
              </div>
            )}
          </div>

          {/* Form Input Area */}
          <div className="border-t border-border bg-surface p-4">
            <form
              id="chat-form"
              onSubmit={handleSubmit}
              className="flex items-center gap-3 w-full"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={isLoading}
                placeholder="Ask about Asim's projects, skills, contact..."
                className="flex-1 rounded-full border border-border bg-surface-strong/30 px-5 py-3 text-sm text-foreground outline-none transition-all focus:border-accent focus:bg-surface focus:ring-1 focus:ring-accent/50 disabled:opacity-70"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-white shadow-xs transition duration-300 hover:bg-accent/90 hover:scale-105 disabled:opacity-40 disabled:scale-100 cursor-pointer shrink-0"
              >
                <Send className="h-4.5 w-4.5" />
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
