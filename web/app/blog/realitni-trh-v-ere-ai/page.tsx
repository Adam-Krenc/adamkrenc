import type { Metadata } from "next";
import Image from "next/image";
import { getPostBySlug } from "@/lib/blog";

const post = getPostBySlug("realitni-trh-v-ere-ai");

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
      title: "Realitní trh v éře AI | Blog | Adam Krenc",
      description:
        "Realitní trh v éře AI: proč sázím na data, efektivitu a lidský přístup.",
    };

export default function ClanekAdamKrenc() {
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

        {/* Úvod */}
        <section className="space-y-5">
          <p className="text-lg leading-8 text-[#cbd5f5]">
            Ahoj, jmenuji se <strong className="text-white">Adam Krenc</strong>. Jako realitní makléř v síti{" "}
            <strong className="text-white">RE/MAX Synergy</strong> se specializuji na prodej a koupi nemovitostí
            v Ústeckém kraji. Moje cesta do světa realit nebyla náhodná – přišel jsem s vizí modernizovat
            proces, který je pro většinu lidí jedním z nejdůležitějších životních kroků.
          </p>
          <p className="text-lg leading-8 text-[#cbd5f5]">
            Mým cílem je, abyste svou nemovitost prodali rychle, za nejvyšší možnou cenu a s pocitem,
            že o všechno technické a administrativní je postaráno s digitální přesností.
          </p>
        </section>

        {/* Od AI k realitám */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="inline-block w-1 h-8 rounded-full bg-[#E02020]" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Od AI automatizací k moderním realitám</h2>
          </div>
          <p className="text-lg leading-8 text-[#cbd5f5]">
            Kromě realit vedu technologickou společnost{" "}
            <strong className="text-white">Smartapky.cz</strong>. Pomáháme středním firmám, které chtějí
            škálovat svůj růst a zefektivnit procesy pomocí AI automatizací. Možná se ptáte, jak to
            souvisí s prodejem vašeho bytu nebo domu?{" "}
            <strong className="text-white">Zásadně.</strong>
          </p>
          <p className="text-base text-[#94a3b8]">
            Díky zkušenostem z technologického byznysu přináším do realit nástroje, které na trhu nejsou běžné:
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                icon: "📊",
                title: "Data-driven rozhodování",
                text: "Neodhaduji cenu pocitově. Používám pokročilé analytické nástroje k přesnému ocenění nemovitosti na základě reálných tržních dat.",
              },
              {
                icon: "🎯",
                title: "AI Marketing",
                text: "Vaši nemovitost neprodávám jen na realitních portálech. Využívám algoritmy pro přesné cílení na sociálních sítích a LinkedInu.",
              },
              {
                icon: "⚡",
                title: "Maximální efektivita",
                text: "Systémy, které stavím v technologiích, aplikuji i na procesy v RE/MAXu. Méně administrativy, více strategického času.",
              },
            ].map(({ icon, title, text }) => (
              <div
                key={title}
                className="rounded-xl border border-[#1e2d47] bg-[#0f172a] p-5 space-y-2 hover:border-[#6B8FBF] transition-colors"
              >
                <div className="text-2xl">{icon}</div>
                <h3 className="font-semibold text-white text-sm">{title}</h3>
                <p className="text-[#94a3b8] text-sm leading-6">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Energie */}
        <section className="space-y-5">
          <div className="flex items-center gap-3">
            <span className="inline-block w-1 h-8 rounded-full bg-[#E02020]" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Energie, která se nezastaví</h2>
          </div>
          <p className="text-lg leading-8 text-[#cbd5f5]">
            Moje pracovní nasazení a disciplína pramení z vášně pro sport. Ročně najedu tisíce kilometrů
            na kole a stovky naběhám v horách – tahle vytrvalost se přímo propisuje do mé práce.
          </p>
          <blockquote className="border-l-4 border-[#E02020] pl-5 py-1">
            <p className="text-white text-xl font-semibold italic leading-8">
              „Když se do prodeje vaší nemovitosti zakousnu, nepustím, dokud není hotovo."
            </p>
          </blockquote>
          <p className="text-lg leading-8 text-[#cbd5f5]">
            Miluji Ústecký kraj. Znám Ústí, Most i Teplice nejen z mapy, ale i z pohledu na kole nebo
            v běžeckých botách. Rozumím specifikům zdejších lokalit, občanské vybavenosti i investičnímu
            potenciálu našeho regionu.
          </p>
        </section>

        {/* Spolupráce */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="inline-block w-1 h-8 rounded-full bg-[#E02020]" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Jak vypadá spolupráce se mnou?</h2>
          </div>
          <p className="text-lg leading-8 text-[#cbd5f5]">
            Zakládám si na absolutní <strong className="text-white">transparentnosti a férovosti</strong>.
            Žádné skryté kličky nebo mlžení.
          </p>
          <ol className="space-y-4">
            {[
              {
                n: "01",
                title: "Důkladná příprava",
                text: "Provádím audit dokumentace a identifikuji skryté vady, abychom předešli budoucím problémům.",
              },
              {
                n: "02",
                title: "Špičková prezentace",
                text: "Profesionální marketing, virtuální prohlídky a moderní vizuální styl, který vaši nemovitost odliší od stovek ostatních.",
              },
              {
                n: "03",
                title: "Jasná komunikace",
                text: "Každý krok procesu vám vysvětlím srozumitelně. Nejlepší systém je ten, kterému všichni rozumí.",
              },
            ].map(({ n, title, text }) => (
              <li key={n} className="flex gap-5 items-start">
                <span className="text-3xl font-black text-[#1e2d47] leading-none select-none">{n}</span>
                <div>
                  <p className="font-semibold text-white mb-1">{title}</p>
                  <p className="text-[#94a3b8] text-sm leading-6">{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* CTA */}
        <section className="rounded-2xl border border-[#1e2d47] bg-[#0f172a] p-8 sm:p-10 space-y-5">
          <div className="flex items-center gap-3">
            <span className="inline-block w-1 h-8 rounded-full bg-[#E02020]" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Pojďme se potkat</h2>
          </div>
          <p className="text-lg leading-8 text-[#cbd5f5]">
            Věřím, že jako podnikatel s technologickým backgroundem přináším do realit dravost a moderní
            pohled, který trh v Ústeckém kraji potřebuje. Pokud hledáte někoho, kdo spojuje zázemí silné
            značky RE/MAX s nejmodernějšími technologiemi a osobním nasazením, jsem tu pro vás.
          </p>
          <p className="text-lg leading-8 text-[#cbd5f5]">
            Nabízím vám{" "}
            <strong className="text-white">bezplatný 15minutový rozhovor</strong>. Probereme vaši situaci
            a já vám dám konkrétní doporučení, jak postupovat, i kdybychom nakonec spolupráci nenavázali.
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

