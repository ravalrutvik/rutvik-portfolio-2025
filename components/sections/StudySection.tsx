"use client";

import { SectionHeading } from "../SectionHeading";
import { useSectionReveal } from "@/lib/hooks/useSectionReveal";

const studies = [
  {
    degree: "Bachelor's Degree",
    institution: "Swarrnim Startup & Innovation University",
    period: "2024 – 2027",
    field: "Bachelor of Computer Applications",
    summary:
      "Focused on core computer application concepts, modern development workflows, and practical software practices. Engaged in hands-on projects that strengthened problem-solving, logical thinking, and application development skills.",
  },
  {
    degree: "Diploma Degree",
    institution: "Gujarat Technological University (GTU)",
    period: "2019 – 2022",
    field: "Information Technology",
    summary:
      "Focused on core IT concepts, software fundamentals, and modern development practices. Gained hands-on experience through practical projects, labs, and applied programming workflows",
  }
] as const;

export function StudySection() {
  const sectionRef = useSectionReveal();

  return (
    <section
      ref={sectionRef}
      id="education"
      className="section-reveal relative overflow-hidden rounded-3xl border border-[var(--border-subtle)] bg-[var(--surface-panel)] px-2 py-10 sm:rounded-4xl sm:p-12"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_5%_15%,color-mix(in_srgb,var(--accent)_4%,transparent),transparent_55%),radial-gradient(circle_at_90%_85%,color-mix(in_srgb,var(--accent)_4%,transparent),transparent_60%)]" />
      <div className="relative z-10">
        <div className="text-center sm:text-left">
          <SectionHeading eyebrow="Education" title="Academic Background" />
        </div>
      </div>

      <div className="relative z-10 mt-10 grid gap-10 sm:mt-12 sm:gap-12">
        <span className="pointer-events-none absolute left-6 top-1.5 h-[calc(100%-0.75rem)] w-px sm:left-[1.35rem]">
          <span className="absolute inset-0 border-l border-dotted border-[var(--border-subtle)]" />
        </span>
        {studies.map((study, index) => (
          <article
            key={`${study.degree}-${study.institution}-${index}`}
            className="relative ml-8 flex flex-col gap-4 rounded-3xl border border-[var(--border-subtle)] bg-[var(--surface-card)] p-4 pl-8 text-[var(--text-secondary)] shadow-[0_25px_60px_-45px_var(--shadow-soft)] backdrop-blur-sm sm:ml-12 sm:gap-5 sm:rounded-4xl sm:p-8 sm:pl-10"
          >
            <span className="pointer-events-none absolute left-[-1.35rem] top-6 flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--surface-panel)] shadow-[0_18px_55px_-25px_var(--shadow-soft)] sm:left-[-1.65rem]">
              <span
                className="h-5 w-5 rounded-full bg-[var(--accent)] shadow-[0_0_18px_color-mix(in_srgb,var(--accent)_45%,transparent)]"
              />
            </span>
            <header className="space-y-2 sm:space-y-3">
              <h3 className="text-lg font-semibold tracking-tight text-[var(--text-primary)] sm:text-xl">
                {study.degree}
              </h3>
              <p className="text-sm font-medium uppercase tracking-[0.28em] text-[var(--text-secondary)]/70">
                {study.period}
              </p>
              <div className="text-base font-semibold text-[var(--text-primary)]">
                {study.institution}
              </div>
              <div className="text-sm text-[var(--text-secondary)]">
                {study.field}
              </div>
            </header>
            <p className="text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
              {study.summary}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

