import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Realitní makléř Ústí nad Labem | Prodej nemovitostí – Adam Krenc RE/MAX",
  description:
    "Hledáte makléře v Ústí nad Labem? Adam Krenc – RE/MAX Synergy. Prodej bytů, domů a komerčních nemovitostí v Ústí nad Labem. Konzultace zdarma.",
  keywords: [
    "realitní makléř Ústí nad Labem",
    "makléř Ústí nad Labem",
    "prodej bytu Ústí nad Labem",
    "prodej domu Ústí nad Labem",
    "prodej nemovitosti Ústí nad Labem",
    "spolehlivý makléř Ústí nad Labem",
    "RE/MAX Ústí nad Labem",
    "nemovitosti Ústí nad Labem",
    "ocenění nemovitosti Ústí nad Labem",
  ],
  openGraph: {
    title: "Realitní makléř Ústí nad Labem | Adam Krenc – RE/MAX Synergy",
    description:
      "Prodej bytů a domů v Ústí nad Labem. Adam Krenc – moderní marketing, zázemí RE/MAX, konzultace zdarma.",
    url: "https://adamkrenc.cz/reality/usti-nad-labem",
    images: [{ url: "/images/adam-remax.png" }],
  },
  alternates: {
    canonical: "https://adamkrenc.cz/reality/usti-nad-labem",
  },
};

const faqItems = [
  {
    q: "Jaký je realitní trh v Ústí nad Labem?",
    a: "Ústí nad Labem je krajské město s rozvinutým realitním trhem. Najdete zde byty, rodinné domy i komerční nemovitosti v různých cenových segmentech. Jako krajské centrum má Ústí stabilní poptávku.",
  },
  {
    q: "Prodáváte i v přilehlých obcích Ústeckého kraje?",
    a: "Ano, působím v celém Ústeckém kraji. Kromě Ústí nad Labem zprostředkovávám prodeje i v Děčíně, Lounech, Žatci a dalších lokalitách kraje.",
  },
  {
    q: "Jaká jsou specifika prodeje nemovitosti v Ústí nad Labem?",
    a: "Ústí je rozmanité – od centra přes sídliště až po vilové čtvrti. Každá část města má specifické ceny a poptávku. S místní znalostí pomůžu správně ocenit i zacílit marketing.",
  },
  {
    q: "Jak začít prodávat nemovitost v Ústí nad Labem?",
    a: "Stačí mě kontaktovat – domluvíme nezávaznou konzultaci, probereme vaši nemovitost a situaci na trhu. Vše zdarma a bez závazků.",
  },
];

