"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Úvod" },
  { href: "/reality", label: "Reality" },
  { href: "/smartapky", label: "Smartapky" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0f1e]/95 backdrop-blur-md border-b border-[#1e2d47] shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl lg:text-2xl font-bold text-white tracking-tight hover:text-[#6B8FBF] transition-colors duration-200"
          >
            Adam Krenc
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 relative group ${
                  pathname === link.href
                    ? "text-white"
                    : "text-[#94a3b8] hover:text-white"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-[#E02020] transition-all duration-200 ${
                    pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/kontakt"
              className="hidden sm:inline-flex items-center px-4 py-2 rounded-lg bg-[#E02020] hover:bg-[#c01a1a] text-white text-sm font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-red-900/30"
            >
              Konzultace zdarma
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-[#94a3b8] hover:text-white transition-colors"
              aria-label="Otevřít menu"
            >
              <div className="w-6 flex flex-col gap-1.5">
                <span
                  className={`h-0.5 bg-current transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
                />
                <span
                  className={`h-0.5 bg-current transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`}
                />
                <span
                  className={`h-0.5 bg-current transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-[#1e2d47] bg-[#0a0f1e]/98 backdrop-blur-md overflow-hidden"
          >
            <nav className="flex flex-col px-4 py-4 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? "bg-[#141c2e] text-white"
                      : "text-[#94a3b8] hover:text-white hover:bg-[#141c2e]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/kontakt"
                className="mt-2 px-4 py-3 rounded-lg bg-[#E02020] text-white text-sm font-semibold text-center"
              >
                Konzultace zdarma
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
