export function ProjectShowcaseHeader() {
  return (
    <div className="mb-12 w-full rounded-[2rem] border border-border/80 bg-gradient-to-br from-surface via-surface to-surface-strong/70 p-6 shadow-[0_22px_60px_-40px_rgba(15,118,110,0.25)] md:p-8">
      <p className="font-sans text-sm text-accent">Selected projects</p>
      <h2 className="mt-4 text-3xl font-bold md:text-4xl">Three products I built end-to-end</h2>
      <p className="mt-4 text-text-secondary leading-7">
        Each card opens into a compact case study with product context, architecture decisions, tech stack, and key
        features. The goal is quick scanning up front with deeper technical detail on demand.
      </p>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <div className="rounded-2xl border border-border bg-surface p-4 shadow-[0_18px_45px_-35px_rgba(15,23,42,0.2)]">
          <p className="font-sans text-xs uppercase tracking-[0.25em] text-text-secondary">Navigation</p>
          <p className="mt-2 text-sm leading-6 text-foreground">One expanded case study at a time for focus.</p>
        </div>
        <div className="rounded-2xl border border-border bg-surface p-4 shadow-[0_18px_45px_-35px_rgba(15,23,42,0.2)]">
          <p className="font-sans text-xs uppercase tracking-[0.25em] text-text-secondary">Visuals</p>
          <p className="mt-2 text-sm leading-6 text-foreground">Screenshot carousel with project-specific accent styling.</p>
        </div>
        <div className="rounded-2xl border border-border bg-surface p-4 shadow-[0_18px_45px_-35px_rgba(15,23,42,0.2)]">
          <p className="font-sans text-xs uppercase tracking-[0.25em] text-text-secondary">Details</p>
          <p className="mt-2 text-sm leading-6 text-foreground">Tabs for overview, architecture, stack, features, and links.</p>
        </div>
      </div>
    </div>
  );
}
