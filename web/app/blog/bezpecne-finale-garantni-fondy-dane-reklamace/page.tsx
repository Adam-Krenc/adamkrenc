import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getPostBySlug } from "@/lib/blog";

const post = getPostBySlug("bezpecne-finale-garantni-fondy-dane-reklamace");

export const metadata: Metadata = post
  ? {
      title: `${post.title} | Blog | Adam Krenc`,
      description: post.perex,
      alternates: {
        canonical: "https://www.adamkrenc.cz/blog/bezpecne-finale-garantni-fondy-dane-reklamace",
      },
      openGraph: {
        type: "article",
        title: `${post.title} | Blog | Adam Krenc`,
        description: post.perex,
        url: "https://www.adamkrenc.cz/blog/bezpecne-finale-garantni-fondy-dane-reklamace",
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
      title: "Bezpečné finále: Garanční fondy, daně a jak se vyhnout reklamaci po 5 letech | Blog | Adam Krenc",
      description:
        "Jak v roce 2026 bezpečně uzavřít prodej nemovitosti – úschova peněz, pětiletá odpovědnost za skryté vady, daňový časový test a digitální předání.",
    };

export default function ClanekBezpecneFinale() {
  const blogPostingSchema = post
    ? {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.perex,
        image: `https://www.adamkrenc.cz${post.heroImage}`,
        datePublished: post.date,
        dateModified: post.date,
        url: "https://www.adamkrenc.cz/blog/bezpecne-finale-garantni-fondy-dane-reklamace",
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
        mainEntityOfPage:
          "https://www.adamkrenc.cz/blog/bezpecne-finale-garantni-fondy-dane-reklamace",
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
          <p className="text-base lg:text-lg text-[#cbd5f5] max-w-2xl">{post?.perex}</p>
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
            Podpis kupní smlouvy v roce 2026 už dávno neznamená, že máte{" "}
            <strong className="text-white">„hotovo"</strong>. Zatímco marketing a staging vám
            zajistily nejlepší cenu, finální fáze transakce rozhoduje o tom, jestli vám ty peníze
            skutečně zůstanou. V éře digitalizace a zpřísněné ochrany spotřebitele je prodej
            nemovitosti během na dlouhou trať, který nekončí předáním klíčů, ale až uplynutím{" "}
            <strong className="text-white">pětileté lhůty za skryté vady</strong>.
          </p>
          <p className="text-lg leading-8 text-[#cbd5f5]">
            Jak tedy v roce 2026 bezpečně dohrát finále a na co si dát pozor v daňovém labyrintu?
          </p>
        </section>

        {/* 1. Úschova */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="inline-block w-1 h-8 rounded-full bg-[#E02020]" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              1. Úschova peněz: Bezpečnost na prvním místě
            </h2>
          </div>
          <p className="text-lg leading-8 text-[#cbd5f5]">
            V roce 2026 je bezpečnost finančních toků prioritou číslo jedna. Trh se definitivně
            odklonil od rizikových forem úschov. Standardem jsou dnes dva modely:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                icon: "🏦",
                title: "Bankovní úschova",
                text: "Nejjistější cesta, kde banka vystupuje jako nezávislý garant.",
              },
              {
                icon: "⚖️",
                title: "Advokátní / notářská úschova",
                text: "Trvejte na té, která je kryta povinným pojištěním a registrována v centrálním registru úschov – v roce 2026 plně digitálně auditovatelném v reálném čase.",
              },
            ].map(({ icon, title, text }) => (
              <div
                key={title}
                className="flex gap-4 items-start rounded-xl border border-[#1e2d47] bg-[#0f172a] p-5 hover:border-[#6B8FBF] transition-colors"
              >
                <span className="text-2xl mt-0.5">{icon}</span>
                <div>
                  <p className="font-semibold text-white mb-1">{title}</p>
                  <p className="text-[#94a3b8] text-sm leading-6">{text}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-lg leading-8 text-[#cbd5f5]">
            Peníze by měly z úschovy odejít k vám až v momentě, kdy katastr potvrdí zápis
            vlastnického práva bez jakýchkoliv závad (plomby, exekuce kupujícího apod.). Ideální
            časový rámec pro výplatu v roce 2026:
          </p>
          <div className="rounded-xl border border-[#1e2d47] bg-[#0f172a] p-6">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#6B8FBF] mb-3">
              Časový rámec výplaty
            </p>
            <div className="font-mono text-sm text-white bg-[#020617] rounded-lg px-5 py-4 border border-[#1e2d47] overflow-x-auto text-center">
              <span className="text-[#6B8FBF]">t</span>
              <sub className="text-[#94a3b8] text-xs">výplata</sub>
              {" "}
              <span className="text-[#E02020]">=</span>
              {" "}
              <span className="text-[#6B8FBF]">t</span>
              <sub className="text-[#94a3b8] text-xs">vklad</sub>
              {" "}
              <span className="text-[#E02020]">+</span>
              {" "}
              <span className="text-white">3 pracovní dny</span>
            </div>
          </div>
        </section>

        {/* 2. Pětiletý stín */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="inline-block w-1 h-8 rounded-full bg-[#E02020]" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              2. Pětiletý stín: Odpovědnost za skryté vady
            </h2>
          </div>
          <p className="text-lg leading-8 text-[#cbd5f5]">
            Mnoho prodávajících zapomíná, že za skryté vady nemovitosti odpovídají ze zákona{" "}
            <strong className="text-white">5 let od prodeje</strong>. V roce 2026 jsou kupující
            velmi edukovaní a neváhají se domáhat slevy z kupní ceny i několik let po nastěhování,
            pokud narazí na problém s vlhkostí, statikou nebo nefunkční izolací.
          </p>
          <blockquote className="border-l-4 border-[#E02020] pl-5 py-1">
            <p className="text-white text-xl font-semibold italic leading-8">
              „V roce 2026 nestačí věta ‚kupující se seznámil se stavem nemovitosti'. Musíte mít
              data."
            </p>
          </blockquote>
          <div className="rounded-xl border border-[#1e2d47] bg-[#0f172a] p-6 space-y-3">
            <div className="flex items-start gap-4">
              <span className="text-3xl">📋</span>
              <div className="space-y-2">
                <p className="font-semibold text-white">Technický průkaz nemovitosti</p>
                <p className="text-[#94a3b8] text-sm leading-6">
                  Pokud v kupní smlouvě přesně definujete technický stav v době prodeje,{" "}
                  <strong className="text-white">přenášíte důkazní břemeno na kupujícího</strong>.
                  Technický audit je vaší jedinou efektivní obranou proti pozdějším reklamacím.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Daňové pasti */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="inline-block w-1 h-8 rounded-full bg-[#E02020]" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              3. Daňové pasti a „Časový test"
            </h2>
          </div>
          <p className="text-lg leading-8 text-[#cbd5f5]">
            Daň z nabytí nemovitosti je minulostí, ale o to více se finanční správa v roce 2026
            zaměřuje na daň z příjmu. Na co si dát pozor:
          </p>
          <div className="space-y-4">
            {[
              {
                icon: "⏱️",
                label: "Časový test (10 let)",
                text: "Pokud nemovitost nevlastníte alespoň 10 let (u nákupů po roce 2021), počítejte s 15% daní z rozdílu mezi nákupní a prodejní cenou.",
              },
              {
                icon: "🏠",
                label: "Osvobození pro vlastní bydlení",
                text: "Pokud jste v nemovitosti bydleli alespoň 2 roky, nebo peníze z prodeje využijete na uspokojení vlastní bytové potřeby, můžete se dani vyhnout – nutno oznámit přes digitalizovaný portál MOJE daně v přesně daných termínech.",
              },
              {
                icon: "🏗️",
                label: "DPH u novostaveb",
                text: "Pozor na prodej novostaveb do 5 let od kolaudace, kde může do hry vstoupit DPH. V roce 2026 je to častá chyba u individuálních stavebníků.",
              },
            ].map(({ icon, label, text }) => (
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

        {/* 4. Předání */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="inline-block w-1 h-8 rounded-full bg-[#E02020]" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              4. Předání nemovitosti v digitální éře
            </h2>
          </div>
          <p className="text-lg leading-8 text-[#cbd5f5]">
            V roce 2026 už neřešíme jen stavy elektroměrů na papíře. Součástí předávacího protokolu
            by měly být:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                icon: "📸",
                title: "Digitální stavy měřidel",
                text: "Fotodokumentace nahraná do sdíleného cloudu, dohledatelná kdykoli v budoucnu.",
              },
              {
                icon: "📡",
                title: "Převod servisních smluv",
                text: "Internet, smart-home systémy, zabezpečení – vše formálně přepsáno na kupujícího.",
              },
              {
                icon: "🔥",
                title: "Dokumentace k revizím",
                text: "Kotel, komín, elektro – platné revizní zprávy jsou součástí předávacího protokolu.",
              },
              {
                icon: "🔐",
                title: "Přístupová práva a kódy",
                text: "Kódy od alarmu, přístupy do smart-home app, klíče od všech prostor.",
              },
            ].map(({ icon, title, text }) => (
              <div
                key={title}
                className="flex gap-4 items-start rounded-xl border border-[#1e2d47] bg-[#0f172a] p-5 hover:border-[#6B8FBF] transition-colors"
              >
                <span className="text-2xl mt-0.5">{icon}</span>
                <div>
                  <p className="font-semibold text-white mb-1">{title}</p>
                  <p className="text-[#94a3b8] text-sm leading-6">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Závěr série */}
        <section className="space-y-5">
          <div className="flex items-center gap-3">
            <span className="inline-block w-1 h-8 rounded-full bg-[#E02020]" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Závěr série</h2>
          </div>
          <p className="text-lg leading-8 text-[#cbd5f5]">
            Prodej nemovitosti v roce 2026 je komplexní projekt. Úspěch definuje synergie mezi
            správným naceněním (1. díl), špičkovým marketingem a AI stagingem (2. díl) a
            neprůstřelným právně-daňovým nastavením (3. díl).
          </p>
          <div className="rounded-xl border border-[#1e2d47] bg-[#0f172a] p-6 space-y-4">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#6B8FBF]">
              Tři pilíře úspěšného prodeje
            </p>
            <div className="space-y-3">
              {[
                { num: "1", label: "Správné nacenění", desc: "Data, ne odhady od oka" },
                { num: "2", label: "Špičkový marketing & AI staging", desc: "Emoce prodávají" },
                {
                  num: "3",
                  label: "Neprůstřelné právně-daňové nastavení",
                  desc: "Aby vám peníze skutečně zůstaly",
                },
              ].map(({ num, label, desc }) => (
                <div key={num} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#E02020]/20 border border-[#E02020]/40 flex items-center justify-center text-[#E02020] font-bold text-sm">
                    {num}
                  </span>
                  <div>
                    <p className="font-semibold text-white text-sm">{label}</p>
                    <p className="text-[#94a3b8] text-xs leading-5">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="text-lg leading-8 text-[#cbd5f5]">
            Pokud tyto tři pilíře zvládnete, prodej pro vás nebude stresující událostí, ale{" "}
            <strong className="text-white">úspěšnou investiční operací</strong>, která vám otevře
            dveře k dalším životním vizím.
          </p>
        </section>

        {/* CTA */}
        <section className="rounded-2xl border border-[#1e2d47] bg-[#0f172a] p-8 sm:p-10 space-y-5">
          <div className="flex items-center gap-3">
            <span className="inline-block w-1 h-8 rounded-full bg-[#E02020]" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Chcete prodat bez zbytečných rizik?
            </h2>
          </div>
          <p className="text-lg leading-8 text-[#cbd5f5]">
            Nabízím vám{" "}
            <strong className="text-white">bezplatný 15minutový rozhovor</strong>. Projdeme
            právně-daňová rizika vaší transakce, technický stav nemovitosti i reálnou cenovou
            hladinu – a dostanete konkrétní doporučení, i kdybyste se nakonec rozhodli postupovat
            sami.
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
