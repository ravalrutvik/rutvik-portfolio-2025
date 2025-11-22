import { SectionHeading } from "../SectionHeading";

const experiences = [
  {
    role: "Jr. React.js Developer",
    company: "BigBrainy Infotech",
    period: "October 2024 – August 2025",
    summary:
      "Worked on multiple React-based projects, including e-commerce platforms and movie-related applications, focusing on clean UI development and smooth user experiences.",
    technologies: ["React","JavaScript", "TypeScript", "Tailwind CSS"],
    accent: "from-white to-gray-300",
  },
  {
    role: "Frontend Developer",
    company: "Crawlapps",
    period: "August 2023 – September 2024",
    summary:
      "Implemented responsive product features and dashboard experiences, partnering with designers and backend engineers to maintain a smooth data flow across the platform.",
    technologies: ["React", "JavaScript", "TypeScript"],
    accent: "from-white to-gray-300",
  },
  {
    role: "Frontend Intern",
    company: "Crawlapps",
    period: "March 2023 – July 2024",
    summary:
      "Built foundational UI components and strengthened fundamentals in HTML, CSS, and JavaScript while contributing to production-ready React features.",
    technologies: ["HTML", "CSS", "Sass", "JavaScript", "React", "TypeScript"],
    accent: "from-white to-gray-300",
  },
] as const;

export function ExperienceSection() {

  return (
    <section
      // ref={sectionRef}
      id="experience"
      className="relative overflow-hidden rounded-3xl border border-[var(--border-subtle)] bg-[var(--surface-panel)] px-4 py-10 sm:rounded-4xl sm:p-12"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_5%_15%,color-mix(in_srgb,var(--accent)_4%,transparent),transparent_55%),radial-gradient(circle_at_90%_85%,color-mix(in_srgb,var(--accent)_4%,transparent),transparent_60%)]" />
      <div className="relative z-10">
        <div className="text-center sm:text-left">
          <SectionHeading eyebrow="Experience" title="Professional Journey" />
        </div>
      </div>

      <div className="relative z-10 mt-10 grid gap-10 sm:mt-12 sm:gap-12">
        <span className="pointer-events-none absolute left-6 top-1.5 h-[calc(100%-0.75rem)] w-px sm:left-[1.35rem]">
          <span className="absolute inset-0 border-l border-dotted border-[var(--border-subtle)]" />
        </span>
        {experiences.map((experience, index) => (
          <article
            key={`${experience.role}-${experience.company}-${index}`}
            className="relative ml-8 flex flex-col gap-4 rounded-3xl border border-[var(--border-subtle)] bg-[var(--surface-card)] p-6 pl-8 text-[var(--text-secondary)] shadow-[0_25px_60px_-45px_var(--shadow-soft)] backdrop-blur-sm sm:ml-12 sm:gap-5 sm:rounded-4xl sm:p-8 sm:pl-10"
          >
            <span className="pointer-events-none absolute left-[-1.35rem] top-6 flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--surface-panel)] shadow-[0_18px_55px_-25px_var(--shadow-soft)] sm:left-[-1.65rem]">
              <span
                className="h-5 w-5 rounded-full bg-[var(--accent)] shadow-[0_0_18px_color-mix(in_srgb,var(--accent)_45%,transparent)]"
              />
            </span>
            <header className="space-y-2 sm:space-y-3">
              <h3 className="text-lg font-semibold tracking-tight text-[var(--text-primary)] sm:text-xl">
                {experience.role}
              </h3>
              <p className="text-sm font-medium uppercase tracking-[0.28em] text-[var(--text-secondary)]/70">
                {experience.period}
              </p>
              <div className="text-base font-semibold text-[var(--text-primary)]">
                {experience.company}
              </div>
            </header>
            <p className="text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
              {experience.summary}
            </p>
            <ul className="flex flex-wrap gap-2 pt-1">
              {experience.technologies.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-[var(--border-subtle)] bg-[var(--surface-muted)] px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-[var(--text-secondary)]"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

