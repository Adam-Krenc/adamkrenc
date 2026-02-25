import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";

const services = [
  { icon: "🤖", label: "AI chatboti" },
  { icon: "📞", label: "Call agenti" },
  { icon: "⚙️", label: "Automatizace" },
  { icon: "💻", label: "Web aplikace" },
];

export default function SmartapkySection() {
  return (
    <SectionWrapper className="bg-[#0a0f1e]" id="smartapky">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div>
          <SectionHeader
            eyebrow="Tech & Inovace"
            title="Když neprodávám domy, stavím digitální budoucnost."
            subtitle="Jsem CEO a zakladatel Smartapky.cz – firmy, která pomáhá podnikatelům a firmám automatizovat procesy pomocí AI. Mé technologické know-how přímo využívám v realitním marketingu."
            accentColor="blue"
          />

          <div className="grid grid-cols-2 gap-3 mb-8">
            {services.map((s) => (
              <div
                key={s.label}
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#141c2e] border border-[#1e2d47]"
              >
                <span className="text-xl">{s.icon}</span>
                <span className="text-sm font-medium text-[#94a3b8]">{s.label}</span>
              </div>
            ))}
          </div>

          <Button href="https://smartapky.cz" variant="blue" external size="md">
            Přejít na Smartapky.cz ↗
          </Button>
        </div>

        {/* Banner image */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
          <Image
            src="/images/smartapky-logo.png"
            alt="Smartapky.cz – AI integrace a vývoj softwaru na míru"
            width={576}
            height={715}
            className="w-full h-auto object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          {/* Overlay – plynulé splynutí s pozadím sekce (#0a0f1e) */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "linear-gradient(to left, transparent 0%, rgba(10, 15, 30, 0.15) 25%, rgba(10, 15, 30, 0.5) 55%, rgb(10, 15, 30) 100%)",
            }}
            aria-hidden
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
