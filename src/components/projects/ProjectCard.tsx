import { type ProjectShowcaseItem } from '@/data/projects';
import { ProjectCarousel } from './ProjectCarousel';
import { ProjectDetailTabs } from './ProjectDetailTabs';

type ProjectCardProps = {
  project: ProjectShowcaseItem;
  isActive: boolean;
  onToggle: () => void;
};

export function ProjectCard({ project, isActive, onToggle }: ProjectCardProps) {
  return (
    <article
      className={`overflow-hidden rounded-3xl border bg-surface shadow-[0_18px_45px_-35px_rgba(15,23,42,0.22)] ${
        isActive ? '' : 'border-border'
      }`}
      style={isActive ? { borderColor: project.accent + '66' } : {}}
    >
      <button
        type="button"
        onClick={onToggle}
        className="group flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition hover:bg-surface-strong/60 md:px-7"
        aria-expanded={isActive}
      >
        <div className="flex min-w-0 items-center gap-4 md:gap-5">
          <div
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-border bg-surface-strong font-sans text-sm"
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
                className="rounded-full px-3 py-1 font-sans text-xs"
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
          <span className="hidden font-sans text-xs uppercase tracking-[0.2em] sm:inline">
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
        <div className="p-4 md:p-6">
          <div className="grid gap-5 lg:grid-cols-[1.45fr_1fr]">
            <ProjectCarousel project={project} />
            <ProjectDetailTabs project={project} />
          </div>
        </div>
      ) : null}
    </article>
  );
}
