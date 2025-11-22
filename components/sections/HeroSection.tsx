import Image from "next/image";
import Link from "next/link";
import type { SVGProps } from "react";

export function HeroSection() {
  return (
    <section
      // ref={sectionRef}
      // section-reveal
      className="relative overflow-hidden rounded-2xl border border-(--border-subtle) bg-(--surface-panel) px-4 py-8 text-(--text-primary) shadow-[0_60px_160px_-70px_var(--shadow-soft)] sm:rounded-[2.5rem] sm:px-8 sm:py-14 lg:px-16 lg:py-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,color-mix(in_srgb,var(--accent)_6%,transparent),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_25%,color-mix(in_srgb,var(--accent)_4%,transparent),transparent_60%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-(--border-subtle) to-transparent opacity-60" />
      <div className="absolute -left-32 bottom-0 h-64 w-64 rounded-full bg-(--accent-soft)/5 blur-3xl opacity-60 sm:-left-20 sm:h-80 sm:w-80" />
      <div className="absolute -right-24 top-12 h-72 w-72 rounded-full bg-(--accent-soft)/5 blur-3xl opacity-60 sm:-right-16 sm:h-96 sm:w-96" />
      <div className="relative z-10 grid gap-8 sm:gap-14 lg:grid-cols-[minmax(0,1.1fr),minmax(320px,0.9fr)]">
        <div className="flex flex-col gap-6 sm:gap-10">
          <div className="space-y-4 sm:space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-(--border-subtle) bg-(--surface-card) px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-[var(--text-secondary)] sm:px-4 sm:text-xs">
              <SparkleIcon className="h-3.5 w-3.5 text-(--text-secondary) sm:h-4 sm:w-4" />
              About Me
            </span>
            <div className="space-y-4 sm:space-y-6">
              <h1 className="important-text-glow text-3xl font-semibold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
                Building&nbsp;
                <span className="inline text-[var(--accent)]">reliable web apps.</span>
              </h1>
              <p className="max-w-full text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base lg:text-lg">
                I'm Rutvik Raval, a frontend specialist blending design sensibility with engineering
                rigor. From polished design systems to production-ready micro-interactions, I obsess over
                performance, accessibility, and flows that just feel right.
              </p>
            </div>
          </div>
          <div className="grid gap-4 sm:gap-5 sm:grid-cols-2">
            <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-card)] p-4 shadow-[0_20px_60px_-45px_var(--shadow-soft)] backdrop-blur sm:rounded-3xl sm:p-6">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-[var(--text-secondary)] sm:text-xs">
                Focus Areas
              </p>
              <ul className="mt-3 space-y-2.5 text-xs text-[var(--text-primary)] sm:mt-4 sm:space-y-3 sm:text-sm">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[var(--accent)]" />
                  Modern UI development crafted with HTML, CSS, and responsive design principles.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[var(--accent)]" />
                  Reusable, scalable component architecture built with React & Next.js.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[var(--accent)]" />
                  High-performance web experiences with clean design and smooth interactions.
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-card)] p-4 shadow-[0_20px_60px_-45px_var(--shadow-soft)] backdrop-blur sm:rounded-3xl sm:p-6">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-[var(--text-secondary)] sm:text-xs">
                Currently
              </p>
              <div className="mt-3 space-y-3 text-xs text-[var(--text-primary)] sm:mt-4 sm:space-y-4 sm:text-sm">
                <p>
                  Collaborating with a team to build polished, high-quality frontend experiences.
                </p>
                <div className="availability-badge inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.28em] sm:gap-2 sm:px-4 sm:text-xs">
                  <AvailabilityIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                  Available for new opportunities
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 rounded-full bg-[var(--accent)] px-5 py-2.5 text-xs font-semibold text-[var(--background)] shadow-[0_30px_80px_-40px_var(--shadow-soft)] transition hover:scale-[1.015] sm:gap-2 sm:px-8 sm:py-3.5 sm:text-sm"
            >
              View Projects
            </Link>
            <a
              href="https://wa.me/919033700296?text=Hi%20Rutvik!%20I'm%20interested%20in%20discussing%20a%20project.%20Let's%20connect."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border-subtle)] bg-transparent px-4 py-2.5 text-xs font-semibold text-[var(--text-primary)] transition hover:border-[var(--border-strong)] hover:bg-[var(--surface-muted)] sm:gap-2 sm:px-7 sm:py-3.5 sm:text-sm"
            >
              <WhatsAppIcon className="h-4 w-4 text-[var(--text-secondary)] sm:h-5 sm:w-5" />
              <span className="hidden sm:inline">Ping on WhatsApp</span>
              <span className="sm:hidden">WhatsApp</span>
            </a>
            <a
              href="mailto:ravalrutvik819@gmail.com"
              className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border-subtle)] bg-transparent px-4 py-2.5 text-xs font-semibold text-[var(--text-primary)] transition hover:border-[var(--border-strong)] hover:bg-[var(--surface-muted)] sm:gap-2 sm:px-7 sm:py-3.5 sm:text-sm"
            >
              <MailIcon className="h-4 w-4 text-[var(--text-secondary)] sm:h-5 sm:w-5" />
              <span className="hidden sm:inline">Send an Email</span>
              <span className="sm:hidden">Email</span>
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4 sm:gap-6">
          <div className="relative overflow-hidden rounded-3xl border border-[var(--border-subtle)] bg-[var(--surface-card)] p-5 shadow-[0_30px_90px_-55px_var(--shadow-soft)] backdrop-blur sm:rounded-4xl sm:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,color-mix(in_srgb,var(--accent)_4%,transparent),transparent_65%)] opacity-60" />
            <div className="relative z-10 flex flex-col items-center gap-4 text-center sm:gap-6">
              <div className="relative flex flex-col items-center gap-3 sm:gap-4">
                <div className="absolute -inset-2 rounded-full bg-[radial-gradient(circle_at_top,color-mix(in_srgb,var(--accent)_8%,transparent),transparent_65%)] blur-xl opacity-60" />
                <div className="relative flex h-28 w-28 items-center justify-center overflow-hidden rounded-full border border-[var(--border-subtle)] bg-[var(--surface-panel)] p-[0.35rem] shadow-[0_15px_45px_-30px_var(--shadow-soft)] sm:h-50 sm:w-50">
                  <div className="absolute inset-0 rounded-full border border-[var(--border-subtle)]" />
                  <Image
                    src="/profile-placeholder.jpeg"
                    alt="Portrait of Rutvik Raval"
                    fill
                    priority
                    sizes="420px"
                    className="rounded-full object-cover"
                  />
                </div>
                <div className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border-subtle)] bg-[var(--surface-muted)] px-3 py-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-[var(--text-secondary)] shadow-[0_12px_30px_-25px_var(--shadow-soft)] sm:gap-2 sm:px-4 sm:py-1 sm:text-[0.65rem]">
                  Building with care
                </div>
              </div>
              <div className="space-y-1.5 sm:space-y-2">
                <h2 className="text-xl font-semibold text-[var(--text-primary)] sm:text-2xl">Rutvik Raval</h2>
                <p className="text-sm text-[var(--text-secondary)] sm:text-base">
                  Frontend Engineer • Next.js / React.js
                </p>
              </div>
              <div className="grid w-full gap-3 sm:gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-card)] p-3 text-left sm:rounded-2xl sm:p-4">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-[var(--text-secondary)] sm:text-xs">
                    Experience
                  </p>
                  <p className="mt-1.5 text-xl font-semibold text-[var(--text-primary)] sm:mt-2 sm:text-2xl">2+ yrs</p>
                </div>
                <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-card)] p-3 text-left sm:rounded-2xl sm:p-4">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-[var(--text-secondary)] sm:text-xs">
                    Projects
                  </p>
                  <p className="mt-1.5 text-xl font-semibold text-[var(--text-primary)] sm:mt-2 sm:text-2xl">8+</p>
                </div>
              </div>
              <div className="w-full rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-card)] p-4 text-left sm:rounded-2xl sm:p-5">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-[var(--text-secondary)] sm:text-xs">
                  Based In
                </p>
                <p className="mt-1.5 text-sm font-semibold text-[var(--text-primary)] sm:mt-2 sm:text-base">Surat, India</p>
                <p className="mt-1 text-xs text-[var(--text-secondary)] sm:text-sm">
                  Remote-friendly and available for on-site collaborations across India.
                </p>
              </div>
              <Link
                href="#contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[var(--border-subtle)] bg-[var(--surface-muted)] px-5 py-2.5 text-xs font-semibold text-[var(--text-primary)] transition hover:border-[var(--border-strong)] hover:bg-[var(--surface-panel)] sm:px-6 sm:py-3 sm:text-sm"
              >
                Let&apos;s Collaborate
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 8.217 5.477a1.5 1.5 0 0 0 1.566 0L21 7" />
    </svg>
  );
}

function SparkleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m10 2 1.6 3.9L15 7.5l-3.4 1.6L10 13l-1.6-3.9L5 7.5l3.4-1.6L10 2Z" />
    </svg>
  );
}

function AvailabilityIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="10" cy="10" r="7.5" />
      <path d="m7.5 10 1.9 1.8 3.1-3.6" />
    </svg>
  );
}

function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 4.5c-6.35 0-11.5 4.9-11.5 11 0 2.1.63 4.06 1.74 5.73L5 27.5l6.58-1.9A11.4 11.4 0 0 0 16 26.5c6.35 0 11.5-4.9 11.5-11s-5.15-11-11.5-11Z" />
      <path d="M12.3 11.6s.3-1 .7-.9c.4.1 1.8 2.6 2 2.8.2.2 2.2-1.6 2.8-1 .6.6 1.5 1.8 1.4 2.2-.1.4-1.8 2.5-2.3 2.7-.5.2-1.1.6-3-.3-1.9-.9-3.1-3.9-3.1-3.9Z" />
    </svg>
  );
}

