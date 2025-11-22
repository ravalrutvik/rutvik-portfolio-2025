import { SectionHeading } from "../SectionHeading";

export function ContactSection() {

  return (
    <section
      // ref={sectionRef}
      id="contact"
      className="rounded-4xl border border-[var(--border-subtle)] bg-[var(--surface-panel)] p-4 text-[var(--text-primary)] shadow-[0_20px_80px_-50px_var(--shadow-soft)] sm:p-12"
    >
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something exceptional"
        description="I'm available for freelance opportunities, collaborations, or full-time roles focused on modern web development."
      />
      <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
        <form
          action="https://formspree.io/f/mleklnee"
          method="POST"
          className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-card)] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
        >
          <div className="grid gap-4">
            <label className="flex flex-col gap-2 text-sm text-[var(--text-secondary)]">
              Name
              <input
                required
                type="text"
                name="name"
                placeholder="How should I address you?"
                className="rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-card)] px-4 py-3 text-sm text-[var(--text-primary)] outline-none transition focus:border-[var(--border-strong)] focus:ring-2 focus:ring-[var(--border-subtle)]"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm text-[var(--text-secondary)]">
              Email
              <input
                required
                type="email"
                name="email"
                placeholder="you@example.com"
                className="rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-card)] px-4 py-3 text-sm text-[var(--text-primary)] outline-none transition focus:border-[var(--border-strong)] focus:ring-2 focus:ring-[var(--border-subtle)]"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm text-[var(--text-secondary)]">
              Message
              <textarea
                required
                name="message"
                placeholder="Tell me about your project..."
                rows={4}
                className="rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-card)] px-4 py-3 text-sm text-[var(--text-primary)] outline-none transition focus:border-[var(--border-strong)] focus:ring-2 focus:ring-[var(--border-subtle)]"
              />
            </label>
            <button
              type="submit"
              className="rounded-full bg-[var(--accent)] px-7 py-3 text-sm font-semibold text-[var(--background)] shadow-lg shadow-[0_15px_45px_-25px_var(--shadow-soft)] transition hover:opacity-90"
            >
              Send Message
            </button>
          </div>
        </form>
        <div
          className="flex flex-col gap-6 rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-card)] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
        >
          <p className="text-base text-[var(--text-secondary)]">
            Prefer a direct introduction? Reach out on the platforms below or
            drop an email anytime.
          </p>
          <div className="flex flex-col gap-3 text-sm text-[var(--text-primary)]">
            <a
              href="https://www.linkedin.com/in/raval-rutvik-a506b9266/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-muted)] px-4 py-3 transition hover:border-[var(--border-strong)]"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/ravalrutvik"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-muted)] px-4 py-3 transition hover:border-[var(--border-strong)]"
            >
              GitHub
            </a>
            <a
              href="mailto:ravalrutvik819@gmail.com"
              className="rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-muted)] px-4 py-3 transition hover:border-[var(--border-strong)]"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

