import React from 'react';
import {
  Globe,
  RefreshCw,
  Layers,
  Workflow,
  Palette,
  FileCheck,
  Move,
  Sparkles,
  Terminal,
  Bot,
  Users,
  MessageSquare,
  Lightbulb,
  GraduationCap,
} from 'lucide-react';

interface TechIconProps {
  name: string;
  className?: string;
}

export function TechIcon({ name, className = 'w-4 h-4' }: TechIconProps) {
  const normalizedName = name.toLowerCase().trim();

  // Brand SVG Logos
  if (normalizedName === 'react') {
    return (
      <svg viewBox="-11.5 -10.23174 23 20.46348" className={className}>
        <circle cx="0" cy="0" r="2.05" fill="#00d8ff" />
        <g stroke="#00d8ff" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    );
  }

  if (normalizedName === 'typescript') {
    return (
      <svg viewBox="0 0 100 100" className={className}>
        <rect width="100" height="100" fill="#3178c6" rx="12" />
        <text
          x="82"
          y="85"
          fill="#fff"
          fontSize="56"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="bold"
          textAnchor="end"
        >
          TS
        </text>
      </svg>
    );
  }

  if (normalizedName === 'next.js') {
    return (
      <svg viewBox="0 0 180 180" fill="none" className={`${className} text-foreground`}>
        <circle cx="90" cy="90" r="90" fill="currentColor" />
        <path
          d="M128.14 140.24L79.62 77.29V140.24H68V54H79.62L128.14 117.06V54H139.76V140.24H128.14Z"
          fill="white"
        />
      </svg>
    );
  }

  if (normalizedName === 'tailwind css') {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <path
          d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.201 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.537 6.182 15.176 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.712 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624-1.177-1.194-2.538-2.576-5.712-2.576z"
          fill="#0EA5E9"
        />
      </svg>
    );
  }

  if (normalizedName === 'tanstack query') {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8z" fill="#FF4154" />
        <path d="M12 6a6 6 0 106 6 6 6 0 00-6-6zm0 10a4 4 0 114-4 4 4 0 01-4 4z" fill="#FF7E1B" />
        <circle cx="12" cy="12" r="2" fill="#FFB100" />
      </svg>
    );
  }

  if (normalizedName === 'react flow') {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <rect x="2" y="2" width="6" height="6" rx="1" fill="#FF007A" stroke="#FF007A" strokeWidth="1" />
        <rect x="16" y="16" width="6" height="6" rx="1" fill="#FF007A" stroke="#FF007A" strokeWidth="1" />
        <rect x="16" y="2" width="6" height="6" rx="1" fill="#00F0FF" stroke="#00F0FF" strokeWidth="1" />
        <path d="M8 5h8M19 8v8M8 5l8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  if (normalizedName === 'node.js') {
    return (
      <svg viewBox="0 0 256 288" fill="none" className={className}>
        <path
          d="M141.5 2.6c-7.1-4.1-15.9-4.1-23 0L19.4 60.1C12.3 64.2 8 71.7 8 79.9v115.1c0 8.2 4.3 15.7 11.4 19.8l99.1 57.5c7.1 4.1 15.9 4.1 23 0l99.1-57.5c7.1-4.1 11.4-11.6 11.4-19.8V79.9c0-8.2-4.3-15.7-11.4-19.8L141.5 2.6z"
          fill="#339933"
        />
        <path d="M128 72v144l62.4-36.2V108.2L128 72z" fill="#ffffff" opacity="0.2" />
      </svg>
    );
  }

  if (normalizedName === 'express') {
    return (
      <svg viewBox="0 0 100 100" fill="none" className={className}>
        <rect width="100" height="100" fill="#353535" rx="12" />
        <text
          x="50"
          y="64"
          fill="#fff"
          fontSize="44"
          fontFamily="system-ui, -apple-system, monospace"
          fontWeight="bold"
          textAnchor="middle"
        >
          ex
        </text>
      </svg>
    );
  }

  if (normalizedName === 'fastapi') {
    return (
      <svg viewBox="0 0 100 100" fill="none" className={className}>
        <rect width="100" height="100" fill="#05998B" rx="12" />
        <path d="M52 16L28 54h18l-4 30L68 44H50l4-28z" fill="#fff" />
      </svg>
    );
  }

  if (normalizedName === 'postgresql') {
    return (
      <svg viewBox="0 0 48 48" fill="none" className={className}>
        <path
          d="M41.4 17.6c-1.3-3.6-4.5-6.2-8.3-6.9-3.8-.7-7.7.7-10.2 3.6-2.5-2.9-6.4-4.3-10.2-3.6-3.8.7-7 3.3-8.3 6.9-1.4 3.7-.8 7.8 1.6 11 2.4 3.2 6.2 5 10.2 4.9V40h13.4v-6.5c4-.1 7.8-1.9 10.2-4.9 2.4-3.2 3-7.3 1.6-11z"
          fill="#336791"
        />
        <path d="M24 16v18c0 1.1-.9 2-2 2h-6c-1.1 0-2-.9-2-2V16c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2z" fill="#ffffff" opacity="0.3" />
      </svg>
    );
  }

  if (normalizedName === 'mongodb') {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <path
          d="M17.15 11.16c-.28-3.04-2.12-6.52-4.43-9.03-.31-.34-.73-.34-1.04 0-2.31 2.51-4.15 5.99-4.43 9.03-.43 4.67 1.83 7.82 4.43 9.27.31.17.73.17 1.04 0 2.6-1.45 4.86-4.6 4.43-9.27z"
          fill="#47A248"
        />
        <path d="M12 19.34V3.06c1.69 2.16 3.03 5.09 3.25 7.64.33 3.86-1.42 6.47-3.25 7.64z" fill="#13aa52" />
        <path d="M12 21v3" stroke="#8c8c8c" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  if (normalizedName === 'git') {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <path
          d="M22.6 11.2L12.8 1.4c-.6-.6-1.5-.6-2.1 0L1.4 10.7c-.6.6-.6 1.5 0 2.1l9.8 9.8c.6.6 1.5.6 2.1 0l9.3-9.3c.6-.5.6-1.5 0-2.1zM11.9 18c-.8 0-1.5-.7-1.5-1.5 0-.2 0-.4.1-.6l-2-2c-.2.1-.4.1-.6.1-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5c.2 0 .4 0 .6.1l2-2c-.1-.2-.1-.4-.1-.6 0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5c0 .5-.3.9-.7 1.2v3.6c.4.3.7.7.7 1.2 0 .8-.7 1.5-1.5 1.5z"
          fill="#F05032"
        />
      </svg>
    );
  }

  if (normalizedName === 'vercel') {
    return (
      <svg viewBox="0 0 76 65" fill="currentColor" className={`${className} text-foreground`}>
        <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" />
      </svg>
    );
  }

  // Lucide Concept Mapping
  switch (normalizedName) {
    case 'rest apis':
      return <Globe className={className} />;
    case 'ci/cd':
      return <RefreshCw className={className} />;
    case 'monorepos':
      return <Layers className={className} />;
    case 'state management':
      return <Workflow className={className} />;
    case 'design systems':
      return <Palette className={className} />;
    case 'zod validation':
      return <FileCheck className={className} />;
    case 'drag & drop apis':
      return <Move className={className} />;
    case 'llm integration':
      return <Sparkles className={className} />;
    case 'prompt engineering':
      return <Terminal className={className} />;
    case 'multi-agent systems':
      return <Bot className={className} />;
    case 'leadership':
      return <Users className={className} />;
    case 'communication':
      return <MessageSquare className={className} />;
    case 'problem solving':
      return <Lightbulb className={className} />;
    case 'mentoring':
      return <GraduationCap className={className} />;
    default:
      return <Globe className={className} />;
  }
}
