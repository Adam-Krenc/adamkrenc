import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getPostBySlug } from "@/lib/blog";

const post = getPostBySlug("aesthetic-engineering-ai-staging-2026");

export const metadata: Metadata = post
  ? {
      title: `${post.title} | Blog | Adam Krenc`,
      description: post.perex,
      openGraph: {
        title: `${post.title} | Blog | Adam Krenc`,
        description: post.perex,
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
      title: "Aesthetic Engineering: AI a staging zvyšují cenu o 15 % | Blog | Adam Krenc",
      description:
        "Jak AI staging, neuroestetika a technický audit v roce 2026 zvyšují prodejní cenu nemovitosti o 10–15 %.",
    };

export default function ClanekAestheticEngineering() {
  return (
    <article className="min-h-screen bg-[#0a0f1e] pt-24 pb-20">
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
            Prodáváte emoci, ne metry čtvereční. Pokud v roce 2026 vstupujete na realitní trh s prázdným
            bytem nebo fotkami <strong className="text-white">„v původním stavu"</strong>, dobrovolně
            necháváte na stole stovky tisíc korun. Kupující dnes nehledají projekt na víkendové rekonstrukce
            – hledají hotový domov, který uvidí na displeji svého telefonu dřív, než do něj fyzicky vstoupí.
          </p>
          <p className="text-lg leading-8 text-[#cbd5f5]">
            Vítejte v éře <strong className="text-white">Aesthetic Engineeringu</strong>. Disciplíny, kde
            se potkává precizní design s datovou analytikou a umělou inteligencí.
          </p>
        </section>

        {/* 1. AI a VR */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="inline-block w-1 h-8 rounded-full bg-[#E02020]" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              1. Konec „realitní turistiky" díky AI a VR
            </h2>
          </div>
          <p className="text-lg leading-8 text-[#cbd5f5]">
            V roce 2026 je čas nejdražší komoditou. Moderní prodejní proces už dávno nezačíná fyzickou
            prohlídkou. Prvním filtrem je{" "}
            <strong className="text-white">hyperrealistický digitální staging</strong>.
          </p>
          <p className="text-lg leading-8 text-[#cbd5f5]">
            Díky pokročilým AI modelům už nemusíte investovat desetitisíce do půjčovného fyzického nábytku
            pro prázdné prostory. Generativní design dokáže vytvořit varianty interiéru na míru konkrétním
            cílovým skupinám:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                icon: "👫",
                title: "Mladý pár",
                text: "Minimalismus, integrované smart-home prvky, pracovní kout pro remote work.",
              },
              {
                icon: "📈",
                title: "Investiční kupec",
                text: "Maximální využití prostoru, odolné materiály, vizualizace budoucích výnosů.",
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
            Kupující si nemovitost <strong className="text-white">„projde"</strong> v rozšířené realitě
            (AR) přímo ze svého obývacího pokoje. Výsledek? Na fyzickou prohlídku přicházejí jen ti, kteří
            jsou z <strong className="text-white">80 % rozhodnuti koupit</strong>.
          </p>
        </section>

        {/* 2. Psychologie prostoru */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="inline-block w-1 h-8 rounded-full bg-[#E02020]" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              2. Psychologie prostoru: Proč na barvách záleží (podle dat)
            </h2>
          </div>
          <p className="text-lg leading-8 text-[#cbd5f5]">
            Aesthetic engineering není jen o tom, aby to „hezky vypadalo". Je to o využití{" "}
            <strong className="text-white">neuroestetiky</strong>. Analýza prodejních dat z roku 2025
            ukazuje jasné trendy:
          </p>
          <div className="space-y-4">
            {[
              {
                label: "Biophilic Design",
                text: "Zakomponování zeleně a přírodních textur zvyšuje vnímanou hodnotu bytu v centrech měst o 4,8 %.",
                icon: "🌿",
              },
              {
                label: "Optimalizace osvětlení",
                text: "Správné nasvícení (i to digitální v inzerci) zkracuje dobu prodeje v průměru o 12 dní.",
                icon: "💡",
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
          <blockquote className="border-l-4 border-[#E02020] pl-5 py-1">
            <p className="text-white text-xl font-semibold italic leading-8">
              „Cílem není zakrýt vady, ale ukázat potenciál."
            </p>
          </blockquote>
          <p className="text-lg leading-8 text-[#cbd5f5]">
            V roce 2026 kupující nekupují nemovitost takovou, jaká je, ale takovou,{" "}
            <strong className="text-white">jakou by mohla být pod jejich taktovkou</strong>.
          </p>
        </section>

        {/* 3. Technický audit */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="inline-block w-1 h-8 rounded-full bg-[#E02020]" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              3. Technický audit jako prodejní argument
            </h2>
          </div>
          <p className="text-lg leading-8 text-[#cbd5f5]">
            Zatímco staging řeší emoce, Technický průkaz nemovitosti řeší{" "}
            <strong className="text-white">racionální obavy</strong>. V éře rostoucích nákladů na energie
            a přísných ESG regulací se technický stav stal klíčovým cenotvorným faktorem.
          </p>
          <p className="text-lg leading-8 text-[#cbd5f5]">
            Pokud prokážete revizi elektroinstalace, stavu stoupaček nebo reálnou energetickou náročnost
            doloženou senzory (Smartapek přístup), eliminujete{" "}
            <strong className="text-white">prostor pro vyjednávání o slevě</strong>. V rovnici úspěšného
            prodeje to vypadá následovně:
          </p>

          {/* Vzorec */}
          <div className="rounded-xl border border-[#1e2d47] bg-[#0f172a] p-6 space-y-4">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#6B8FBF]">
              Rovnice úspěšného prodeje
            </p>
            <div className="font-mono text-sm text-white bg-[#020617] rounded-lg px-5 py-4 border border-[#1e2d47] overflow-x-auto text-center">
              <span className="text-[#6B8FBF]">V</span>
              <sub className="text-[#94a3b8] text-xs">final</sub>
              {" "}
              <span className="text-[#E02020]">=</span>
              {" "}
              <span className="text-[#E02020]">(</span>
              <span className="text-[#6B8FBF]">V</span>
              <sub className="text-[#94a3b8] text-xs">market</sub>
              {" "}
              <span className="text-[#E02020]">+</span>
              {" "}
              <span className="text-[#6B8FBF]">S</span>
              <sub className="text-[#94a3b8] text-xs">staging</sub>
              <span className="text-[#E02020]">)</span>
              {" "}
              <span className="text-[#E02020]">×</span>
              {" "}
              <span className="text-[#E02020]">(</span>
              <span className="text-white">1</span>
              {" "}
              <span className="text-[#E02020]">−</span>
              {" "}
              <span className="text-[#6B8FBF]">R</span>
              <sub className="text-[#94a3b8] text-xs">risk</sub>
              <span className="text-[#E02020]">)</span>
            </div>
            <ul className="space-y-2 text-sm text-[#94a3b8] leading-6">
              <li>
                <span className="font-mono text-white">V<sub>final</sub></span> – konečná prodejní cena
              </li>
              <li>
                <span className="font-mono text-white">S<sub>staging</sub></span> – přidaná hodnota estetické přípravy{" "}
                <strong className="text-white">(v průměru +10–15 %)</strong>
              </li>
              <li>
                <span className="font-mono text-white">R<sub>risk</sub></span> – koeficient rizik (skryté vady, právní vady),
                který technický audit minimalizuje
              </li>
            </ul>
          </div>
        </section>

        {/* 4. Hybridní prezentace */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="inline-block w-1 h-8 rounded-full bg-[#E02020]" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              4. Hybridní prezentace: Budoucnost je v personalizaci
            </h2>
          </div>
          <p className="text-lg leading-8 text-[#cbd5f5]">
            V roce 2026 už neexistuje jeden univerzální inzerát. Díky AI dokážeme marketingovou komunikaci{" "}
            <strong className="text-white">personalizovat</strong>. Jiný text a jinou sadu vizualizací uvidí
            na sociálních sítích IT manažer hledající klid na práci, a jiný rodina s dvěma dětmi.
          </p>
          <div className="rounded-xl border border-[#1e2d47] bg-[#0f172a] p-6 space-y-4">
            <div className="flex items-start gap-4">
              <span className="text-3xl">🎯</span>
              <div className="space-y-2">
                <p className="font-semibold text-white">Aesthetic engineering je investice, nikoliv náklad</p>
                <p className="text-[#94a3b8] text-sm leading-6">
                  Pokud do přípravy nemovitosti vložíte{" "}
                  <strong className="text-white">1 % její hodnoty</strong>, trh v roce 2026 vám to vrátí
                  minimálně trojnásobně. Nejen v penězích, ale i v rychlosti prodeje a klidu při samotné transakci.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Závěr */}
        <section className="space-y-5">
          <p className="text-lg leading-8 text-[#cbd5f5]">
            V příštím (a posledním) díle naší série se podíváme na to, jak zvládnout{" "}
            <strong className="text-white">finální právní a daňové bitvy</strong>, abyste o své těžce
            vydělané peníze nepřišli v poslední vteřině zápasu.
          </p>
        </section>

        {/* CTA */}
        <section className="rounded-2xl border border-[#1e2d47] bg-[#0f172a] p-8 sm:p-10 space-y-5">
          <div className="flex items-center gap-3">
            <span className="inline-block w-1 h-8 rounded-full bg-[#E02020]" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Chcete prodat za maximum?</h2>
          </div>
          <p className="text-lg leading-8 text-[#cbd5f5]">
            Nabízím vám{" "}
            <strong className="text-white">bezplatný 15minutový rozhovor</strong>. Projdeme estetický
            potenciál vaší nemovitosti, technický stav i reálnou cenovou hladinu – a dostanete konkrétní
            doporučení, i kdybyste se nakonec rozhodli postupovat sami.
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
