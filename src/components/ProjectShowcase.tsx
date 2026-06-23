import { ProjectShowcaseHeader } from '@/components/projects';

export function ProjectShowcase() {
  return (
    <section id="projects" className="px-4 py-8 md:px-12 md:py-12 scroll-mt-24 md:scroll-mt-28">
      <div className="w-full">
        <ProjectShowcaseHeader />
      </div>
    </section>
  );
}