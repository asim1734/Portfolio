'use client';

import { useState } from 'react';
import { projects } from '@/data/projects';
import { ProjectCard, ProjectShowcaseHeader } from '@/components/projects';

export function ProjectShowcase() {
  const [activeProjectId, setActiveProjectId] = useState<string | null>(projects[0].id);

  return (
    <section id="projects" className="px-6 py-20 md:px-12 scroll-mt-24 md:scroll-mt-28">
      <div className="w-full">
        <ProjectShowcaseHeader />

        <div className="space-y-4">
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
    </section>
  );
}