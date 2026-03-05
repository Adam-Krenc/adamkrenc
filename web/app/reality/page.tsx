import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Prodej nemovitostí Ústecký kraj | Adam Krenc – RE/MAX Synergy",
  description:
    "Prodej nemovitostí v Litvínově, Mostě, Teplicích a celém Ústeckém kraji. Realitní makléř Adam Krenc – moderní marketing, zázemí RE/MAX, maximální nasazení.",
  keywords: [
    "prodej nemovitostí Ústecký kraj",
    "realitní makléř Ústecký kraj",
    "makléř Most Litvínov Teplice Chomutov",
    "prodej bytu Ústecký kraj",
    "prodej domu Ústecký kraj",
    "RE/MAX Synergy Ústecký kraj",
    "ocenění nemovitosti Ústecký kraj",
    "spolehlivý makléř Ústecký kraj",
  ],
  openGraph: {
    title: "Prodej nemovitostí Ústecký kraj | Adam Krenc",
    description:
      "Realitní makléř Adam Krenc. Prodej bytů a domů v Ústeckém kraji pod záštitou RE/MAX Synergy.",
    url: "https://adamkrenc.cz/reality",
    images: [{ url: "/images/adam-remax.png" }],
  },
  alternates: {
    canonical: "https://adamkrenc.cz/reality",
  },
};

const steps = [
  {
    num: "01",
    title: "Nezávazná konzultace",
    desc: "Sejdeme se a probereme vaši nemovitost, vaše očekávání a aktuální situaci na trhu. Bez závazků, bez poplatků.",
  },
  {
    num: "02",
    title: "Tržní odhad a příprava",
    desc: "Stanovím realistickou tržní cenu a připravím nemovitost na prodej – fotografie, home staging, popis.",
  },
  {
    num: "03",
    title: "Moderní marketing",
    desc: "AI cílení, sociální sítě, portály a RE/MAX síť – vaší nemovitosti se dostane maximální expozice.",
  },
  {
    num: "04",
    title: "Prohlídky a vyjednávání",
    desc: "Zajistím prohlídky, prověřím zájemce a vyjednám pro vás nejlepší podmínky.",
  },
  {
    num: "05",
    title: "Smlouvy a předání",
    desc: "Právní servis RE/MAX, bezpečná úschova a hladké předání nemovitosti. Od A do Z.",
  },
];

const localities = [
  {
    id: "litvinov",
    name: "Litvínov",
    desc: "Hlavní oblast mého působení. Znám místní trh do detailu – ceny, sousedství i specifika jednotlivých čtvrtí.",
    href: "/reality/litvinov",
    badge: "Hlavní oblast",
  },
  {
    id: "most",
    name: "Most",
    desc: "Dynamický trh s bytovými i rodinnými domy. Pomáhám klientům navigovat aktuální příležitosti.",
    href: "/reality/most",
    badge: null,
  },
  {
    id: "teplice",
    name: "Teplice",
    desc: "Lázně, příroda a atraktivní nemovitostní trh. Aktivně zde zprostředkovávám prodeje.",
    href: "/reality/teplice",
    badge: null,
  },
  {
    id: "chomutov",
    name: "Chomutov",
    desc: "Širší oblast Ústeckého kraje s dobrými cenovými podmínkami pro kupující i prodávající.",
    href: "/reality/chomutov",
    badge: null,
  },
  {
    id: "usti",
    name: "Ústí nad Labem",
    desc: "Krajské město s rozvinutým realitním trhem. Zkušenosti s byty i komerčními prostory.",
    href: "/reality/usti-nad-labem",
    badge: null,
  },
  {
    id: "louny",
    name: "Louny & okolí",
    desc: "Klidná lokalita s rodinnými domy a zemědělskými nemovitostmi.",
    href: "/reality",
    badge: "Po domluvě",
  },
];

