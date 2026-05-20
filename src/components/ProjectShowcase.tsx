'use client';

import { useState } from 'react';

type ProjectTab = 'overview' | 'architecture' | 'stack' | 'features' | 'links';

interface ProjectStackItem {
  label: string;
  note: string;
}

interface ProjectFeature {
  title: string;
  detail: string;
}

interface ProjectLink {
  label: string;
  description: string;
  note: string;
}

interface ProjectShowcaseItem {
  id: string;
  name: string;
  year: string;
  role: string;
  accent: string;
  accentSoft: string;
  accentText: string;
  shortDescription: string;
  summary: string;
  logoLabel: string;
  screenshots: string[];
  focus: string[];
  overview: string;
  architecture: string[];
  stack: ProjectStackItem[];
  features: ProjectFeature[];
  links: ProjectLink[];
}

const projects: ProjectShowcaseItem[] = [
  {
    id: 'devplanner',
    name: 'DevPlanner',
    year: '2026',
    role: 'AI planning / full-stack',
    accent: '#0f766e',
    accentSoft: '#dff3ef',
    accentText: '#0f5f58',
    shortDescription: 'AI-assisted planning for PRDs, task breakdowns, and dependency graphs.',
    summary:
      'Turns rough product ideas into structured execution plans, with AI drafting the PRD and the system validating the task graph before it reaches the user.',
    logoLabel: 'DP',
    screenshots: ['Dashboard', 'PRD Draft', 'Task Graph'],
    focus: ['PRD drafting', 'Task breakdowns', 'Dependency-safe generation'],
    overview:
      'A planning tool that turns product ideas into structured execution plans with AI-assisted breakdowns.',
    architecture: [
      'Conversation captures product intent before generation starts.',
      'The crew output is validated so the task graph stays acyclic and usable.',
      'Sessions can be locked in after review so generation feels deliberate instead of automatic.',
    ],
    stack: [
      { label: 'FastAPI', note: 'API layer and orchestration.' },
      { label: 'PostgreSQL', note: 'Persisted projects and sessions.' },
      { label: 'LLM orchestration', note: 'Agents draft the PRD and task graph.' },
      { label: 'Graph validation', note: 'Keeps the dependency tree safe.' },
      { label: 'SSE updates', note: 'Live generation feedback.' },
    ],
    features: [
      { title: 'PRD generation', detail: 'Structured drafts that set the scope before implementation starts.' },
      { title: 'Dependency mapping', detail: 'Transforms product notes into a navigable task graph.' },
      { title: 'Real-time progress', detail: 'Streams stage updates while the crew is working.' },
      { title: 'Project graph view', detail: 'Makes the output easy to scan and revise.' },
    ],
    links: [
      { label: 'Product demo', description: 'Placeholder for the live walkthrough.', note: 'Add final URL later.' },
      { label: 'Case study', description: 'Placeholder for the deeper breakdown.', note: 'Add final URL later.' },
      { label: 'Source code', description: 'Placeholder for the repository link.', note: 'Add final URL later.' },
    ],
  },
  {
    id: 'workforcehub',
    name: 'WorkforceHub',
    year: '2026',
    role: 'Admin tooling / RBAC',
    accent: '#1d4ed8',
    accentSoft: '#eaf1ff',
    accentText: '#1e40af',
    shortDescription: 'Employee management with auth, role-based access, and admin workflows.',
    summary:
      'A full-stack workforce management platform for secure employee administration, role-based access, and clear dashboard workflows.',
    logoLabel: 'WH',
    screenshots: ['Auth Flow', 'Admin Dashboard', 'User Management'],
    focus: ['Role-based access', 'User administration', 'Operational clarity'],
    overview:
      'A full-stack workforce management platform for secure employee administration and role-based access.',
    architecture: [
      'Auth flow protects the administrative surface and keeps user actions scoped by role.',
      'Search and pagination keep the list views responsive as records grow.',
      'Dockerized deployment makes the setup easier to run and reproduce.',
    ],
    stack: [
      { label: 'React', note: 'Interactive dashboard UI.' },
      { label: 'Express', note: 'Backend API and route handling.' },
      { label: 'MongoDB', note: 'User and organization data.' },
      { label: 'JWT auth', note: 'Session protection and access control.' },
      { label: 'Docker', note: 'Repeatable deployment setup.' },
    ],
    features: [
      { title: 'RBAC', detail: 'Different permissions for admin, HR, manager, and employee roles.' },
      { title: 'Search and pagination', detail: 'Keeps the user directory readable and fast.' },
      { title: 'Protected routes', detail: 'Locks down sensitive workflows and views.' },
      { title: 'Responsive dashboard', detail: 'Works across desktop and tablet layouts.' },
    ],
    links: [
      { label: 'Product demo', description: 'Placeholder for the live walkthrough.', note: 'Add final URL later.' },
      { label: 'Case study', description: 'Placeholder for the deeper breakdown.', note: 'Add final URL later.' },
      { label: 'Source code', description: 'Placeholder for the repository link.', note: 'Add final URL later.' },
    ],
  },
  {
    id: 'my-game-den',
    name: 'My Game Den',
    year: '2026',
    role: 'Library / community reviews',
    accent: '#be185d',
    accentSoft: '#fceaf2',
    accentText: '#9d174d',
    shortDescription: 'Track your game library, build tier lists, and write reviews.',
    summary:
      'A game catalog application for discovery, collection management, tier lists, and personal reviews with a React and Express stack.',
    logoLabel: 'MGD',
    screenshots: ['Library View', 'Tier List Builder', 'Review Panel'],
    focus: ['Game discovery', 'Collection management', 'Tier list creation'],
    overview:
      'A game catalog application for discovery, collection management, tier lists, and personal reviews.',
    architecture: [
      'IGDB-backed search and browse flows surface the game catalog quickly.',
      'Collections and tier lists keep the library organized across personal workflows.',
      'Review history and per-game lookup make it easy to revisit prior opinions.',
    ],
    stack: [
      { label: 'React', note: 'Frontend app and stateful interactions.' },
      { label: 'Express', note: 'API routes and protected endpoints.' },
      { label: 'MongoDB', note: 'Collections, games, and reviews.' },
      { label: 'IGDB API', note: 'Game metadata, covers, and discovery data.' },
      { label: 'Drag and drop', note: 'Tier list building interactions.' },
    ],
    features: [
      { title: 'Browse and filters', detail: 'Supports discovery by genre, platform, rating, and release year.' },
      { title: 'Tier list creation', detail: 'Lets users order games into custom lists visually.' },
      { title: 'Review history', detail: 'Keeps personal ratings and text reviews easy to find.' },
      { title: 'Game detail pages', detail: 'Surfaces screenshots, trailers, and metadata in one place.' },
    ],
    links: [
      { label: 'Product demo', description: 'Placeholder for the live walkthrough.', note: 'Add final URL later.' },
      { label: 'Case study', description: 'Placeholder for the deeper breakdown.', note: 'Add final URL later.' },
      { label: 'Source code', description: 'Placeholder for the repository link.', note: 'Add final URL later.' },
    ],
  },
];

