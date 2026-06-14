"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#about", label: "O mně" },
  { href: "#projects", label: "Projekty" },
  { href: "#approach", label: "Jak přemýšlím" },
  { href: "#life", label: "Mimo práci" },
  { href: "#contact", label: "Kontakt" },
];

export default function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <nav className={`nav${scrolled ? " scrolled" : ""}`}>
        <div className="wrap nav-inner">
          <a href="#top" className="wordmark" aria-label="Adam Krenc, domů">
            <span className="dot" />
            Adam Krenc
          </a>
          <div className="nav-links">
            <a href="#about" className="desktop-only">
              O mně
            </a>
            <a href="#projects" className="desktop-only">
              Projekty
            </a>
            <a href="#contact" className="desktop-only">
              Kontakt
            </a>
            <a href="#contact" className="btn btn-accent">
              Napiš mi
            </a>
            <button
              className="nav-toggle"
              aria-label={open ? "Zavřít menu" : "Otevřít menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                <line
                  className="bar b1"
                  x1="4"
                  y1="9"
                  x2="22"
                  y2="9"
                  style={open ? { transform: "translateY(4px) rotate(45deg)" } : undefined}
                />
                <line
                  className="bar b2"
                  x1="4"
                  y1="17"
                  x2="22"
                  y2="17"
                  style={open ? { transform: "translateY(-4px) rotate(-45deg)" } : undefined}
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu${open ? " open" : ""}`}>
        {LINKS.map((l, i) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            <span>{l.label}</span>
            <span className="idx">{String(i + 1).padStart(2, "0")}</span>
          </a>
        ))}
        <a href="#contact" className="btn btn-accent" onClick={() => setOpen(false)}>
          Napiš mi
        </a>
      </div>
    </>
  );
}
