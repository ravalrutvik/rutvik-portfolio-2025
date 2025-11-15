"use client";

import { SectionHeading } from "../SectionHeading";
import { useSectionReveal } from "@/lib/hooks/useSectionReveal";

const skillCategories = [
  {
    title: "Languages",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript"],
  },
  {
    title: "Frameworks",
    skills: ["Next.js", "TailwindCSS"],
  },
  {
    title: "Libraries",
    skills: [
      "React",
      "React Query",
      "Redux",
      "React Router DOM",
      "Shadcn/UI",
      "Bootstrap",
      "Sass",
      "React-hook-form",
    ],
  },
  {
    title: "Coding Tools",
    skills: ["Cursor", "VSCode", "Git", "GitHub", "NPM"],
  },
  {
    title: "Deployment Platforms",
    skills: ["Vercel","Vite"],
  },
];

export function SkillsSection() {
  const sectionRef = useSectionReveal();

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="section-reveal rounded-4xl border border-[var(--border-subtle)] bg-[var(--surface-panel)] p-4 text-[var(--text-primary)] shadow-[0_20px_80px_-50px_var(--shadow-soft)] sm:p-12"
    >
      <SectionHeading
        eyebrow="Skills"
        title="Core technologies and tools"
        description="Tools I rely on to build performant, maintainable, and scalable web interfaces."
      />
      <div className="mt-8 space-y-6">
        {skillCategories.map((category) => (
          <div key={category.title} className="space-y-3">
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-[var(--text-secondary)]">
                {category.title}
              </h3>
              <div className="h-px flex-1 bg-[var(--border-subtle)]" />
            </div>
            <div className="flex flex-wrap gap-2.5">
              {category.skills.map((skill) => (
                <div
                  key={skill}
                  className="group relative rounded-lg border border-[var(--border-subtle)] bg-[var(--surface-card)] px-3.5 py-2 text-sm font-medium text-[var(--text-primary)] shadow-[0_2px_8px_-2px_var(--shadow-soft)] transition-all duration-200 hover:border-[var(--border-strong)] hover:bg-[var(--surface-muted)] hover:shadow-[0_4px_12px_-2px_var(--shadow-soft)]"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

