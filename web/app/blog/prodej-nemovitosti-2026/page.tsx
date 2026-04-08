import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getPostBySlug } from "@/lib/blog";

const post = getPostBySlug("prodej-nemovitosti-2026");

export const metadata: Metadata = post
  ? {
      title: `${post.title} | Blog | Adam Krenc`,
      description: post.perex,
      alternates: {
        canonical: "https://www.adamkrenc.cz/blog/prodej-nemovitosti-2026",
      },
      openGraph: {
        type: "article",
        title: `${post.title} | Blog | Adam Krenc`,
        description: post.perex,
        url: "https://www.adamkrenc.cz/blog/prodej-nemovitosti-2026",
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
      title: "Jak na prodej nemovitosti v roce 2026 | Blog | Adam Krenc",
      description:
        "Strategie, načasování a konec cenových odhadů od oka. Průvodce prodejem nemovitosti v roce 2026.",
    };

export default function ClanekProdej2026() {
  const blogPostingSchema = post
    ? {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.perex,
        image: `https://www.adamkrenc.cz${post.heroImage}`,
        datePublished: post.date,
        dateModified: post.date,
        url: "https://www.adamkrenc.cz/blog/prodej-nemovitosti-2026",
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
        mainEntityOfPage: "https://www.adamkrenc.cz/blog/prodej-nemovitosti-2026",
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
      <header className="relative border-b border-[#1e2d47] bg-[#020617]/60">
        <div className="absolute inset-0">
          {post && (
            <Image
              src={post.heroImage}
              alt={post.heroAlt}
              fill
              priority
              className="object-cover object-top opacity-40"
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
            Prodat nemovitost v roce 2026 už není o tom „hodit inzerát na Sreality" a čekat, kdo se ozve.
            Trh se transformoval v sofistikovanou operaci na pomezí{" "}
            <strong className="text-white">práva, financí a datové analýzy</strong>. Zatímco před lety
            prošlo skoro všechno, dnešní prostředí definují extrémně informovaní kupující a přísná regulace bank.
          </p>
          <p className="text-lg leading-8 text-[#cbd5f5]">
            Pokud chcete v roce 2026 maximalizovat zisk a minimalizovat právní rizika, která vás mohou
            strašit <strong className="text-white">až do roku 2031</strong>, musíte mít plán.
          </p>
        </section>

        {/* Načasování */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="inline-block w-1 h-8 rounded-full bg-[#E02020]" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Načasování: Sledujte ČNB a regulace, ne jen jaro a podzim</h2>
          </div>
          <p className="text-lg leading-8 text-[#cbd5f5]">
            V roce 2026 je trh sice stabilní – bez extrémních výkyvů let 2020–2022 – ale je{" "}
            <strong className="text-white">vysoce citlivý na regulace</strong>. Rozhodnutí, kdy dáte
            nemovitost na trh, může ovlivnit finální cenu o statisíce korun.
          </p>
          <div className="space-y-4">
            {[
              {
                label: "Rodinné domy",
                text: "Největší tah na branku mají tradičně na jaře a začátkem podzimu. Kupující s rodinami plánují stěhování v návaznosti na školní rok.",
                icon: "🏡",
              },
              {
                label: "Byty v metropolích",
                text: "Poptávka je stabilní celoročně, s lehkým útlumem v létě. Výhodou je rychlejší rozhodování kupujících.",
                icon: "🏢",
              },
              {
                label: "Investorské varování",
                text: "Klíčovým datem je 1. dubna 2026. Nová doporučení ČNB pro investiční hypotéky zpřísňují limity, což pravděpodobně vytvoří nákupní horečku v prvním kvartálu a následné ochlazení ve druhém.",
                icon: "⚠️",
              },
            ].map(({ label, text, icon }) => (
              <div
                key={label}
                className="flex gap-4 items-start rounded-xl border border-[#1e2d47] bg-[#0f172a] p-5 hover:border-[#6B8FBF] transition-colors"
              >
                <span className="text-2xl mt-0.5">{icon}</span>
                <div>
                  <p className="font-semibold text-white mb-1">{label}</p>
                  <p className="text-[#94a3b8] text-sm leading-6">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Právní audit */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="inline-block w-1 h-8 rounded-full bg-[#E02020]" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Právní audit: Nečekejte, až vás nachytá kupující</h2>
          </div>
          <p className="text-lg leading-8 text-[#cbd5f5]">
            Digitalizace postoupila a nahlížení do katastru je dnes podmíněno elektronickou identitou.
            Ještě před spuštěním marketingu si udělejte vlastní{" "}
            <strong className="text-white">„lustraci"</strong> – problémy odhalené kupujícím vás stojí
            vyjednávací pozici i peníze.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-[#1e2d47] bg-[#0f172a] p-5 space-y-2 hover:border-[#E02020]/40 transition-colors">
              <p className="text-sm font-semibold text-[#E02020] uppercase tracking-wider">Věcná břemena</p>
              <p className="text-[#94a3b8] text-sm leading-6">
                Věcná břemena (služebnosti, věcná práva k cizím věcem) mohou srazit cenu nemovitosti
                o <strong className="text-white">20–30 %</strong>. Identifikujte je a připravte strategii
                před prvním jednáním s kupujícím.
              </p>
            </div>
            <div className="rounded-xl border border-[#1e2d47] bg-[#0f172a] p-5 space-y-2 hover:border-[#E02020]/40 transition-colors">
              <p className="text-sm font-semibold text-[#E02020] uppercase tracking-wider">Černé stavby</p>
              <p className="text-[#94a3b8] text-sm leading-6">
                Zpřísněný stavební zákon v roce 2026 tvrdě postihuje pergoly nebo přístavby nezapsané
                v katastru. Takový stav může být důvodem k{" "}
                <strong className="text-white">okamžitému odstoupení od smlouvy</strong> ze strany kupujícího.
              </p>
            </div>
          </div>
        </section>

        {/* Cenotvorba */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="inline-block w-1 h-8 rounded-full bg-[#E02020]" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Cenotvorba: Proč je „přestřelená" cena nejrychlejší cesta k prodělku</h2>
          </div>
          <p className="text-lg leading-8 text-[#cbd5f5]">
            Stanovení ceny je v roce 2026 věda. Přestřelený start vytvoří{" "}
            <strong className="text-white">„mrtvý inzerát"</strong>, který budí nedůvěru a nakonec vás
            donutí zlevnit víc, než kdybyste začali reálně. Profesionálové dnes kombinují tři metody:
          </p>
          <ol className="space-y-5">
            {[
              {
                n: "01",
                title: "Metoda srovnávací",
                text: "Analýza dat z katastru (např. přes Valuo), ale s korekcí na 3–5měsíční zpoždění těchto dat. Historická data musíte přepočítat na aktuální tržní realitu.",
              },
              {
                n: "02",
                title: "Metoda výnosová",
                text: "Klíčová u investičních bytů. Průměrný nájem v ČR se pohybuje kolem 308 Kč/m². Výnosová metoda odráží, co je investor skutečně ochoten zaplatit za výnos.",
              },
              {
                n: "03",
                title: "Metoda nákladová",
                text: "Důležitá pro novostavby kvůli stále vysokým cenám stavebních vstupů. Zohledňuje skutečné reprodukční náklady na výstavbu srovnatelné nemovitosti.",
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

        {/* Zelená hypotéka */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="inline-block w-1 h-8 rounded-full bg-[#E02020]" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Faktor „Zelené hypotéky"</h2>
          </div>
          <p className="text-lg leading-8 text-[#cbd5f5]">
            Energetický štítek (PENB) už není jen otravný papír. Banky v roce 2026 striktně rozlišují
            mezi <strong className="text-white">„zelenými"</strong> a standardními úvěry.
          </p>
          <div className="rounded-xl border border-[#1e2d47] bg-[#0f172a] p-6 space-y-4">
            <div className="flex items-start gap-4">
              <span className="text-3xl">🌿</span>
              <div className="space-y-2">
                <p className="font-semibold text-white">Kategorie A nebo B = vyšší cena i rychlejší prodej</p>
                <p className="text-[#94a3b8] text-sm leading-6">
                  Nemovitost v energetické kategorii A nebo B dosahuje o{" "}
                  <strong className="text-white">5–10 % vyšší ceny</strong>, protože kupujícímu zajistí
                  nárok na nižší úrokovou sazbu hypotéky. To je pro motivovaného kupujícího klíčový argument.
                </p>
              </div>
            </div>
            <div className="border-t border-[#1e2d47] pt-4">
              <p className="text-[#6B8FBF] text-sm">
                <strong className="text-white">Tip:</strong> Pokud váš PENB řadí nemovitost do kategorie
                C nebo níže, spočítejte si, zda se investice do zlepšení energetické efektivity
                (tepelné čerpadlo, zateplení) před prodejem nevyplatí.
              </p>
            </div>
          </div>
        </section>

        {/* Smluvní neprůstřelnost */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="inline-block w-1 h-8 rounded-full bg-[#E02020]" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Smluvní neprůstřelnost</h2>
          </div>
          <p className="text-lg leading-8 text-[#cbd5f5]">
            Zapomeňte na vzory z internetu. V roce 2026 je standardem{" "}
            <strong className="text-white">trojstranná rezervační smlouva</strong> (majitel – makléř –
            zájemce). Jen ta je podle aktuální judikatury skutečně vymahatelná a chrání všechny strany.
          </p>
          <p className="text-lg leading-8 text-[#cbd5f5]">
            V kupní smlouvě pak definujeme precizní mechanismy – například lhůtu pro výplatu peněz z úschovy:
          </p>

          {/* Vzorec */}
          <div className="rounded-xl border border-[#1e2d47] bg-[#0f172a] p-6 space-y-3">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#6B8FBF]">Smluvní mechanismus – výplata z úschovy</p>
            <div className="font-mono text-sm text-white bg-[#020617] rounded-lg px-5 py-4 border border-[#1e2d47] overflow-x-auto">
              <span className="text-[#6B8FBF]">t</span>
              <sub className="text-[#94a3b8] text-xs">výplata</sub>
              {" "}
              <span className="text-[#E02020]">≤</span>
              {" "}
              <span className="text-[#6B8FBF]">t</span>
              <sub className="text-[#94a3b8] text-xs">vklad</sub>
              {" "}
              <span className="text-[#E02020]">+</span>
              {" "}
              <span className="text-white">3 pracovní dny</span>
            </div>
            <p className="text-[#94a3b8] text-sm leading-6">
              Kde <span className="text-white font-mono">t<sub>vklad</sub></span> je okamžik předložení aktuálního
              výpisu z LV s novým vlastníkem <strong className="text-white">bez závad</strong>. Takto
              formulovaná podmínka eliminuje šedé zóny a zbytečné spory o výplatu.
            </p>
          </div>
        </section>

        {/* Závěr */}
        <section className="space-y-5">
          <blockquote className="border-l-4 border-[#E02020] pl-5 py-1">
            <p className="text-white text-xl font-semibold italic leading-8">
              „Prodej v roce 2026 je o odstranění subjektivity – z cenotvorby, z právní přípravy i ze smluvní dokumentace."
            </p>
          </blockquote>
          <p className="text-lg leading-8 text-[#cbd5f5]">
            V dalším článku se podíváme na to, jak k prodeji využít AI a proč je{" "}
            <strong className="text-white">„Technický průkaz nemovitosti"</strong> vaší jedinou obranou
            proti reklamacím ze strany kupujícího.
          </p>
        </section>

        {/* CTA */}
        <section className="rounded-2xl border border-[#1e2d47] bg-[#0f172a] p-8 sm:p-10 space-y-5">
          <div className="flex items-center gap-3">
            <span className="inline-block w-1 h-8 rounded-full bg-[#E02020]" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Chcete prodat chytře?</h2>
          </div>
          <p className="text-lg leading-8 text-[#cbd5f5]">
            Nabízím vám{" "}
            <strong className="text-white">bezplatný 15minutový rozhovor</strong>. Projdeme vaši situaci –
            načasování, právní stav nemovitosti i reálnou cenovou hladinu – a dostanete konkrétní doporučení,
            i kdybyste se nakonec rozhodli postupovat sami.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 pt-2 text-sm text-[#94a3b8]">
            <a
              href="mailto:adam.krenc@remax-czech.cz"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <span>📧</span> adam.krenc@remax-czech.cz
            </a>
            <a
              href="tel:+420605822363"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <span>📞</span> +420 605 822 363
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
