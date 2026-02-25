import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";

const cards = [
  {
    icon: "🤖",
    title: "Tech CEO přístup",
    description:
      "Jako zakladatel IT firmy Smartapky.cz využívám AI marketing, automatizaci a digitální nástroje k tomu, aby vaši nemovitost vidělo co nejvíce správných kupců.",
    accent: "#6B8FBF",
  },
  {
    icon: "🏆",
    title: "Zázemí RE/MAX",
    description:
      "Za mnou stojí nejsilnější realitní síť v Česku. Právní servis, bezpečí transakce a prověřené postupy jsou samozřejmostí.",
    accent: "#E02020",
  },
  {
    icon: "⚡",
    title: "Maximální nasazení",
    description:
      "Začínám s čistým štítem a maximální energií. Vaší nemovitosti se budu věnovat naplno – nejste jen jedna z desítek zakázek.",
    accent: "#6B8FBF",
  },
];

export default function WhyAdamSection() {
  return (
    <SectionWrapper className="bg-[#0a0f1e]" id="proc-adam">
      <SectionHeader
        eyebrow="Proč Adam Krenc"
        title="Jiný přístup k prodeji nemovitostí."
        subtitle="Moderní makléř, který kombinuje sílu RE/MAX se světem technologií."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, i) => (
          <div
            key={card.title}
            className="group relative rounded-2xl bg-[#141c2e] border border-[#1e2d47] p-8 hover:border-[#6B8FBF]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30"
          >
            {/* Top accent line */}
            <div
              className="absolute top-0 left-8 right-8 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: card.accent }}
            />

            <div className="text-4xl mb-5">{card.icon}</div>
            <h3 className="text-lg font-bold text-white mb-3">{card.title}</h3>
            <p className="text-[#94a3b8] text-sm leading-relaxed">{card.description}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
