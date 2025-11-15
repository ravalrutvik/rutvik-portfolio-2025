"use client";

import { useEffect, useRef } from "react";

type UseSectionRevealConfig = {
  threshold?: number;
  rootMargin?: string;
};

export function useSectionReveal(config?: UseSectionRevealConfig) {
  const elementRef = useRef<HTMLElement | null>(null);
  const threshold = config?.threshold ?? 0.20;
  const rootMargin = config?.rootMargin ?? "0px 0px -10% 0px";

  useEffect(() => {
    const node = elementRef.current;
    if (!node || typeof window === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("section-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin]);

  return elementRef;
}

