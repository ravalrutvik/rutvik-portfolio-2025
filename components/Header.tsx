 "use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/ThemeToggle";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/#skills", label: "Skills" },
  { href: "/#experience", label: "Experience" },
  { href: "/#education", label: "Education" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const originalOverflow = useRef<string | null>(null);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (isMenuOpen) {
      if (originalOverflow.current === null) {
        originalOverflow.current = document.body.style.overflow || "";
      }
      document.body.style.overflow = "hidden";
    } else if (originalOverflow.current !== null) {
      document.body.style.overflow = originalOverflow.current;
      originalOverflow.current = null;
    }

    return () => {
      if (originalOverflow.current !== null) {
        document.body.style.overflow = originalOverflow.current;
        originalOverflow.current = null;
      }
    };
  }, [isMenuOpen]);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.includes("#")) {
      const hash = href.split("#")[1];
      const element = document.getElementById(hash);
      
      if (element) {
        e.preventDefault();
        setIsMenuOpen(false);
        
        // Calculate offset for fixed header
        const headerHeight = 80; // Approximate header height
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });

        // Update URL without triggering scroll
        window.history.pushState(null, "", href);
      }
    } else {
      setIsMenuOpen(false);
    }
  };

 

  const linkStyles = (href: string) => {
    const isAnchor = href.includes("#");
    const active =
      href === pathname ||
      (!isAnchor && pathname?.startsWith(href) && href !== "/") ||
      (isAnchor && pathname === "/");

    const base =
      "relative rounded-full px-4 py-2 text-sm font-medium text-[var(--text-secondary)] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--border-strong)]";

    return active
      ? `${base} bg-theme-card text-[var(--text-primary)] shadow-[0_12px_36px_-24px_var(--shadow-soft)]`
      : `${base} hover:text-[var(--text-primary)] hover:bg-[var(--surface-panel)]`;
  };

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-50 transform-gpu transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
      >
        <div
          className="relative overflow-hidden rounded-b-[1.75rem] border-b border-[var(--border-subtle)] bg-theme-panel backdrop-blur-xl transition-all duration-500"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,color-mix(in_srgb,var(--accent)_6%,transparent),transparent_65%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,color-mix(in_srgb,var(--accent)_4%,transparent)_0%,color-mix(in_srgb,var(--accent)_2%,transparent)_40%,transparent_75%)]" />
          <div className="mx-auto flex max-w-6xl items-center justify-between px-3 py-3 sm:px-6 sm:py-4 lg:px-8">
            <Link href="/" className="relative flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent)] text-sm font-semibold text-[var(--background)] shadow-[0_12px_40px_-20px_var(--shadow-soft)] sm:h-11 sm:w-11 sm:text-base">
                RR
              </span>
              <span className="hidden flex-col text-left text-[var(--text-primary)] sm:flex">
                <span className="text-sm font-semibold tracking-wide">
                  Raval Rutvik
                </span>
                
              </span>
              <span className="text-sm font-semibold tracking-wide text-[var(--text-primary)] sm:hidden">
                Raval Rutvik
              </span>
            </Link>
            <nav className="hidden items-center gap-2 md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={linkStyles(item.href)}
                  aria-current={
                    (item.href === pathname ||
                      (!item.href.includes("#") && pathname?.startsWith(item.href) && item.href !== "/")) &&
                    pathname !== "/"
                      ? "page"
                      : item.href === "/" && pathname === "/"
                        ? "page"
                        : undefined
                  }
                  onClick={(e) => handleAnchorClick(e, item.href)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-2 sm:gap-3">
              <ThemeToggle />
              <Link
                href="/#contact"
                className="hidden rounded-full bg-[var(--accent)] px-5 py-2 text-sm font-semibold text-[var(--background)] shadow-[0_15px_45px_-25px_var(--shadow-soft)] transition hover:scale-[1.01] md:inline-flex"
                onClick={(e) => handleAnchorClick(e, "/#contact")}
              >
                Let&apos;s Talk
              </Link>
              <button
                type="button"
                onClick={() => setIsMenuOpen((prev) => !prev)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-subtle)] bg-[var(--surface-muted)] text-[var(--text-primary)] transition hover:border-[var(--border-strong)] hover:bg-[var(--surface-panel)] md:hidden sm:h-11 sm:w-11"
                aria-label="Toggle navigation"
              >
                <svg
                  className="h-5 w-5"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d={
                      isMenuOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 7h16M4 12h16M4 17h16"
                    }
                  />
                </svg>
              </button>
            </div>
          </div>
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
              isMenuOpen
                ? "pointer-events-auto max-h-[420px] opacity-100"
                : "pointer-events-none max-h-0 opacity-0"
            }`}
          >
            <div className="space-y-2 px-4 pb-6 pt-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center justify-between rounded-2xl border border-[var(--border-subtle)] bg-theme-card px-4 py-3 text-sm font-semibold text-[var(--text-primary)] shadow-[0_20px_60px_-40px_var(--shadow-soft)] transition hover:border-[var(--border-strong)]"
                  onClick={(e) => handleAnchorClick(e, item.href)}
                >
                  <span>{item.label}</span>
                  <svg
                    className="h-4 w-4 text-[var(--text-secondary)]"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 4h9v9" />
                    <path d="m16 4-9 9" />
                  </svg>
                </Link>
              ))}
              <Link
                href="/#contact"
                className="grid place-items-center rounded-2xl border border-[var(--border-strong)] bg-[var(--accent)] px-4 py-3 text-sm font-semibold text-[var(--background)] shadow-[0_25px_70px_-40px_var(--shadow-soft)] transition hover:scale-[1.01]"
                onClick={(e) => handleAnchorClick(e, "/#contact")}
              >
                Let&apos;s Talk
              </Link>
            </div>
          </div>
        </div>
      </header>
      <div aria-hidden="true" className="h-16 sm:h-20" />
    </>
  );
}

