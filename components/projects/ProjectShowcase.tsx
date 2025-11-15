"use client";

import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data";
import { useSectionReveal } from "@/lib/hooks/useSectionReveal";

function ProjectVisual({
  image,
  title,
  stats,
}: {
  image?: string;
  title: string;
  stats?: { label: string; value: string; hint?: string }[];
}) {
  return (
    <div className="flex flex-col gap-5">
      <div className="relative overflow-hidden rounded-3xl border border-(--border-subtle) bg-[radial-gradient(circle_at_top,color-mix(in_srgb,var(--accent)_6%,transparent),color-mix(in_srgb,var(--surface-card)_90%,transparent))] shadow-[0_30px_120px_-60px_var(--shadow-soft)] transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1 group-hover:shadow-[0_45px_160px_-80px_var(--shadow-soft)]">
        <div className="flex items-center gap-2 border-b border-(--border-subtle) px-6 py-4">
          <span className="h-2.5 w-2.5 rounded-full bg-[color-mix(in_srgb,var(--text-secondary)_70%,transparent)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[color-mix(in_srgb,var(--text-secondary)_40%,transparent)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[color-mix(in_srgb,var(--text-secondary)_70%,transparent)]" />
          <div className="ml-auto flex gap-1.5 text-[10px] uppercase tracking-[0.3em] text-(--text-secondary)">
            <span>UI</span>
            <span>Preview</span>
          </div>
        </div>
        <div
          className="relative bg-(--surface-panel) transition duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.02] group-hover:shadow-[0_35px_120px_-80px_var(--shadow-soft)]"
          style={{ aspectRatio: "16 / 10" }}
        >
          {image ? (
            <>
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                sizes="(min-width: 1024px) 600px, 100vw"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.15),rgba(2,6,23,0.55))]" />
            </>
          ) : (
            <div className="flex h-full w-full items-center justify-center text-xs uppercase tracking-[0.3em] text-(--text-secondary)">
              Preview coming soon
            </div>
          )}
        </div>
      </div>
      {stats && stats.length > 0 && (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-(--border-subtle) bg-(--surface-card) px-5 py-4 shadow-[0_20px_60px_-40px_var(--shadow-soft)] transition-all duration-800 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-[var(--border-strong)]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-(--text-secondary)">
                {stat.label}
              </p>
              <p className="mt-2 text-2xl font-semibold text-(--text-primary)">
                {stat.value}
              </p>
              {stat.hint ? (
                <p className="mt-1 text-[11px] text-(--text-secondary)">{stat.hint}</p>
              ) : null}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

type Project = (typeof projects)[number];

function ProjectCard({ project }: { project: Project }) {
  const articleRef = useSectionReveal();

  return (
    <article
      ref={articleRef}
      className="section-reveal group relative overflow-hidden rounded-4xl border border-(--border-subtle) bg-(--surface-panel) p-8 shadow-[0_40px_160px_-90px_var(--shadow-soft)] transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-[var(--border-strong)] hover:shadow-[0_55px_200px_-100px_var(--shadow-soft)] sm:p-10 lg:p-12"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,color-mix(in_srgb,var(--accent)_3%,transparent),transparent_55%)] opacity-80 transition-opacity duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100" />
      <div className="flex flex-col gap-10 lg:grid lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:items-start lg:gap-12">
        <div className="order-2 lg:order-1">
          <ProjectVisual image={project.image} title={project.title} stats={project.stats} />
        </div>

        <div className="order-1 flex flex-col gap-6 lg:order-2">
          <div className="flex flex-wrap items-center gap-4 text-[11px] uppercase tracking-[0.35em] text-[color-mix(in_srgb,var(--text-secondary)_85%,transparent)] transition duration-800 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:gap-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-(--border-subtle) bg-(--surface-card) px-4 py-1 text-(--text-primary) shadow-[0_6px_18px_-12px_var(--shadow-soft)] transition-all duration-800 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:border-[var(--border-strong)] group-hover:shadow-[0_10px_26px_-12px_var(--shadow-soft)]">
              <span className="h-1.5 w-1.5 rounded-full bg-(--accent) shadow-[0_0_10px_color-mix(in_srgb,var(--accent)_45%,transparent)]" />
              {project.role}
            </span>
            {project.timeframe ? (
              <span className="inline-flex items-center gap-2 rounded-full border border-(--border-subtle) bg-(--surface-card) px-4 py-1 text-(--text-secondary) shadow-[0_6px_18px_-12px_var(--shadow-soft)] transition-all duration-800 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:border-[var(--border-strong)] group-hover:text-[var(--text-primary)]">
                {project.timeframe}
              </span>
            ) : null}
          </div>

          <header className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-(color-mix(in_srgb,var(--text-secondary)_70%,transparent))">Project</p>
            <h2 className="text-3xl font-semibold leading-tight text-(--text-primary) transition duration-800 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-(--accent) sm:text-4xl">
              {project.title}
            </h2>
          </header>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-(--border-subtle) bg-(--surface-muted) px-3 py-1 text-xs font-medium text-(--text-secondary) uppercase tracking-[0.2em] transition-all duration-800 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-6 rounded-3xl border border-(--border-subtle) bg-(--surface-card) p-6 text-base leading-relaxed text-(--text-secondary) transition duration-800 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:border-[var(--border-strong)] lg:mt-10">
        {project.description}
      </div>
      <div className="mt-6 flex justify-end">
        <a
          href={project?.url}
          target="_blank"
          className="ml-auto inline-flex items-center gap-2 rounded-full border border-(--border-subtle) px-4 py-2 text-xs uppercase tracking-[0.35em] text-(--text-secondary) transition-all duration-800 ease-[cubic-bezier(0.22,1,0.36,1)] hover:translate-x-1 hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"
        >
          View →
        </a>
      </div>
    </article>
  );
}

export function ProjectShowcase() {
  return (
    <div className="flex flex-col gap-12">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}


