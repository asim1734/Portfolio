'use client';

import { useState } from 'react';
import { projects } from '@/data/projects';
import { ProjectCard } from './ProjectCard';

export function ProjectShowcaseHeader() {
  const [activeProjectId, setActiveProjectId] = useState<string | null>(projects[0].id);

  return (
    <div className="mb-6 w-full rounded-[2rem] border border-border/80 bg-gradient-to-br from-surface via-surface to-surface-strong/70 p-6 shadow-[0_22px_60px_-40px_rgba(15,118,110,0.25)] md:p-8">
      <h2 className="mt-4 text-3xl font-bold md:text-4xl">Selected Projects & Architecture</h2>
      <p className="mt-4 text-text-secondary leading-7">
        A showcase of end-to-end full-stack applications. Click on any project to explore its system design, monorepo structure, type-safe schema layers, API integrations, and live links.
      </p>

      <div className="mt-8 space-y-4">
        {projects.map((project) => {
          const isActive = project.id === activeProjectId;

          return (
            <ProjectCard
              key={project.id}
              project={project}
              isActive={isActive}
              onToggle={() => setActiveProjectId(isActive ? null : project.id)}
            />
          );
        })}
      </div>
    </div>
  );
}