const faqs = [
  {
    q: "Jaká je vaše provize?",
    a: "Provize se odvíjí od rozsahu a ceny nemovitosti. Přesné podmínky probereme na nezávazné konzultaci – žádné skryté poplatky.",
  },
  {
    q: "Vyžadujete exkluzivní zastoupení?",
    a: "Preferuji exkluzivitu, protože mi umožňuje investovat do marketingu naplno. Podmínky jsou vždy individuální.",
  },
  {
    q: "Jak dlouho trvá prodej?",
    a: "Záleží na lokalitě a ceně. Průměrně 2–4 měsíce od zahájení inzerce. Správně nastavenou cenou a marketingem to lze výrazně zkrátit.",
  },
  {
    q: "Co potřebuji připravit před prodejem?",
    a: "Základem jsou dokumenty k nemovitosti (list vlastnictví, nabývací titul). Zbytek – odhad, fotky, inzerci – zajistím já.",
  },
  {
    q: "Jak probíhá tržní odhad / ocenění?",
    a: "Provedu analýzu srovnatelných prodejů v lokalitě a osobní prohlídku nemovitosti. Výsledkem je realistický rozsah prodejní ceny.",
  },
  {
    q: "Je konzultace skutečně zdarma a nezávazná?",
    a: "Ano, absolutně. Sejdeme se, probereme situaci a vy se rozhodnete bez jakéhokoliv tlaku.",
  },
];

