"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/adamkrenc/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/adamkrenc/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@smartapky",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

const quickLinks = [
  { href: "/reality", label: "Reality" },
  { href: "/smartapky", label: "Smartapky" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Footer() {
  const pathname = usePathname();

  if (pathname === "/vizitka") {
    return null;
  }

  return (
    <footer className="bg-[#060c18] border-t border-[#1e2d47]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-white mb-3">Adam Krenc</h3>
            <p className="text-[#94a3b8] text-sm leading-relaxed">
              Moderní realitní makléř v Ústeckém kraji.<br />
              RE/MAX Synergy · CEO Smartapky.cz
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Rychlé odkazy
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#94a3b8] hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Social */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Kontakt
            </h4>
            <div className="space-y-2 mb-4">
              <a
                href="tel:+420605822363"
                className="flex items-center gap-2 text-[#94a3b8] hover:text-white text-sm transition-colors"
              >
                <span>📞</span> +420 605 822 363
              </a>
              <a
                href="mailto:adam.krenc@remax-czech.cz"
                className="flex items-center gap-2 text-[#94a3b8] hover:text-white text-sm transition-colors"
              >
                <span>✉️</span> adam.krenc@remax-czech.cz
              </a>
            </div>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-[#141c2e] border border-[#1e2d47] flex items-center justify-center text-[#94a3b8] hover:text-white hover:border-[#6B8FBF] transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-[#1e2d47] pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[#64748b] text-sm">
            © 2026 Adam Krenc. IČO: 24323152. Všechna práva vyhrazena.
          </p>
          <div className="flex items-center gap-2 text-[#64748b] text-xs">
            <span>Člen sítě</span>
            <span className="text-[#E02020] font-semibold">RE/MAX</span>
            <span>·</span>
            <a
              href="https://smartapky.cz"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#6B8FBF] transition-colors"
            >
              Smartapky.cz
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-[#1e2d47] pt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-gray-400">
            <div className="space-y-1">
              <h4 className="font-semibold text-gray-300 text-xs uppercase tracking-wide">
                Identifikační údaje (OSVČ)
              </h4>
              <p className="leading-relaxed">
                Adam Krenc
                <br />
                Sídlo: Lom u Mostu, spojeneckých letců 910
                <br />
                IČO: 24323152
                <br />
                Fyzická osoba podnikající dle živnostenského zákona.
              </p>
            </div>

            <div className="space-y-1">
              <h4 className="font-semibold text-gray-300 text-xs uppercase tracking-wide">
                Ochrana spotřebitele
              </h4>
              <p className="leading-relaxed">
                &quot;K mimosoudnímu řešení spotřebitelských sporů je příslušná Česká
                obchodní inspekce, se sídlem Štěpánská 44, 110 00 Praha 1, IČ:
                00020869, internetová adresa: www.coi.cz.&quot;
              </p>
            </div>

            <div className="space-y-1">
              <h4 className="font-semibold text-gray-300 text-xs uppercase tracking-wide">
                RE/MAX
              </h4>
              <p className="leading-relaxed">
                &quot;Každá kancelář RE/MAX je nezávisle vlastněna a provozována.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
