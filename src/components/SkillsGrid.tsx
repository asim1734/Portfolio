export interface Skill {
  category: string;
  items: string[];
}

export interface SkillsGridProps {
  skills: Skill[];
}

export function SkillsGrid({ skills }: SkillsGridProps) {
  return (
    <section className="px-6 py-20 md:px-12">
      <div className="w-full">
        <div className="mb-12 w-full max-w-4xl">
          <p className="font-mono text-sm text-accent">Technical skills</p>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">The tools I reach for when shipping UI and product work.</h2>
          <p className="mt-4 text-text-secondary leading-7">
            The portfolio stays grounded in execution: building interfaces, integrating systems, and keeping the work
            readable for both users and reviewers.
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

              <ul className="mt-5 flex flex-wrap gap-3">
                {skillGroup.items.map((item, i) => (
                  <li
                    key={i}
                    className="rounded-full border border-border bg-surface-strong px-3 py-2 text-sm text-foreground"
                  >
                    {item}
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