export default function RealityPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Domů", item: "https://adamkrenc.cz" },
          { "@type": "ListItem", position: 2, name: "Reality", item: "https://adamkrenc.cz/reality" },
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
      <section className="relative min-h-screen flex items-center bg-[#0a0f1e] overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(to right, #E02020 1px, transparent 1px), linear-gradient(to bottom, #E02020 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1e] via-[#0a0f1e]/95 to-[#0a0f1e]/60" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] gap-12 items-center">
            <div className="max-w-2xl space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#E02020]/30 bg-[#E02020]/10 text-[#E02020] text-xs font-semibold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E02020]" />
                RE/MAX Synergy · Ústecký kraj
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Prodej nemovitosti<br />
                v <span className="text-[#E02020]">Ústeckém kraji.</span>
              </h1>

              <p className="text-[#94a3b8] text-base lg:text-lg leading-relaxed">
                Rychlý prodej za nejvyšší cenu. Moderní marketing, zázemí RE/MAX a osobní přístup makléře, který přistupuje ke každé zakázce naplno.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#kontakt"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-[#E02020] hover:bg-[#c01a1a] text-white font-semibold text-base transition-all hover:scale-105 hover:shadow-xl hover:shadow-red-900/30"
                >
                  Nezávazná konzultace zdarma
                </Link>
                <a
                  href="https://www.remax-czech.cz/reality/nemovitosti-maklere/13616/adam-krenc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-[#1e2d47] hover:border-[#6B8FBF] text-[#94a3b8] hover:text-white font-semibold text-base transition-all"
                >
                  Zobrazit nabídky ↗
                </a>
              </div>
            </div>

            <div className="hidden lg:flex justify-end">
              <div className="relative w-72 sm:w-80 lg:w-[360px] xl:w-[400px]">
                <div className="absolute -inset-4 rounded-3xl border border-[#1e2d47] opacity-40" />
                <div className="absolute -inset-8 rounded-3xl border border-[#1e2d47]/30 opacity-25" />

                <div className="relative rounded-2xl overflow-hidden aspect-[3/4] shadow-2xl shadow-black/60 bg-[#050814]">
                  <Image
                    src="/images/adam-remax.png"
                    alt="Adam Krenc – realitní makléř Ústecký kraj, RE/MAX Synergy"
                    fill
                    sizes="(max-width: 1024px) 320px, 400px"
                    className="object-cover object-top"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e]/45 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Jak spolupráce probíhá */}
      <SectionWrapper className="bg-[#060c18]">
        <SectionHeader
          eyebrow="Proces"
          title="Jak spolupráce probíhá."
          subtitle="Od prvního kontaktu až po podpis smluv – víte vždy co se děje."
        />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-[#1e2d47] hidden md:block" />

          <div className="space-y-6">
            {steps.map((step, i) => (
              <div key={step.num} className="md:flex items-start gap-8">
                <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-[#141c2e] border-2 border-[#E02020] flex items-center justify-center hidden md:flex">
                  <span className="text-[#E02020] text-xs font-bold">{step.num}</span>
                </div>
                <div className="bg-[#141c2e] border border-[#1e2d47] rounded-2xl p-6 flex-1 hover:border-[#E02020]/30 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="md:hidden text-[#E02020] text-xs font-bold bg-[#E02020]/10 px-2 py-1 rounded">{step.num}</span>
                    <h3 className="text-white font-bold">{step.title}</h3>
                  </div>
                  <p className="text-[#94a3b8] text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* RE/MAX + Tech výhoda */}
      <SectionWrapper className="bg-[#0a0f1e]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-2xl bg-[#141c2e] border border-[#E02020]/20 p-8">
            <div className="text-3xl mb-4">🏆</div>
            <h2 className="text-2xl font-bold text-white mb-4">Zázemí RE/MAX</h2>
            <p className="text-[#94a3b8] text-sm leading-relaxed mb-4">
              RE/MAX je největší realitní síť na světě. Za každou transakcí stojí právní servis, prověřené postupy a tisíce makléřů sdílející databázi kupujících.
            </p>
            <ul className="space-y-2 text-sm text-[#94a3b8]">
              {["Právní servis zdarma", "bezpečná advokátní úschova", "Databáze kupujících RE/MAX", "Globální síť", "Pojištění transakce"].map(item => (
                <li key={item} className="flex items-center gap-2">
                  <span className="text-[#E02020]">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-[#141c2e] border border-[#6B8FBF]/20 p-8">
            <div className="text-3xl mb-4">🤖</div>
            <h2 className="text-2xl font-bold text-white mb-4">Moderní marketing</h2>
            <p className="text-[#94a3b8] text-sm leading-relaxed mb-4">
              Jako zakladatel Smartapky.cz přináším do realit to, co ostatní makléři nemají – AI cílení reklamy, automatizovanou komunikaci a digitální prezentaci na úrovni.
            </p>
            <ul className="space-y-2 text-sm text-[#94a3b8]">
              {["AI cílení reklamy na FB/Instagram", "Profesionální foto + video", "3D virtuální prohlídky", "Automatizované follow-upy", "SEO optimalizovaná inzerce"].map(item => (
                <li key={item} className="flex items-center gap-2">
                  <span className="text-[#6B8FBF]">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionWrapper>

      {/* Lokality SEO */}
      <SectionWrapper className="bg-[#060c18]">
        <SectionHeader
          eyebrow="Lokalita"
          title="Kde působím."
          subtitle="Jednoduchý přehled lokalit, ve kterých vám pomohu s prodejem či koupí nemovitosti."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {localities.map((loc) => (
            <Link
              key={loc.id}
              id={loc.id}
              href={loc.href}
              className="group rounded-2xl bg-[#141c2e] border border-[#1e2d47] p-6 hover:border-[#E02020]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-white font-bold text-lg group-hover:text-[#E02020] transition-colors">
                  {loc.name}
                </h3>
                {loc.badge && (
                  <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#E02020]/10 text-[#E02020] border border-[#E02020]/20 shrink-0 ml-2">
                    {loc.badge}
                  </span>
                )}
              </div>
              <p className="text-[#64748b] text-sm leading-relaxed mb-4">{loc.desc}</p>
              <span className="text-[#E02020] text-xs font-semibold group-hover:underline">
                Více informací →
              </span>
            </Link>
          ))}
        </div>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper className="bg-[#0a0f1e]">
        <SectionHeader
          eyebrow="FAQ"
          title="Časté dotazy prodávajících."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq) => (
            <div
              key={faq.q}
              className="rounded-2xl bg-[#141c2e] border border-[#1e2d47] p-6"
            >
              <h3 className="text-white font-semibold mb-2 flex items-start gap-2">
                <span className="text-[#E02020] mt-0.5 flex-shrink-0">Q</span>
                {faq.q}
              </h3>
              <p className="text-[#94a3b8] text-sm leading-relaxed pl-5">{faq.a}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <ContactSection />
    </>
  );
}
