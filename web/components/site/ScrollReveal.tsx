"use client";

import { useEffect } from "react";

/**
 * Odkrývá prvky s atributem [data-reveal] při scrollu pomocí IntersectionObserver.
 * Sourozenci se odkrývají se staggerem. Respektuje prefers-reduced-motion.
 */
export default function ScrollReveal() {
  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );
    if (els.length === 0) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      document.documentElement.classList.remove("reveal-on");
      els.forEach((el) => el.classList.add("in"));
      return;
    }

    // Pro jistotu (kdyby inline skript v <head> neproběhl) aktivujeme skrytý stav.
    document.documentElement.classList.add("reveal-on");

    // stagger podle pořadí mezi reveal-sourozenci
    els.forEach((el) => {
      const parent = el.parentElement;
      if (!parent) return;
      const siblings = Array.from(
        parent.querySelectorAll<HTMLElement>(":scope > [data-reveal]")
      );
      const idx = siblings.indexOf(el);
      el.style.transitionDelay = idx > 0 ? `${Math.min(idx * 80, 360)}ms` : "0ms";
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );

    els.forEach((el) => observer.observe(el));

    // Pojistka: kdyby observer u některého prvku nikdy nevystřelil, po chvíli ho odkryjeme.
    const safety = window.setTimeout(() => {
      els.forEach((el) => el.classList.add("in"));
    }, 2600);

    return () => {
      observer.disconnect();
      window.clearTimeout(safety);
    };
  }, []);

  return null;
}
