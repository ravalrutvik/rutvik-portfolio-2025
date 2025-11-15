"use client";

import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "../SectionHeading";
import { projects } from "@/lib/data";
import { useSectionReveal } from "@/lib/hooks/useSectionReveal";

export function ProjectsPreviewSection() {
  const sectionRef = useSectionReveal();

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="section-reveal rounded-4xl border border-[var(--border-subtle)] bg-[var(--surface-panel)] p-4 text-[var(--text-primary)] sm:p-12"
    >
      <SectionHeading
        eyebrow="Projects"
        title="Selected work"
        description={
          <>
            A sampling of interfaces and product experiences I&apos;ve crafted
            recently. Explore the full case studies for implementation details,
            design systems, and performance insights.
          </>
        }
      />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.slice(0, 3).map((project) => (
          <article
            key={project.slug}
            className="group relative overflow-hidden rounded-3xl border border-[var(--border-subtle)] bg-[var(--surface-card)] p-6 shadow-lg shadow-[0_25px_70px_-50px_var(--shadow-soft)] transition hover:border-[var(--border-strong)]"
          >
            <div className="flex flex-col gap-4">
              <div
                className="relative overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-[linear-gradient(135deg,color-mix(in_srgb,var(--accent)_4%,transparent)_0%,color-mix(in_srgb,var(--accent)_2%,transparent)_40%,rgba(10,10,10,0.05)_100%)] opacity-90 transition group-hover:opacity-100"
                style={{ aspectRatio: "16 / 10" }}
              >
                {project.image ? (
                  <>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      sizes="(min-width: 768px) 320px, 100vw"
                      loading="lazy"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(6,12,24,0.2),rgba(6,12,24,0.65))]" />
                  </>
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-[10px] uppercase tracking-[0.35em] text-[var(--text-secondary)]">
                    Preview coming soon
                  </div>
                )}
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-[var(--text-primary)]">
                  {project.title}
                </h3>
                <p className="text-base leading-relaxed text-[var(--text-secondary)]">
                  {project.description}
                </p>
                <ul className="flex flex-wrap gap-2 text-xs text-[var(--text-secondary)]">
                  {project.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-[var(--border-subtle)] bg-[var(--surface-muted)] px-3 py-1"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={project?.url}
                target="_blank"
                className="ml-auto inline-flex items-center gap-2 rounded-full border border-(--border-subtle) px-4 py-2 text-xs uppercase tracking-[0.35em] text-(--text-secondary) transition-all duration-800 ease-[cubic-bezier(0.22,1,0.36,1)] hover:translate-x-1 hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"
              >
                View Live →
              </a>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-8 flex justify-end">
        <Link
          href="/projects"
          className="rounded-full border border-[var(--border-subtle)] bg-transparent px-6 py-2 text-sm font-semibold text-[var(--text-primary)] transition hover:border-[var(--border-strong)] hover:bg-[var(--surface-muted)]"
        >
          View all projects
        </Link>
      </div>
    </section>
  );
}

