import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/ui/ContactForm";

export const metadata: Metadata = {
  title: "Kontakt | Adam Krenc – Realitní makléř & CEO Smartapky.cz",
  description:
    "Kontaktujte Adama Krence ohledně prodeje nemovitostí v Ústeckém kraji nebo IT/AI projektů. Telefon, email, kontaktní formulář.",
  alternates: {
    canonical: "https://www.adamkrenc.cz/kontakt",
  },
  openGraph: {
    type: "website",
    title: "Kontakt | Adam Krenc – Realitní makléř & CEO Smartapky.cz",
    description:
      "Kontaktujte Adama Krence ohledně prodeje nemovitostí v Ústeckém kraji nebo IT/AI projektů. Telefon, email, kontaktní formulář.",
    url: "https://www.adamkrenc.cz/kontakt",
    images: [{ url: "/images/adam-remax.png", width: 1200, height: 630, alt: "Kontakt Adam Krenc" }],
  },
};

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/adamkrenc/",
    desc: "@adamkrenc",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/adamkrenc/",
    desc: "Adam Krenc",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@smartapky",
    desc: "@smartapky",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export default function KontaktPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#0a0f1e] pt-32 pb-16 border-b border-[#1e2d47]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-0.5 bg-[#E02020]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#E02020]">Kontakt</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Pojďme si promluvit.</h1>
          <p className="text-[#94a3b8] text-lg max-w-xl">
            Nezávazně mi napište o vaší nemovitosti nebo projektu. Ozvu se do 24 hodin.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-[#0a0f1e] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Info – 2/5 */}
            <div className="lg:col-span-2 space-y-8">
              {/* Photo */}
              <div className="relative w-32 h-32 rounded-2xl overflow-hidden border-2 border-[#1e2d47]">
                <Image
                  src="/images/adam-polo.png"
                  alt="Adam Krenc"
                  fill
                  className="object-cover object-top"
                />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-1">Adam Krenc</h2>
                <p className="text-[#94a3b8] text-sm">
                  Realitní makléř · RE/MAX Synergy<br />
                  CEO · Smartapky.cz
                </p>
              </div>

              {/* Contacts */}
              <div className="space-y-4">
                <a href="tel:+420605822363" className="flex items-center gap-4 group">
                  <div className="w-11 h-11 rounded-xl bg-[#141c2e] border border-[#1e2d47] flex items-center justify-center text-lg group-hover:border-[#6B8FBF] transition-colors">
                    📞
                  </div>
                  <div>
                    <div className="text-[#64748b] text-xs uppercase tracking-wider">Telefon</div>
                    <div className="text-white font-semibold group-hover:text-[#6B8FBF] transition-colors">+420 605 822 363</div>
                  </div>
                </a>

                <a href="mailto:adam.krenc@remax-czech.cz" className="flex items-center gap-4 group">
                  <div className="w-11 h-11 rounded-xl bg-[#141c2e] border border-[#1e2d47] flex items-center justify-center text-lg group-hover:border-[#E02020] transition-colors">
                    🏠
                  </div>
                  <div>
                    <div className="text-[#64748b] text-xs uppercase tracking-wider">Reality</div>
                    <div className="text-white text-sm font-medium group-hover:text-[#E02020] transition-colors">adam.krenc@remax-czech.cz</div>
                  </div>
                </a>

                <a href="mailto:adam.krenc@smartapky.cz" className="flex items-center gap-4 group">
                  <div className="w-11 h-11 rounded-xl bg-[#141c2e] border border-[#1e2d47] flex items-center justify-center text-lg group-hover:border-[#6B8FBF] transition-colors">
                    💡
                  </div>
                  <div>
                    <div className="text-[#64748b] text-xs uppercase tracking-wider">Tech & IT</div>
                    <div className="text-white text-sm font-medium group-hover:text-[#6B8FBF] transition-colors">adam.krenc@smartapky.cz</div>
                  </div>
                </a>
              </div>

              {/* Social */}
              <div>
                <div className="text-[#64748b] text-xs uppercase tracking-wider mb-3">Sociální sítě</div>
                <div className="space-y-2">
                  {socialLinks.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#141c2e] border border-[#1e2d47] text-[#94a3b8] hover:text-white hover:border-[#6B8FBF] transition-all"
                    >
                      <span className="text-[#6B8FBF]">{s.icon}</span>
                      <span className="text-sm font-medium">{s.label}</span>
                      <span className="ml-auto text-xs text-[#64748b]">{s.desc}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form – 3/5 */}
            <div className="lg:col-span-3 bg-[#141c2e] rounded-2xl border border-[#1e2d47] p-8">
              <h2 className="text-xl font-bold text-white mb-6">Napište mi</h2>
              <ContactForm showTypeToggle defaultType="reality" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
