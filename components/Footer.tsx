import Link from "next/link";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/raval-rutvik-a506b9266/",
  },
  {
    label: "GitHub",
    href: "https://github.com/ravalrutvik",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/rutvikraval008?utm_medium=copy_link",
  }
] as const;

export function Footer() {
  return (
    <footer className="border-t border-(--border-subtle) bg-theme-panel/95 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-ms text-(--text-tertiary)">
            © {new Date().getFullYear()} Raval Rutvik. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-(--text-primary)">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-(--accent)"
              >
                {social.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

