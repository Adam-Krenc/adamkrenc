import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Realitní makléř Most | Prodej bytu a domu Most – Adam Krenc RE/MAX",
  description:
    "Hledáte spolehlivého makléře v Mostě? Adam Krenc – RE/MAX Synergy. Prodej bytů, domů a nemovitostí v Mostě a okolí. Moderní marketing, bezpečná transakce, konzultace zdarma.",
  keywords: [
    "realitní makléř Most",
    "makléř Most",
    "prodej bytu Most",
    "prodej domu Most",
    "prodej nemovitosti Most",
    "spolehlivý makléř Most",
    "RE/MAX Most",
    "nemovitosti Most",
    "ocenění nemovitosti Most",
  ],
  openGraph: {
    title: "Realitní makléř Most | Adam Krenc – RE/MAX Synergy",
    description:
      "Prodej bytů a domů v Mostě. Makléř Adam Krenc – moderní marketing, zázemí RE/MAX, konzultace zdarma.",
    url: "https://www.adamkrenc.cz/reality/most",
    images: [{ url: "/images/adam-remax.png" }],
  },
  alternates: {
    canonical: "https://www.adamkrenc.cz/reality/most",
  },
};

const faqItems = [
  {
    q: "Jak dlouho trvá prodej nemovitosti v Mostě?",
    a: "Mostecký trh je aktivní – při správně nastavené ceně a marketingu průměrně 6–10 týdnů od zahájení inzerce. Pomáhám klientům realisticky ocenit nemovitost, aby se prodej zbytečně neprotahoval.",
  },
  {
    q: "Jaké typy nemovitostí prodáváte v Mostě?",
    a: "Byty v panelových i cihlových domech, rodinné domy, chaty a zahrádky. V Mostě se nejčastěji jedná o byty 2+1 a 3+1 v různých mosteckých čtvrtích.",
  },
  {
    q: "Jsou v Mostě dobré ceny nemovitostí?",
    a: "Most nabízí jedny z nejdostupnějších cen v Ústeckém kraji. Byty se pohybují od 500 000 Kč, rodinné domy od 1,5 mil. Kč. Pro aktuální odhad vaší konkrétní nemovitosti mě kontaktujte.",
  },
  {
    q: "Jak probíhá nezávazná konzultace?",
    a: "Sejdeme se osobně nebo videohovor, probereme vaši nemovitost a situaci na mosteckém trhu. Bez závazků a zcela zdarma.",
  },
];

export default function MostPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "RealEstateAgent",
        "@id": "https://www.adamkrenc.cz/reality/most#agent",
        name: "Adam Krenc – Realitní makléř Most",
        url: "https://www.adamkrenc.cz/reality/most",
        telephone: "+420605822363",
        email: "adam.krenc@remax-czech.cz",
        image: "https://www.adamkrenc.cz/images/adam-remax.png",
        description:
          "Realitní makléř Adam Krenc působící v Mostě a okolí pod záštitou RE/MAX Synergy. Prodej bytů a domů v Mostě.",
        areaServed: {
          "@type": "City",
          name: "Most",
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
          { "@type": "ListItem", position: 1, name: "Domů", item: "https://www.adamkrenc.cz" },
          { "@type": "ListItem", position: 2, name: "Reality", item: "https://www.adamkrenc.cz/reality" },
          { "@type": "ListItem", position: 3, name: "Most", item: "https://www.adamkrenc.cz/reality/most" },
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
          {/* Breadcrumb */}
          <nav className="mb-6 text-sm text-[#64748b]" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2">
              <li><Link href="/" className="hover:text-white transition-colors">Domů</Link></li>
              <li>/</li>
              <li><Link href="/reality" className="hover:text-white transition-colors">Reality</Link></li>
              <li>/</li>
              <li className="text-[#94a3b8]">Most</li>
            </ol>
          </nav>

          <div className="max-w-3xl space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#E02020]/30 bg-[#E02020]/10 text-[#E02020] text-xs font-semibold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E02020]" />
              RE/MAX Synergy · Most
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Realitní makléř<br />
              <span className="text-[#E02020]">Most</span>
            </h1>

            <p className="text-[#94a3b8] text-base lg:text-lg leading-relaxed max-w-xl">
              Prodej bytu nebo domu v Mostě? Zajistím rychlý prodej za nejvyšší cenu –
              s moderním marketingem, zázemím RE/MAX a osobním přístupem. Konzultace zdarma.
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

      {/* O trhu v Mostě */}
      <SectionWrapper className="bg-[#060c18]">
        <SectionHeader
          eyebrow="Lokalita"
          title="Realitní trh v Mostě"
          subtitle="Co potřebujete vědět, než prodáte nebo koupíte nemovitost v Mostě."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-[#94a3b8] leading-relaxed">
              Most je druhé největší město Ústeckého kraje s dynamickým realitním trhem.
              Nabízí jedny z nejdostupnějších cen nemovitostí v Čechách při zachování
              dobré občanské vybavenosti a dopravního spojení.
            </p>
            <p className="text-[#94a3b8] leading-relaxed">
              Mostecký trh zažívá postupný růst – investoři i rodiny nacházejí v Mostě
              atraktivní příležitosti. Jako místní makléř znám konkrétní čtvrti, ceny i
              poptávku v reálném čase.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Průměrná cena bytu 2+1", value: "od 700 tis. Kč" },
              { label: "Průměrná cena domu", value: "od 1,5 mil. Kč" },
              { label: "Průměrná doba prodeje", value: "6–10 týdnů" },
              { label: "Zázemí", value: "RE/MAX Synergy" },
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
              desc: "Jako zakladatel Smartapky.cz využívám AI cílení reklamy, automatizovanou komunikaci a digitální prezentaci – vaši nemovitost vidí správní kupci.",
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
          title="Časté dotazy – Most"
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
            { name: "Teplice", href: "/reality/teplice" },
            { name: "Chomutov", href: "/reality/chomutov" },
            { name: "Ústí nad Labem", href: "/reality/usti-nad-labem" },
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
