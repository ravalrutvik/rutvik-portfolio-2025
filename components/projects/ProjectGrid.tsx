import { projects } from "@/lib/data";
import Link from "next/link";

export function ProjectGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {projects.map((project) => (
        <article
          key={project.slug}
          className="group flex flex-col overflow-hidden rounded-3xl border border-(--border-subtle) bg-(--surface-card) shadow-lg shadow-[0_25px_70px_-50px_var(--shadow-soft)] transition hover:border-[var(--border-strong)]"
        >
          <div className="relative h-44 overflow-hidden bg-[linear-gradient(135deg,color-mix(in_srgb,var(--accent)_4%,transparent)_0%,color-mix(in_srgb,var(--accent)_2%,transparent)_45%,rgba(10,10,10,0.05)_100%)]">
            <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
              <div className="h-full w-full bg-[radial-gradient(circle_at_top,color-mix(in_srgb,var(--accent)_6%,transparent),transparent_60%)]" />
            </div>
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[var(--border-subtle)] to-transparent opacity-0 transition group-hover:opacity-100" />
          </div>
          <div className="flex flex-1 flex-col gap-4 p-6">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-[var(--text-primary)]">
                {project.title}
              </h3>
              <p className="text-base leading-relaxed text-[var(--text-secondary)]">
                {project.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-[var(--border-subtle)] bg-[var(--surface-muted)] px-3 py-1 text-xs font-medium text-[var(--text-secondary)]"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-auto flex items-center gap-3 pt-4 text-sm font-semibold text-[var(--text-secondary)]">
              {project.url ? (
                <Link
                  href={project.url}
                  target={project.url.startsWith("http") ? "_blank" : undefined}
                  rel={
                    project.url.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="inline-flex items-center gap-2 transition hover:text-[var(--text-primary)]"
                >
                  View Project →
                </Link>
              ) : null}
              {project.repo ? (
                <Link
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition hover:text-[var(--text-primary)]"
                >
                  Source
                </Link>
              ) : null}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

