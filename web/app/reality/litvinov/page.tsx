import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Realitní makléř Litvínov | Prodej bytu a domu Litvínov – Adam Krenc RE/MAX",
  description:
    "Hledáte makléře v Litvínově? Adam Krenc – RE/MAX Synergy. Litvínov je moje hlavní oblast působení. Prodej bytů a domů, ocenění nemovitosti, konzultace zdarma.",
  keywords: [
    "realitní makléř Litvínov",
    "makléř Litvínov",
    "prodej bytu Litvínov",
    "prodej domu Litvínov",
    "prodej nemovitosti Litvínov",
    "spolehlivý makléř Litvínov",
    "RE/MAX Litvínov",
    "nemovitosti Litvínov",
    "ocenění nemovitosti Litvínov",
    "Lom prodej bytu",
    "Meziboří nemovitosti",
  ],
  openGraph: {
    title: "Realitní makléř Litvínov | Adam Krenc – RE/MAX Synergy",
    description:
      "Litvínov je moje hlavní oblast. Prodej bytů a domů v Litvínově a okolí. Adam Krenc – RE/MAX Synergy, konzultace zdarma.",
    url: "https://adamkrenc.cz/reality/litvinov",
    images: [{ url: "/images/adam-remax.png" }],
  },
  alternates: {
    canonical: "https://adamkrenc.cz/reality/litvinov",
  },
};

const faqItems = [
  {
    q: "Proč si vybrat právě vás jako makléře v Litvínově?",
    a: "Litvínov je moje domovská oblast. Znám zdejší trh do detailu – od cen v jednotlivých čtvrtích přes specifika panelových domů až po reálnou poptávku. Nejsem vzdálený makléř, který Litvínov nevidí.",
  },
  {
    q: "Kolik stojí byt v Litvínově?",
    a: "Ceny bytů v Litvínově se pohybují od zhruba 400 000 Kč za byt 1+1 až po 1,2 mil. Kč za větší byt ve vyhledávaných lokalitách. Pro přesný odhad vaší nemovitosti kontaktujte mě – odhad je zdarma.",
  },
  {
    q: "Prodáváte i v Lomu, Mezibořím nebo Horním Jiřetíně?",
    a: "Ano, Litvínov a okolí je celá moje hlavní oblast. Aktivně zprostředkovávám prodeje i v Lomu, Mezibořím, Horním Jiřetíně a dalších obcích v okolí.",
  },
  {
    q: "Jak rychle se prodávají nemovitosti v Litvínově?",
    a: "Litvínov má specifický trh – správně nastavená cena a dobrý marketing jsou klíčové. Průměrně pracujeme s horizontem 8–14 týdnů, ale záleží na typu a stavu nemovitosti.",
  },
];

export default function LitvinovPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "RealEstateAgent",
        "@id": "https://adamkrenc.cz/reality/litvinov#agent",
        name: "Adam Krenc – Realitní makléř Litvínov",
        url: "https://adamkrenc.cz/reality/litvinov",
        telephone: "+420605822363",
        email: "adam.krenc@remax-czech.cz",
        image: "https://adamkrenc.cz/images/adam-remax.png",
        description:
          "Realitní makléř Adam Krenc – hlavní oblast působení Litvínov a okolí. RE/MAX Synergy.",
        areaServed: {
          "@type": "City",
          name: "Litvínov",
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
          { "@type": "ListItem", position: 3, name: "Litvínov", item: "https://adamkrenc.cz/reality/litvinov" },
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
              <li className="text-[#94a3b8]">Litvínov</li>
            </ol>
          </nav>

          <div className="max-w-3xl space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#E02020]/30 bg-[#E02020]/10 text-[#E02020] text-xs font-semibold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E02020]" />
              Hlavní oblast působení · RE/MAX Synergy
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Realitní makléř<br />
              <span className="text-[#E02020]">Litvínov</span>
            </h1>

            <p className="text-[#94a3b8] text-base lg:text-lg leading-relaxed max-w-xl">
              Litvínov je moje domovská oblast. Znám zdejší trh do detailu.
              Prodej bytu nebo domu v Litvínově a okolí – rychle, bezpečně a za nejvyšší cenu.
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
          title="Realitní trh v Litvínově"
          subtitle="Litvínov a blízké okolí – Lom, Meziboří, Horní Jiřetín."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-[#94a3b8] leading-relaxed">
              Litvínov je průmyslové město s dlouhou historií, které v posledních letech
              prochází proměnou. Realitní trh zde nabízí výborný poměr cena/hodnota –
              zejména pro investory a rodiny hledající dostupné bydlení.
            </p>
            <p className="text-[#94a3b8] leading-relaxed">
              Aktivně pracuji i v okolních obcích – Lom, Meziboří, Horní Jiřetín,
              Janov nad Nisou. Každou lokalitu znám osobně a vím, co kupující i prodávající
              v dané oblasti hledají.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Průměrná cena bytu 2+1", value: "od 450 tis. Kč" },
              { label: "Průměrná cena domu", value: "od 1,2 mil. Kč" },
              { label: "Průměrná doba prodeje", value: "8–14 týdnů" },
              { label: "Oblast", value: "Litvínov + okolí" },
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
              icon: "📍",
              title: "Místní znalost",
              desc: "Litvínov je moje domovská oblast. Znám každou čtvrť, reálné ceny a aktuální poptávku – žádné dohady, jen fakta.",
            },
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
          title="Časté dotazy – Litvínov"
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
            { name: "Most", href: "/reality/most" },
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
