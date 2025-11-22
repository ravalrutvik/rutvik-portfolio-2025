export function ProjectHero() {

  return (
    <section
      // ref={sectionRef}
      className="relative overflow-hidden rounded-4xl border border-(--border-subtle) bg-(--surface-panel) p-10 text-(--text-primary) shadow-[0_40px_160px_-90px_var(--shadow-soft)] sm:p-12"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(145deg,color-mix(in_srgb,var(--accent)_3%,transparent)_0%,color-mix(in_srgb,var(--surface-panel)_90%,transparent)_55%,var(--surface-panel)_100%)]" />
      <div className="relative flex flex-col gap-6">
        <p className="text-sm font-semibold uppercase tracking-[0.45em] text-[color-mix(in_srgb,var(--text-secondary)_70%,transparent)]">
          Projects
        </p>
        <h1 className="important-text-glow max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
          Product work shaped by craft and accountability.
        </h1>
        <p className="max-w-2xl text-base text-(--text-secondary)">
          A concise look at the products I&apos;ve shipped, why the stack choices mattered, and the real outcomes
          they delivered for teams and customers.
        </p>
      </div>
    </section>
  );
}


