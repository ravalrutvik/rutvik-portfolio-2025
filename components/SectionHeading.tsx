import { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-10 flex flex-col gap-4">
      <span className="w-fit rounded-full border border-(--border-subtle) bg-(--surface-muted) px-4 py-1 text-[0.75rem] font-semibold uppercase tracking-[0.35em] text-(--text-secondary)">
        {eyebrow}
      </span>
      <h2 className="important-text-glow text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-base leading-relaxed text-(--text-secondary) sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

