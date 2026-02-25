import Link from "next/link";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";

const localities = [
  { name: "Litvínov", href: "/reality#litvinov", primary: true },
  { name: "Most", href: "/reality#most", primary: true },
  { name: "Teplice", href: "/reality#teplice", primary: true },
  { name: "Chomutov", href: "/reality#chomutov" },
  { name: "Ústí nad Labem", href: "/reality#usti" },
  { name: "Louny", href: "/reality#louny" },
  { name: "Žatec", href: "/reality#zatec" },
  { name: "Děčín", href: "/reality#decin" },
  { name: "Kadaň", href: "/reality#kadan" },
];

export default function LocalitiesSection() {
  return (
    <SectionWrapper className="bg-[#060c18]" id="lokality">
      <SectionHeader
        eyebrow="Lokalita"
        title="Realitní makléř v celém Ústeckém kraji."
        subtitle="Hledáte makléře v těchto lokalitách? Jsem tu pro vás."
      />

      <div className="flex flex-wrap gap-3">
        {localities.map((loc) => (
          <Link
            key={loc.name}
            href={loc.href}
            className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-105 ${
              loc.primary
                ? "bg-[#141c2e] border border-[#E02020]/30 text-white hover:border-[#E02020] hover:bg-[#E02020]/10"
                : "bg-[#141c2e] border border-[#1e2d47] text-[#94a3b8] hover:border-[#6B8FBF]/40 hover:text-white"
            }`}
          >
            {loc.primary && <span className="text-[#E02020] mr-1.5">•</span>}
            {loc.name}
          </Link>
        ))}
      </div>

      <p className="mt-6 text-[#64748b] text-sm">
        <span className="text-[#E02020]">•</span> Hlavní oblasti působení · Další lokality po domluvě
      </p>
    </SectionWrapper>
  );
}
