import { TechIcon } from './TechIcon';

export interface Skill {
  category: string;
  items: string[];
}

export interface SkillsGridProps {
  skills: Skill[];
}

export function SkillsGrid({ skills }: SkillsGridProps) {
  return (
    <section id="skills" className="px-6 py-10 md:px-12 md:py-12 scroll-mt-24 md:scroll-mt-28">
      <div className="w-full rounded-[2rem] border border-border/80 bg-gradient-to-br from-surface via-surface to-surface-strong/70 p-6 shadow-[0_22px_60px_-40px_rgba(15,118,110,0.25)] md:p-8">
        <div className="mb-12 w-full max-w-4xl">
          <p className="font-mono text-sm text-accent">Technical skills</p>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">My Technical Toolkit & Expertise</h2>
          <p className="mt-4 text-text-secondary leading-7">
            The languages, frameworks, and tools I leverage to build scalable, high-performance web products. 
            I focus heavily on end-to-end type safety, responsive component design, database modeling, and structured AI-agent workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((skillGroup, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-border bg-surface p-6 shadow-[0_18px_45px_-35px_rgba(15,23,42,0.2)] transition hover:-translate-y-1 hover:border-accent"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.25em] text-text-secondary">0{idx + 1}</p>
                  <h3 className="mt-2 text-xl font-semibold text-foreground">{skillGroup.category}</h3>
                </div>
                <span className="rounded-full bg-accent-soft px-3 py-1 font-mono text-xs text-accent">
                  {skillGroup.items.length} tools
                </span>
              </div>

              <ul className="mt-5 flex flex-wrap gap-2.5">
                {skillGroup.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 rounded-full border border-border bg-surface-strong px-3 py-1.5 text-sm font-medium text-foreground transition-all duration-300 hover:border-accent hover:bg-accent-soft/20 hover:scale-[1.02] shadow-xs cursor-default"
                  >
                    <TechIcon name={item} className="h-4.5 w-4.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
