import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getPostBySlug } from "@/lib/blog";

const post = getPostBySlug("investicni-hypoteky-litvinov-2026");

export const metadata: Metadata = post
  ? {
      title: `${post.title} | Blog | Adam Krenc`,
      description: post.perex,
      alternates: {
        canonical: "https://www.adamkrenc.cz/blog/investicni-hypoteky-litvinov-2026",
      },
      openGraph: {
        type: "article",
        title: `${post.title} | Blog | Adam Krenc`,
        description: post.perex,
        url: "https://www.adamkrenc.cz/blog/investicni-hypoteky-litvinov-2026",
        images: [
          {
            url: post.heroImage,
            width: 1200,
            height: 630,
            alt: post.heroAlt,
          },
        ],
      },
    }
  : {
      title: "Nová pravidla investičních hypoték od dubna 2026 – Litvínov | Blog | Adam Krenc",
      description:
        "ČNB zpřísňuje podmínky pro investiční hypotéky od dubna 2026. Co to znamená pro kupující v Litvínově a jak se připravit.",
    };

export default function ClanekInvesticniHypotekyLitvinov2026() {
  const blogPostingSchema = post
    ? {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.perex,
        image: `https://www.adamkrenc.cz${post.heroImage}`,
        datePublished: post.date,
        dateModified: post.date,
        url: "https://www.adamkrenc.cz/blog/investicni-hypoteky-litvinov-2026",
        author: {
          "@type": "Person",
          "@id": "https://www.adamkrenc.cz/#person",
          name: "Adam Krenc",
        },
        publisher: {
          "@type": "Person",
          "@id": "https://www.adamkrenc.cz/#person",
          name: "Adam Krenc",
        },
        inLanguage: "cs-CZ",
        mainEntityOfPage: "https://www.adamkrenc.cz/blog/investicni-hypoteky-litvinov-2026",
      }
    : null;

  return (
    <article className="min-h-screen bg-[#0a0f1e] pt-24 pb-20">
      {blogPostingSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
        />
      )}

      {/* Hero */}
      <header className="relative border-b border-[#1e2d47] bg-[#020617]/60">
        <div className="absolute inset-0">
          {post && (
            <Image
              src={post.heroImage}
              alt={post.heroAlt}
              fill
              priority
              className="object-cover object-center opacity-40"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/85 to-[#020617]/70" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#6B8FBF] mb-3">
            Blog ·{" "}
            {post &&
              new Date(post.date).toLocaleDateString("cs-CZ", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })}
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {post?.title}
          </h1>
          <p className="text-base lg:text-lg text-[#cbd5f5] max-w-2xl">
            {post?.perex}
          </p>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 mb-20 space-y-16">
        <div className="mb-2">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm text-[#94a3b8] hover:text-white transition-colors"
          >
            <span className="mr-1 text-lg">←</span>
            Zpět na blog
          </Link>
        </div>

        {/* Úvod */}
        <section className="space-y-5">
          <p className="text-lg leading-8 text-[#cbd5f5]">
            Česká národní banka od <strong className="text-white">1. dubna 2026</strong> zpřísňuje podmínky
            pro investiční hypotéky. Pokud přemýšlíte o koupi druhého bytu, nemovitosti na pronájem nebo
            investičního apartmánu v Litvínově, tato změna se vás přímo týká. A čas jednat je právě teď.
          </p>
          <p className="text-lg leading-8 text-[#cbd5f5]">
            Nová pravidla nejsou jen technická záležitost bank – v praxi to znamená, že na investiční
            nemovitost budete muset mít výrazně více vlastních peněz než dřív. V tomto článku vám vysvětlím,
            co přesně se mění, koho to zasáhne nejvíc a jak situaci v Litvínově vnímám jako{" "}
            <Link href="/reality/litvinov" className="text-[#6B8FBF] hover:text-white underline underline-offset-2 transition-colors">
              místní realitní makléř
            </Link>
            .
          </p>
        </section>

        {/* Co se mění */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="inline-block w-1 h-8 rounded-full bg-[#E02020]" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Co se přesně mění od dubna 2026?
            </h2>
          </div>
          <p className="text-lg leading-8 text-[#cbd5f5]">
            ČNB doporučuje bankám tři klíčové změny, které se vztahují výhradně na{" "}
            <strong className="text-white">investiční hypotéky</strong> – tedy ty, které slouží k nákupu
            nemovitosti určené k pronájmu nebo jako druhá/třetí nemovitost v majetku žadatele:
          </p>

          {/* Tabulka */}
          <div className="overflow-x-auto rounded-xl border border-[#1e2d47]">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#0f172a] border-b border-[#1e2d47]">
                  <th className="text-left px-5 py-3 font-semibold text-[#6B8FBF] uppercase tracking-wider text-xs">
                    Ukazatel
                  </th>
                  <th className="text-left px-5 py-3 font-semibold text-[#6B8FBF] uppercase tracking-wider text-xs">
                    Před dubnem 2026
                  </th>
                  <th className="text-left px-5 py-3 font-semibold text-[#E02020] uppercase tracking-wider text-xs">
                    Od dubna 2026
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1e2d47] bg-[#020617]">
                {[
                  {
                    ukazatel: "LTV (výše úvěru vůči hodnotě nemovitosti)",
                    pred: "až 80 %",
                    po: "max. 70 %",
                  },
                  {
                    ukazatel: "DTI (celkový dluh vůči ročnímu příjmu)",
                    pred: "až 8,5×",
                    po: "max. 7×",
                  },
                  {
                    ukazatel: "DSTI (splátky vůči měsíčnímu příjmu)",
                    pred: "až 45 %",
                    po: "max. 40 %",
                  },
                ].map(({ ukazatel, pred, po }) => (
                  <tr key={ukazatel} className="hover:bg-[#0f172a]/60 transition-colors">
                    <td className="px-5 py-4 text-white font-medium">{ukazatel}</td>
                    <td className="px-5 py-4 text-[#94a3b8]">{pred}</td>
                    <td className="px-5 py-4 text-[#E02020] font-semibold">{po}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="rounded-xl border border-[#1e2d47] bg-[#0f172a] p-5 space-y-2">
            <p className="text-sm font-semibold text-white">Co to znamená v praxi?</p>
            <p className="text-[#94a3b8] text-sm leading-6">
              Pokud kupujete investiční byt za <strong className="text-white">1 500 000 Kč</strong> v
              Litvínově, budete nově potřebovat minimálně{" "}
              <strong className="text-white">450 000 Kč vlastních prostředků</strong> místo dřívějších
              300 000 Kč. To je rozdíl 150 000 Kč, který mnoho investorů prostě nemá připravených.
            </p>
          </div>
        </section>

        {/* Proč Litvínov */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="inline-block w-1 h-8 rounded-full bg-[#E02020]" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Proč se to týká právě Litvínova?
            </h2>
          </div>
          <p className="text-lg leading-8 text-[#cbd5f5]">
            <Link href="/reality/litvinov" className="text-[#6B8FBF] hover:text-white underline underline-offset-2 transition-colors">
              Litvínov
            </Link>{" "}
            je jedno z nejatraktivnějších míst v ČR pro investory do nemovitostí – a to hned z několika
            důvodů. Ústecký kraj je dlouhodobě{" "}
            <strong className="text-white">nejdostupnější region v celém Česku</strong> z hlediska cen
            nemovitostí, zároveň je ale nejrychleji rostoucím trhem – ceny bytů vzrostly v roce 2025 o{" "}
            <strong className="text-white">+25,9 %</strong>.
          </p>
          <p className="text-lg leading-8 text-[#cbd5f5]">
            Právě proto sem v posledních dvou letech mířila vlna investorů z Prahy, Brna i zahraničí.
            Kupovali byty za relativně nízké ceny, pronajímali je a těžili z rostoucích hodnot. Tato skupina
            je teď novými pravidly zasažena jako první.
          </p>
        </section>

        {/* Kdo to pocítí */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="inline-block w-1 h-8 rounded-full bg-[#E02020]" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Kdo to pocítí nejvíce?</h2>
          </div>
          <p className="text-lg leading-8 text-[#cbd5f5]">
            Ne každého se změna dotkne stejně. Nejohroženější skupiny jsou:
          </p>
          <div className="space-y-3">
            {[
              {
                icon: "🔴",
                title: "Začínající investoři",
                text: "Lidé kupující první investiční byt, kteří nemají velké úspory navíc.",
              },
              {
                icon: "🔴",
                title: "Investoři plánující druhý nebo třetí byt",
                text: "DTI limit 7 je u nich při stávajícím dluhu snadno překročitelný.",
              },
              {
                icon: "🔴",
                title: 'Lidé, kteří čekali „na správný moment"',
                text: "Ten správný moment byl před dubnem 2026.",
              },
              {
                icon: "🔴",
                title: "Kupující financující přes maximální LTV",
                text: "80% hypotéky na investice od dubna prostě neexistují.",
              },
            ].map(({ icon, title, text }) => (
              <div
                key={title}
                className="flex gap-4 items-start rounded-xl border border-[#1e2d47] bg-[#0f172a] p-5 hover:border-[#E02020]/40 transition-colors"
              >
                <span className="text-xl mt-0.5">{icon}</span>
                <div>
                  <p className="font-semibold text-white mb-1">{title}</p>
                  <p className="text-[#94a3b8] text-sm leading-6">{text}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-lg leading-8 text-[#cbd5f5]">
            Naopak klienti s <strong className="text-white">vyšší hotovostní rezervou a stabilním příjmem</strong>{" "}
            mají stále zelenou – a v Litvínově si výběrem správné nemovitosti mohou zajistit velmi slušný
            výnos z pronájmu.
          </p>
        </section>

        {/* Je čas koupit? */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="inline-block w-1 h-8 rounded-full bg-[#E02020]" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Je teď ještě správná chvíle koupit v Litvínově?
            </h2>
          </div>
          <blockquote className="border-l-4 border-[#E02020] pl-5 py-1">
            <p className="text-white text-xl font-semibold italic leading-8">
              „Jako místní realitní makléř vám řeknu rovnou: ano, ale okno se zužuje."
            </p>
          </blockquote>
          <p className="text-lg leading-8 text-[#cbd5f5]">
            Litvínov v roce 2026 není stejný Litvínov jako před pěti lety. Město investuje přes{" "}
            <strong className="text-white">600 milionů korun</strong> do nové infrastruktury – plavecká hala,
            rekonstrukce tramvajové trati, revitalizace centra. Takové investice historicky táhnou ceny
            nemovitostí nahoru. A zásoby dostupných bytů v kraji meziročně klesly o téměř{" "}
            <strong className="text-white">18 %</strong>.
          </p>
          <p className="text-lg leading-8 text-[#cbd5f5]">
            Pro investora to znamená jedno: čím déle čekáte, tím víc zaplatíte za nemovitost – a tím méně
            vám zbyde na vlastní vklad, který teď banka požaduje vyšší.{" "}
            <strong className="text-white">Dvojitý tlak</strong>, který se vyplatí nepodcenit.
          </p>
        </section>

        {/* Konkrétní kroky */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="inline-block w-1 h-8 rounded-full bg-[#E02020]" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Co dělat, pokud plánujete koupit investiční nemovitost v Litvínově?
            </h2>
          </div>
          <p className="text-lg leading-8 text-[#cbd5f5]">
            Konkrétní kroky, které doporučuji každému, kdo o investici uvažuje:
          </p>
          <ol className="space-y-5">
            {[
              {
                n: "01",
                title: "Spočítejte si DTI",
                text: "Sečtěte všechny své stávající dluhy a vydělte ročním příjmem. Pokud vyjde číslo vyšší než 6, je čas jednat rychle.",
              },
              {
                n: "02",
                title: "Mějte připravených alespoň 30 % hodnoty nemovitosti",
                text: "Banka vám od dubna nepůjčí více než 70 % hodnoty investiční nemovitosti.",
              },
              {
                n: "03",
                title: "Konzultujte s hypotečním poradcem co nejdřív",
                text: "Předschválení hypotéky před dubnem 2026 může být klíčové pro zachování výhodnějších podmínek.",
              },
              {
                n: "04",
                title: "Nepodceňujte lokální znalost",
                text: "Ne každý byt v Litvínově je stejně dobrá investice. Záleží na čtvrti, stavu nemovitosti a nájemním potenciálu.",
              },
            ].map(({ n, title, text }) => (
              <li key={n} className="flex gap-5 items-start">
                <span className="text-3xl font-black text-[#1e2d47] leading-none select-none shrink-0">
                  {n}
                </span>
                <div>
                  <p className="font-semibold text-white mb-1">{title}</p>
                  <p className="text-[#94a3b8] text-sm leading-6">{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Interní odkazy */}
        <section className="space-y-4">
          <p className="text-sm font-semibold tracking-[0.15em] uppercase text-[#6B8FBF]">
            Mohlo by vás zajímat
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              {
                href: "/blog/prodej-nemovitosti-2026",
                title: "Jak na prodej nemovitosti v roce 2026",
                desc: "Strategie, načasování a konec cenových odhadů od oka.",
              },
              {
                href: "/reality/litvinov",
                title: "Nemovitosti v Litvínově",
                desc: "Aktuální nabídka a lokální znalost realitního trhu.",
              },
            ].map(({ href, title, desc }) => (
              <Link
                key={href}
                href={href}
                className="group rounded-xl border border-[#1e2d47] bg-[#0f172a] p-5 hover:border-[#6B8FBF] transition-colors"
              >
                <p className="font-semibold text-white group-hover:text-[#6B8FBF] transition-colors mb-1">
                  {title}
                </p>
                <p className="text-[#94a3b8] text-sm leading-5">{desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-2xl border border-[#1e2d47] bg-[#0f172a] p-8 sm:p-10 space-y-5">
          <div className="flex items-center gap-3">
            <span className="inline-block w-1 h-8 rounded-full bg-[#E02020]" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Poradím vám zdarma</h2>
          </div>
          <p className="text-lg leading-8 text-[#cbd5f5]">
            Jste z Litvínova nebo okolí a přemýšlíte o koupi investiční nemovitosti? Máte otázky k novým
            pravidlům hypoték? Zavolejte mi nebo napište –{" "}
            <strong className="text-white">první konzultace je zdarma a bez závazků.</strong>
          </p>
          <div className="flex flex-col sm:flex-row gap-3 pt-2 text-sm text-[#94a3b8]">
            <a
              href="tel:+420605822363"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <span>📞</span> +420 605 822 363
            </a>
            <a
              href="mailto:adam.krenc@remax-czech.cz"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <span>✉️</span> adam.krenc@remax-czech.cz
            </a>
            <a
              href="https://www.adamkrenc.cz"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <span>🌐</span> www.adamkrenc.cz
            </a>
          </div>
        </section>

        {/* Podpis */}
        <footer className="border-t border-[#1e2d47] pt-8 flex items-center gap-4">
          <div>
            <p className="text-white font-semibold">Adam Krenc</p>
            <p className="text-[#6B8FBF] text-sm">Realitní makléř &amp; CEO Smartapky.cz</p>
          </div>
        </footer>
      </div>
    </article>
  );
}
