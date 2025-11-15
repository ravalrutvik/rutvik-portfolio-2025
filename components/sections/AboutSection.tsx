"use client";

import { SectionHeading } from "../SectionHeading";
import { useSectionReveal } from "@/lib/hooks/useSectionReveal";

const highlights = [
  {
    label: "Years in Frontend",
    value: "2+",
  },
  {
    label: "Recent Focus",
    value: "Next.js Platforms",
  },
  {
    label: "Design DNA",
    value: "Systems & Motion",
  },
] as const;

const pillars = [
  {
    title: "Product Craft",
    description:
      "Translate fuzzy product ideas into shippable journeys, balancing aesthetics with performance budgets and accessibility guardrails.",
  },
  {
    title: "Engineering Rigor",
    description:
      "Build resilient component libraries, obsess over state management, and automate testing to keep interfaces stable through growth.",
  },
  {
    title: "Team Momentum",
    description:
      "Collaborate with designers, PMs, and backend teams to unblock delivery, mentor peers, and share playbooks that lift the whole squad.",
  },
] as const;

export function AboutSection() {
  const sectionRef = useSectionReveal();

  return (
    <section
      ref={sectionRef}
      id="about"
      className="section-reveal relative overflow-hidden rounded-4xl border border-[var(--border-subtle)] bg-[var(--surface-panel)] p-10 text-[var(--text-primary)] sm:p-12"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_15%,color-mix(in srgb,var(--accent) 6%,transparent),transparent_55%),radial-gradient(circle_at_85%_80%,color-mix(in srgb,var(--accent) 5%,transparent),transparent_60%)]" />
      <div className="relative z-10">
        <SectionHeading
          eyebrow="About"
          title="Blending product intuition with engineering precision"
          description="I thrive at the intersection of design and delivery—taking complex briefs, crafting component systems, and shipping polished experiences that teams can scale."
        />
      </div>

      <div className="relative z-10 grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:gap-14">
        <div className="space-y-6 rounded-3xl border border-[var(--border-subtle)] bg-[var(--surface-card)] p-7 shadow-[0_35px_90px_-60px_var(--shadow-soft)]">
          <p className="text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
            I’m Rutvik Raval, a frontend engineer who loves shaping inclusive, responsive web apps.
            From rapid prototypes to production rollouts, I obsess over visual polish, smooth
            micro-interactions, and code that stays maintainable under pressure.
          </p>
          <p className="text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
            Recent work has centered on Next.js ecosystems—designing component libraries, integrating
            data-rich experiences, and tuning performance with analytics and profiling. I partner closely
            with design and backend teams to keep delivery aligned, on time, and delightful for users.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {highlights.map((highlight) => (
              <div
                key={highlight.label}
                className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-muted)] px-5 py-4 text-center shadow-inner shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
              >
                <div className="text-2xl font-semibold tracking-tight text-[var(--text-primary)]">
                  {highlight.value}
                </div>
                <div className="mt-2 text-xs uppercase tracking-[0.25em] text-[var(--text-secondary)] opacity-80">
                  {highlight.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4 rounded-3xl border border-[var(--border-subtle)] bg-[var(--surface-card)] p-7 shadow-[0_30px_80px_-60px_var(--shadow-soft)]">
          <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--text-secondary)]">
            What anchors my work
          </h3>
          <ul className="space-y-4">
            {pillars.map((pillar) => (
              <li key={pillar.title}>
                <div className="space-y-2 rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-muted)] p-5">
                  <h4 className="text-base font-semibold text-[var(--text-primary)]">
                    {pillar.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                    {pillar.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