function TabButton({
  active,
  children,
  accent,
  accentText,
  accentSoft,
  onClick,
}: {
  active: boolean;
  children: React.ReactNode;
  accent: string;
  accentText: string;
  accentSoft: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-4 py-2 text-sm font-mono transition ${
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

function ProjectDetailTabs({ project }: { project: ProjectShowcaseItem }) {
  const [activeTab, setActiveTab] = useState<ProjectTab>('overview');

  return (
    <div
      className="rounded-2xl border border-border bg-surface p-5 shadow-[0_18px_45px_-35px_rgba(15,23,42,0.22)] md:p-6"
      style={{ borderColor: project.accent + '55' }}
    >
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
          active={activeTab === 'architecture'}
          accent={project.accent}
          accentText={project.accentText}
          accentSoft={project.accentSoft}
          onClick={() => setActiveTab('architecture')}
        >
          Architecture
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

      <div className="mt-5 space-y-4 text-sm md:text-base text-text-secondary">
        {activeTab === 'overview' ? (
          <div className="grid gap-4">
            <div className="rounded-2xl border border-border bg-surface-strong/60 p-4" style={{ borderColor: project.accent + '45', backgroundColor: project.accentSoft }}>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-text-secondary">What it does</p>
              <p className="mt-3 leading-7 text-foreground/90">{project.summary}</p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {project.focus.map((item) => (
                <div key={item} className="rounded-2xl border border-border bg-background/50 p-4" style={{ borderColor: project.accent + '40' }}>
                  <p className="text-sm font-semibold text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {activeTab === 'architecture' ? (
          <div className="grid gap-3">
            {project.architecture.map((item, index) => (
              <div key={item} className="rounded-2xl border border-border bg-background/50 p-4" style={{ borderColor: project.accent + '40' }}>
                <p className="font-mono text-xs uppercase tracking-[0.25em]" style={{ color: project.accentText }}>0{index + 1}</p>
                <p className="mt-2 leading-7 text-foreground/90">{item}</p>
              </div>
            ))}
          </div>
        ) : null}

        {activeTab === 'stack' ? (
          <div className="grid gap-3 sm:grid-cols-2">
            {project.stack.map((item) => (
              <div key={item.label} className="rounded-2xl border border-border bg-background/50 p-4" style={{ borderColor: project.accent + '40' }}>
                <p className="font-semibold text-foreground">{item.label}</p>
                <p className="mt-2 text-sm leading-6 text-text-secondary">{item.note}</p>
              </div>
            ))}
          </div>
        ) : null}

        {activeTab === 'features' ? (
          <div className="grid gap-3">
            {project.features.map((item) => (
              <div key={item.title} className="rounded-2xl border border-border bg-background/50 p-4" style={{ borderColor: project.accent + '40' }}>
                <p className="font-semibold text-foreground">{item.title}</p>
                <p className="mt-2 leading-7 text-text-secondary">{item.detail}</p>
              </div>
            ))}
          </div>
        ) : null}

        {activeTab === 'links' ? (
          <div className="grid gap-3">
            {project.links.map((item) => (
              <div key={item.label} className="rounded-2xl border border-border bg-background/50 p-4" style={{ borderColor: project.accent + '40' }}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-semibold text-foreground">{item.label}</p>
                    <p className="mt-2 leading-7 text-text-secondary">{item.description}</p>
                  </div>
                  <span
                    className="rounded-full px-3 py-1 font-mono text-xs"
                    style={{
                      backgroundColor: project.accentSoft,
                      color: project.accentText,
                    }}
                  >
                    Placeholder
                  </span>
                </div>
                <p className="mt-3 font-mono text-xs uppercase tracking-[0.2em] text-text-secondary">{item.note}</p>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

function ProjectCarousel({ project }: { project: ProjectShowcaseItem }) {
  const [activeScreenshot, setActiveScreenshot] = useState(0);
  const currentLabel = project.screenshots[activeScreenshot];

  const previousSlide = () => {
    setActiveScreenshot((current) => (current - 1 + project.screenshots.length) % project.screenshots.length);
  };

  const nextSlide = () => {
    setActiveScreenshot((current) => (current + 1) % project.screenshots.length);
  };

  return (
    <div
      className="rounded-2xl border border-border bg-surface p-5 shadow-[0_18px_45px_-35px_rgba(15,23,42,0.22)] md:p-6"
      style={{ borderColor: project.accent + '55' }}
    >
      <div className="flex items-center justify-between gap-3">
        <p className="font-mono text-sm text-text-secondary">Screenshot carousel</p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={previousSlide}
            className="rounded-full border border-border px-3 py-2 text-sm text-text-secondary hover:border-accent hover:text-foreground"
          >
            Prev
          </button>
          <button
            type="button"
            onClick={nextSlide}
            className="rounded-full border border-border px-3 py-2 text-sm text-text-secondary hover:border-accent hover:text-foreground"
          >
            Next
          </button>
        </div>
      </div>

      <div className="mt-4 rounded-2xl border border-dashed border-border bg-background p-4 md:p-6">
        <div
          className="flex min-h-[260px] flex-col justify-between rounded-2xl border border-border bg-gradient-to-br from-background via-surface to-surface-strong/70 p-6 md:min-h-[340px] md:p-8"
          style={{ borderColor: project.accent + '50' }}
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-text-secondary">Placeholder screen</p>
              <h3 className="mt-3 text-2xl font-semibold text-foreground">{currentLabel}</h3>
            </div>
            <div className="rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-text-secondary">
              {activeScreenshot + 1} / {project.screenshots.length}
            </div>
          </div>

          <div className="mt-8 grid flex-1 place-items-center rounded-2xl border border-border bg-white/70 p-6">
            <div className="text-center">
              <div
                className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl border border-border text-2xl font-bold"
                style={{
                  borderColor: project.accent + '60',
                  backgroundColor: project.accentSoft,
                  color: project.accentText,
                }}
              >
                {project.logoLabel}
              </div>
              <p className="text-sm text-text-secondary">Replace with real screenshot assets later.</p>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2">
            {project.screenshots.map((screenshot, index) => {
              const isSelected = index === activeScreenshot;

              return (
                <button
                  key={screenshot}
                  type="button"
                  onClick={() => setActiveScreenshot(index)}
                  className={`rounded-xl border px-3 py-2 text-left text-sm transition ${
                    isSelected
                      ? 'text-foreground'
                      : 'border-border bg-surface text-text-secondary hover:text-foreground'
                  }`}
                  style={
                    isSelected
                      ? {
                          borderColor: project.accent,
                          backgroundColor: project.accentSoft,
                          color: project.accentText,
                        }
                      : {}
                  }
                >
                  <span className="block font-mono text-xs uppercase tracking-[0.2em]">0{index + 1}</span>
                  <span className="mt-1 block">{screenshot}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProjectShowcase() {
  const [activeProjectId, setActiveProjectId] = useState<string | null>(projects[0].id);

  const activeProject = projects.find((project) => project.id === activeProjectId) ?? null;

  return (
    <section className="px-6 py-20 md:px-12">
      <div className="w-full">
        <div className="mb-12 w-full rounded-[2rem] border border-border/80 bg-gradient-to-br from-surface via-surface to-surface-strong/70 p-6 shadow-[0_22px_60px_-40px_rgba(15,118,110,0.25)] md:p-8">
          <p className="font-mono text-sm text-accent">Selected projects</p>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">Three products I built end-to-end</h2>
          <p className="mt-4 text-text-secondary leading-7">
            Each card opens into a compact case study with product context, architecture decisions, tech stack, and key
            features. The goal is quick scanning up front with deeper technical detail on demand.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-border bg-surface p-4 shadow-[0_18px_45px_-35px_rgba(15,23,42,0.2)]">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-text-secondary">Navigation</p>
              <p className="mt-2 text-sm leading-6 text-foreground">One expanded case study at a time for focus.</p>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-4 shadow-[0_18px_45px_-35px_rgba(15,23,42,0.2)]">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-text-secondary">Visuals</p>
              <p className="mt-2 text-sm leading-6 text-foreground">Screenshot carousel with project-specific accent styling.</p>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-4 shadow-[0_18px_45px_-35px_rgba(15,23,42,0.2)]">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-text-secondary">Details</p>
              <p className="mt-2 text-sm leading-6 text-foreground">Tabs for overview, architecture, stack, features, and links.</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {projects.map((project) => {
            const isActive = project.id === activeProjectId;

            return (
              <article
                key={project.id}
                className={`overflow-hidden rounded-3xl border bg-surface shadow-[0_18px_45px_-35px_rgba(15,23,42,0.22)] ${
                  isActive ? '' : 'border-border'
                }`}
                style={isActive ? { borderColor: project.accent + '66' } : {}}
              >
                <button
                  type="button"
                  onClick={() => setActiveProjectId(isActive ? null : project.id)}
                  className="group flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition hover:bg-surface-strong/60 md:px-7"
                  aria-expanded={isActive}
                >
                  <div className="flex min-w-0 items-center gap-4 md:gap-5">
                    <div
                      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-border bg-surface-strong font-mono text-sm"
                      style={{
                        borderColor: project.accent + '66',
                        backgroundColor: project.accentSoft,
                        color: project.accentText,
                      }}
                    >
                      {project.logoLabel}
                    </div>

                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-lg font-semibold md:text-xl">{project.name}</h3>
                        <span
                          className="rounded-full px-3 py-1 font-mono text-xs"
                          style={{
                            backgroundColor: project.accentSoft,
                            color: project.accentText,
                          }}
                        >
                          {project.year}
                        </span>
                      </div>
                      <p className="mt-1 line-clamp-2 text-sm text-text-secondary md:text-base">{project.shortDescription}</p>
                    </div>
                  </div>

                  <div className="flex shrink-0 items-center gap-3 text-text-secondary">
                    <span className="hidden font-mono text-xs uppercase tracking-[0.2em] sm:inline">
                      {isActive ? 'Close' : 'Open project'}
                    </span>
                    <span
                      className={`text-2xl transition ${isActive ? 'rotate-90' : 'group-hover:translate-x-1'}`}
                      style={isActive ? { color: project.accentText } : {}}
                    >
                      →
                    </span>
                  </div>
                </button>

                {isActive ? (
                  <div className="border-t border-border p-4 md:p-6">
                    <div
                      className="mb-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border px-4 py-3"
                      style={{
                        borderColor: project.accent + '66',
                        backgroundColor: project.accentSoft,
                      }}
                    >
                      <div>
                        <p className="font-mono text-xs uppercase tracking-[0.25em] text-text-secondary">Project role</p>
                        <p className="mt-1 font-semibold text-foreground">{project.role}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => setActiveProjectId(null)}
                        className="rounded-full border border-border bg-surface px-4 py-2 text-sm text-foreground transition"
                        style={{ borderColor: project.accent + '88', color: project.accentText }}
                      >
                        Close section
                      </button>
                    </div>

                    <div className="grid gap-5 lg:grid-cols-[1.45fr_1fr]">
                      <ProjectCarousel project={project} />
                      <ProjectDetailTabs project={project} />
                    </div>
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}