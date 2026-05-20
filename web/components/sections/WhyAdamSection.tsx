import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";

const cards = [
  {
    icon: "⚙️",
    title: "AI automatizace procesů",
    description:
      "Odstraníme ruční přepisování dat, follow-upy a reporty. Propojíme vaše nástroje a nastavíme chytré scénáře, které šetří čas celému týmu.",
    accent: "#6B8FBF",
  },
  {
    icon: "💻",
    title: "Weby a interní systémy",
    description:
      "Navrhujeme weby a jednoduché webové aplikace, které nejsou jen vizitka, ale součást procesu – od poptávek po interní přehled nad zakázkami.",
    accent: "#6B8FBF",
  },
  {
    icon: "🎯",
    title: "Konzultace a technický sparring",
    description:
      "Pomáhám majitelům firem zorientovat se v AI a digitalizaci a najít konkrétní kroky, které dávají smysl jejich byznysu.",
    accent: "#6B8FBF",
  },
];

export default function WhyAdamSection() {
  return (
    <SectionWrapper className="bg-[#0a0f1e]" id="co-delam">
      <SectionHeader
        eyebrow="S čím pomáhám"
        title="Co dělám pro firmy."
        subtitle="Konkrétní řešení pro majitele firem, kteří chtějí šetřit čas a lépe pracovat s daty."
        accentColor="blue"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card) => (
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