export default function UstiPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "RealEstateAgent",
        "@id": "https://adamkrenc.cz/reality/usti-nad-labem#agent",
        name: "Adam Krenc – Realitní makléř Ústí nad Labem",
        url: "https://adamkrenc.cz/reality/usti-nad-labem",
        telephone: "+420605822363",
        email: "adam.krenc@remax-czech.cz",
        image: "https://adamkrenc.cz/images/adam-remax.png",
        description:
          "Realitní makléř Adam Krenc působící v Ústí nad Labem a celém Ústeckém kraji pod záštitou RE/MAX Synergy.",
        areaServed: {
          "@type": "City",
          name: "Ústí nad Labem",
          addressCountry: "CZ",
        },
        memberOf: {
          "@type": "Organization",
          name: "RE/MAX Synergy",
          url: "https://www.remax-czech.cz",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Domů", item: "https://adamkrenc.cz" },
          { "@type": "ListItem", position: 2, name: "Reality", item: "https://adamkrenc.cz/reality" },
          { "@type": "ListItem", position: 3, name: "Ústí nad Labem", item: "https://adamkrenc.cz/reality/usti-nad-labem" },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative min-h-[75vh] flex items-center bg-[#0a0f1e] overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(to right, #E02020 1px, transparent 1px), linear-gradient(to bottom, #E02020 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1e] via-[#0a0f1e]/95 to-[#0a0f1e]/60" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <nav className="mb-6 text-sm text-[#64748b]" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2">
              <li><Link href="/" className="hover:text-white transition-colors">Domů</Link></li>
              <li>/</li>
              <li><Link href="/reality" className="hover:text-white transition-colors">Reality</Link></li>
              <li>/</li>
              <li className="text-[#94a3b8]">Ústí nad Labem</li>
            </ol>
          </nav>

          <div className="max-w-3xl space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#E02020]/30 bg-[#E02020]/10 text-[#E02020] text-xs font-semibold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E02020]" />
              RE/MAX Synergy · Ústí nad Labem
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Realitní makléř<br />
              <span className="text-[#E02020]">Ústí nad Labem</span>
            </h1>

            <p className="text-[#94a3b8] text-base lg:text-lg leading-relaxed max-w-xl">
              Krajské město s rozvinutým realitním trhem. Prodej bytu nebo domu v Ústí
              nad Labem – moderní marketing, zázemí RE/MAX, konzultace zdarma.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-[#E02020] hover:bg-[#c01a1a] text-white font-semibold text-base transition-all hover:scale-105 hover:shadow-xl hover:shadow-red-900/30"
              >
                Konzultace zdarma
              </Link>
              <Link
                href="/reality"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-[#1e2d47] hover:border-[#6B8FBF] text-[#94a3b8] hover:text-white font-semibold text-base transition-all"
              >
                Všechny lokality ↗
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* O trhu */}
      <SectionWrapper className="bg-[#060c18]">
        <SectionHeader
          eyebrow="Lokalita"
          title="Realitní trh v Ústí nad Labem"
          subtitle="Krajské centrum Ústeckého kraje s rozmanitým realitním trhem."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-[#94a3b8] leading-relaxed">
              Ústí nad Labem je krajské centrum s nejvyšší koncentrací nemovitostí
              v celém Ústeckém kraji. Trh je rozmanitý – od dostupných panelákových bytů
              přes rodinné domy až po komerční nemovitosti a vily.
            </p>
            <p className="text-[#94a3b8] leading-relaxed">
              Jako makléř pod záštitou RE/MAX mám přístup k největší databázi kupujících
              v Česku, což zajišťuje rychlé nalezení vhodného zájemce i pro specifické typy nemovitostí.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Průměrná cena bytu 2+1", value: "od 800 tis. Kč" },
              { label: "Průměrná cena domu", value: "od 2,5 mil. Kč" },
              { label: "Průměrná doba prodeje", value: "6–10 týdnů" },
              { label: "Typ trhu", value: "Krajské centrum" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-xl bg-[#141c2e] border border-[#1e2d47] p-4">
                <p className="text-[#64748b] text-xs mb-1">{stat.label}</p>
                <p className="text-white font-semibold text-sm">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Proč Adam */}
      <SectionWrapper className="bg-[#0a0f1e]">
        <SectionHeader
          eyebrow="Proč Adam Krenc"
          title="Makléř, který dělá víc."
        />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              icon: "🤖",
              title: "AI marketing",
              desc: "Jako CEO Smartapky.cz využívám AI cílení reklamy a automatizaci. Vaši nemovitost uvidí správní kupci ve správný čas.",
            },
            {
              icon: "🏆",
              title: "Zázemí RE/MAX",
              desc: "Právní servis, bezpečná advokátní úschova a databáze kupujících největší realitní sítě v Česku.",
            },
            {
              icon: "⚡",
              title: "Maximální nasazení",
              desc: "Nepracuji s desítkami zakázek najednou. Vaší nemovitosti se věnuji naplno od první konzultace po podpis.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl bg-[#141c2e] border border-[#1e2d47] p-6">
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="text-white font-bold mb-2">{item.title}</h3>
              <p className="text-[#94a3b8] text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper className="bg-[#060c18]">
        <SectionHeader
          eyebrow="FAQ"
          title="Časté dotazy – Ústí nad Labem"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqItems.map((faq) => (
            <div key={faq.q} className="rounded-2xl bg-[#141c2e] border border-[#1e2d47] p-6">
              <h3 className="text-white font-semibold mb-2 flex items-start gap-2">
                <span className="text-[#E02020] mt-0.5 flex-shrink-0">Q</span>
                {faq.q}
              </h3>
              <p className="text-[#94a3b8] text-sm leading-relaxed pl-5">{faq.a}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Další lokality */}
      <SectionWrapper className="bg-[#0a0f1e]">
        <SectionHeader eyebrow="Ústecký kraj" title="Působím i v dalších lokalitách." />
        <div className="flex flex-wrap gap-3">
          {[
            { name: "Litvínov", href: "/reality/litvinov" },
            { name: "Most", href: "/reality/most" },
            { name: "Teplice", href: "/reality/teplice" },
            { name: "Chomutov", href: "/reality/chomutov" },
            { name: "Celý Ústecký kraj", href: "/reality" },
          ].map((loc) => (
            <Link
              key={loc.href}
              href={loc.href}
              className="px-4 py-2 rounded-lg border border-[#1e2d47] hover:border-[#E02020]/50 text-[#94a3b8] hover:text-white text-sm transition-all"
            >
              {loc.name}
            </Link>
          ))}
        </div>
      </SectionWrapper>

      <ContactSection />
    </>
  );
}
