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
      data-state={isActive ? 'open' : 'closed'}
      className={`relative overflow-hidden rounded-3xl border bg-surface ${isActive ? 'border-border' : ''}`}
      style={{
        borderColor: isActive ? project.accent + '66' : undefined,
        transform: isActive ? 'scale(1.01)' : 'scale(1)',
        boxShadow: isActive
          ? '0 24px 60px -40px rgba(15,23,42,0.3)'
          : '0 18px 45px -35px rgba(15,23,42,0.22)',
        willChange: 'transform, box-shadow',
        transitionProperty: 'transform, box-shadow, border-color, background-color',
        transitionDuration: '500ms',
        transitionTimingFunction: 'cubic-bezier(0.22,1,0.36,1)',
      }}
    >
      <button
        type="button"
        onClick={onToggle}
        className="group flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-surface-strong/60 md:px-7"
        aria-expanded={isActive}
      >
        <div className="flex min-w-0 items-center gap-4 md:gap-5">
          <div
            className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border bg-surface-strong font-sans text-sm overflow-hidden ${
              isActive ? 'shadow-[0_12px_30px_-16px_rgba(15,23,42,0.28)]' : ''
            }`}
            style={{
              borderColor: project.accent + '66',
              backgroundColor: project.accentSoft,
              color: project.accentText,
              transform: isActive ? 'scale(1.05)' : 'scale(1)',
              transitionProperty: 'transform, box-shadow',
              transitionDuration: '500ms',
              transitionTimingFunction: 'cubic-bezier(0.22,1,0.36,1)',
            }}
          >
            {project.logoImage ? (
              <img
                src={project.logoImage}
                alt={`${project.name} logo`}
                className="h-10 w-10 object-contain"
                draggable={false}
              />
            ) : (
              project.logoLabel
            )}
          </div>

          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-3">
              <h3
                className="text-lg font-semibold md:text-xl"
                style={{
                  letterSpacing: isActive ? '-0.02em' : '0',
                  transitionProperty: 'letter-spacing, color',
                  transitionDuration: '500ms',
                  transitionTimingFunction: 'cubic-bezier(0.22,1,0.36,1)',
                }}
              >
                {project.name}
              </h3>
              <span
                className="rounded-full px-3 py-1 font-sans text-xs"
                style={{
                  backgroundColor: project.accentSoft,
                  color: project.accentText,
                  transform: isActive ? 'translateY(-1px)' : 'translateY(0)',
                  transitionProperty: 'transform, background-color, color',
                  transitionDuration: '500ms',
                  transitionTimingFunction: 'cubic-bezier(0.22,1,0.36,1)',
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
            className="text-2xl"
            style={{
              color: isActive ? project.accentText : undefined,
              transform: isActive ? 'rotate(90deg) scale(1.1)' : 'translateX(0)',
              transitionProperty: 'transform, color',
              transitionDuration: '500ms',
              transitionTimingFunction: 'cubic-bezier(0.22,1,0.36,1)',
            }}
          >
            →
          </span>
        </div>
      </button>

      <div
        data-project-details
        className={`overflow-hidden ${isActive ? 'pointer-events-auto' : 'pointer-events-none'}`}
        style={{
          maxHeight: isActive ? '1800px' : '0px',
          opacity: isActive ? 1 : 0,
          transform: isActive ? 'translateY(0px)' : 'translateY(-16px)',
          transitionProperty: 'max-height, opacity, transform',
          transitionDuration: '700ms',
          transitionTimingFunction: 'cubic-bezier(0.22,1,0.36,1)',
        }}
        aria-hidden={!isActive}
      >
        <div className="min-h-0 overflow-hidden">
          <div
            className="p-4 md:p-6"
            style={{
              opacity: isActive ? 1 : 0,
              transform: isActive ? 'translateY(0px) scale(1)' : 'translateY(12px) scale(0.985)',
              transitionProperty: 'opacity, transform',
              transitionDuration: '700ms',
              transitionTimingFunction: 'cubic-bezier(0.22,1,0.36,1)',
            }}
          >
            <div className="grid gap-5 lg:grid-cols-[1.45fr_1fr]">
              <div
                style={{
                  opacity: isActive ? 1 : 0,
                  transform: isActive ? 'translateY(0px)' : 'translateY(16px)',
                  transitionProperty: 'opacity, transform',
                  transitionDuration: '700ms',
                  transitionTimingFunction: 'cubic-bezier(0.22,1,0.36,1)',
                  transitionDelay: isActive ? '75ms' : '0ms',
                }}
              >
                <ProjectCarousel project={project} />
              </div>
              <div
                style={{
                  opacity: isActive ? 1 : 0,
                  transform: isActive ? 'translateY(0px)' : 'translateY(16px)',
                  transitionProperty: 'opacity, transform',
                  transitionDuration: '700ms',
                  transitionTimingFunction: 'cubic-bezier(0.22,1,0.36,1)',
                  transitionDelay: isActive ? '150ms' : '0ms',
                }}
              >
                <ProjectDetailTabs project={project} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
