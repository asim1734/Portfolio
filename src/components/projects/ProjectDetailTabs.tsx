'use client';

import { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { type ProjectShowcaseItem } from '@/data/projects';

type ProjectTab = 'overview' | 'stack' | 'features' | 'links';

type TabButtonProps = {
  active: boolean;
  children: React.ReactNode;
  accent: string;
  accentText: string;
  accentSoft: string;
  onClick: () => void;
};

function TabButton({
  active,
  children,
  accent,
  accentText,
  accentSoft,
  onClick,
}: TabButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-4 py-2 text-sm font-sans transition ${
        active
          ? 'text-white'
          : 'border-border text-text-secondary hover:border-accent hover:text-foreground'
      }`}
      style={
        active
          ? {
              backgroundColor: accent,
              borderColor: accent,
            }
          : {
              boxShadow: `inset 0 0 0 9999px ${accentSoft}`,
              color: accentText,
              borderColor: '#d8d2c7',
            }
      }
    >
      {children}
    </button>
  );
}

type ProjectDetailTabsProps = {
  project: ProjectShowcaseItem;
};

export function ProjectDetailTabs({ project }: ProjectDetailTabsProps) {
  const [activeTab, setActiveTab] = useState<ProjectTab>('overview');

  return (
    <div
      className="rounded-2xl border border-border bg-surface p-5 shadow-[0_18px_45px_-35px_rgba(15,23,42,0.22)] md:p-6"
      style={{ borderColor: project.accent + '55' }}
    >
      <div className="flex flex-wrap gap-3 items-center justify-between">
        <div className="flex flex-wrap gap-3">
          <TabButton
            active={activeTab === 'overview'}
            accent={project.accent}
            accentText={project.accentText}
            accentSoft={project.accentSoft}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </TabButton>
          <TabButton
            active={activeTab === 'stack'}
            accent={project.accent}
            accentText={project.accentText}
            accentSoft={project.accentSoft}
            onClick={() => setActiveTab('stack')}
          >
            Tech Stack
          </TabButton>
          <TabButton
            active={activeTab === 'features'}
            accent={project.accent}
            accentText={project.accentText}
            accentSoft={project.accentSoft}
            onClick={() => setActiveTab('features')}
          >
            Features
          </TabButton>
          <TabButton
            active={activeTab === 'links'}
            accent={project.accent}
            accentText={project.accentText}
            accentSoft={project.accentSoft}
            onClick={() => setActiveTab('links')}
          >
            Links
          </TabButton>
        </div>

        <button
          type="button"
          onClick={() => {
            const event = new CustomEvent('ask-portfolio-ai', {
              detail: { text: `Tell me more about the ${project.name} project.` }
            });
            window.dispatchEvent(event);
          }}
          className="inline-flex items-center gap-2 rounded-full border border-border/80 px-4 py-2 text-sm font-sans font-semibold transition text-zinc-700 hover:text-accent hover:bg-accent-soft/10 cursor-pointer"
          style={{ borderColor: project.accent + '44' }}
        >
          <Sparkles className="h-4 w-4 text-accent" />
          Ask AI
        </button>
      </div>

      <div className="mt-5 space-y-4 text-sm md:text-base text-text-secondary">
        {activeTab === 'overview' ? (
          <div className="grid gap-4">
            <div
              className="rounded-2xl border border-border bg-surface-strong/60 p-5 md:p-6"
              style={{ borderColor: project.accent + '45', backgroundColor: project.accentSoft }}
            >
              <p className="font-sans text-xs uppercase tracking-[0.25em] text-text-secondary">What it does</p>
              <p className="mt-3 leading-8 text-foreground/90">{project.summary}</p>
              <p className="mt-3 leading-8 text-foreground/80">{project.overview}</p>
            </div>
          </div>
        ) : null}

        {activeTab === 'stack' ? (
          <div className="grid gap-3 sm:grid-cols-2">
            {project.stack.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-border bg-background/50 p-4"
                style={{ borderColor: project.accent + '40' }}
              >
                <p className="font-semibold text-foreground">{item.label}</p>
                <p className="mt-2 text-sm leading-6 text-text-secondary">{item.note}</p>
              </div>
            ))}
          </div>
        ) : null}

        {activeTab === 'features' ? (
          <div className="grid gap-3">
            {project.features.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-background/50 p-4"
                style={{ borderColor: project.accent + '40' }}
              >
                <p className="font-semibold text-foreground">{item.title}</p>
                <p className="mt-2 leading-7 text-text-secondary">{item.detail}</p>
              </div>
            ))}
          </div>
        ) : null}

        {activeTab === 'links' ? (
          <div className="grid gap-3">
            {project.links.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-border bg-background/50 p-4"
                style={{ borderColor: project.accent + '40' }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-semibold text-foreground">{item.label}</p>
                    <p className="mt-2 leading-7 text-text-secondary">{item.description}</p>
                  </div>
                  {item.note && item.note.startsWith('http') ? (
                    <a
                      href={item.note}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold"
                      style={{ backgroundColor: project.accent, color: '#fff' }}
                    >
                      Open
                    </a>
                  ) : (
                    <span
                      className="rounded-full px-3 py-1 font-sans text-xs"
                      style={{
                        backgroundColor: project.accentSoft,
                        color: project.accentText,
                      }}
                    >
                      No link
                    </span>
                  )}
                </div>
                {!item.note || !item.note.startsWith('http') ? (
                  <p className="mt-3 font-sans text-xs uppercase tracking-[0.2em] text-text-secondary">{item.note}</p>
                ) : null}
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
