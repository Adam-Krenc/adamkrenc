import SectionWrapper from "@/components/ui/SectionWrapper";
import ContactForm from "@/components/ui/ContactForm";

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/adamkrenc/", icon: "📸" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/adamkrenc/", icon: "💼" },
  { label: "YouTube", href: "https://youtube.com/@smartapky", icon: "▶️" },
];

export default function ContactSection() {
  return (
    <SectionWrapper className="bg-[#0a0f1e]" id="kontakt">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Info */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-0.5 bg-[#E02020]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#E02020]">Kontakt</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
            Pojďme si promluvit.
          </h2>
          <p className="text-[#94a3b8] text-base leading-relaxed mb-10">
            Chcete probrat digitalizaci nebo AI ve vaší firmě? Napište pár vět o firmě a co vás trápí – ozvu se do 24 hodin.
          </p>

          <div className="space-y-4 mb-10">
            <a
              href="tel:+420605822363"
              className="flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#141c2e] border border-[#1e2d47] flex items-center justify-center text-xl group-hover:border-[#6B8FBF] transition-colors">
                📞
              </div>
              <div>
                <div className="text-xs text-[#64748b] uppercase tracking-wider">Telefon</div>
                <div className="text-white font-semibold group-hover:text-[#6B8FBF] transition-colors">+420 605 822 363</div>
              </div>
            </a>

            <a
              href="mailto:adam.krenc@smartapky.cz"
              className="flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#141c2e] border border-[#1e2d47] flex items-center justify-center text-xl group-hover:border-[#6B8FBF] transition-colors">
                ✉️
              </div>
              <div>
                <div className="text-xs text-[#64748b] uppercase tracking-wider">Email</div>
                <div className="text-white font-semibold group-hover:text-[#6B8FBF] transition-colors text-sm">adam.krenc@smartapky.cz</div>
              </div>
            </a>

            <a
              href="https://www.smartapky.cz/book/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#141c2e] border border-[#1e2d47] flex items-center justify-center text-xl group-hover:border-[#6B8FBF] transition-colors">
                📅
              </div>
              <div>
                <div className="text-xs text-[#64748b] uppercase tracking-wider">Úvodní call zdarma</div>
                <div className="text-white font-semibold group-hover:text-[#6B8FBF] transition-colors text-sm">Zarezervovat termín ↗</div>
              </div>
            </a>
          </div>

          {/* Social */}
          <div>
            <div className="text-xs text-[#64748b] uppercase tracking-wider mb-3">Sledujte mě</div>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#141c2e] border border-[#1e2d47] text-[#94a3b8] hover:text-white hover:border-[#6B8FBF] transition-all text-sm"
                >
                  <span>{s.icon}</span>
                  <span className="font-medium">{s.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-[#141c2e] rounded-2xl border border-[#1e2d47] p-8">
          <ContactForm showTypeToggle defaultType="smartapky" />
        </div>
      </div>
    </SectionWrapper>
  );
}
