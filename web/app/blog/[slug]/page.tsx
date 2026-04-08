import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

type BlogPostPageProps = {
  params: { slug: string };
};

const BASE_URL = "https://www.adamkrenc.cz";

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({
  params,
}: BlogPostPageProps): Metadata | undefined {
  const post = getPostBySlug(params.slug);

  if (!post) return;

  const title = `${post.title} | Blog | Adam Krenc`;
  const canonicalUrl = `${BASE_URL}/blog/${post.slug}`;

  return {
    title,
    description: post.perex,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "article",
      title,
      description: post.perex,
      url: canonicalUrl,
      images: [
        {
          url: post.heroImage,
          width: 1200,
          height: 630,
          alt: post.heroAlt,
        },
      ],
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const canonicalUrl = `${BASE_URL}/blog/${post.slug}`;
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.perex,
    image: `${BASE_URL}${post.heroImage}`,
    datePublished: post.date,
    dateModified: post.date,
    url: canonicalUrl,
    author: {
      "@type": "Person",
      "@id": `${BASE_URL}/#person`,
      name: "Adam Krenc",
    },
    publisher: {
      "@type": "Person",
      "@id": `${BASE_URL}/#person`,
      name: "Adam Krenc",
    },
    inLanguage: "cs-CZ",
    mainEntityOfPage: canonicalUrl,
  };

  return (
    <article className="min-h-screen bg-[#0a0f1e] pt-24 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <header className="relative border-b border-[#1e2d47] bg-[#020617]/60">
        <div className="absolute inset-0">
          <Image
            src={post.heroImage}
            alt={post.heroAlt}
            fill
            priority
            className="object-cover object-top opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/85 to-[#020617]/70" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#6B8FBF] mb-3">
            Blog ·{" "}
            {new Date(post.date).toLocaleDateString("cs-CZ", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })}
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {post.title}
          </h1>
          <p className="text-base lg:text-lg text-[#cbd5f5] max-w-2xl">
            {post.perex}
          </p>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="prose prose-invert prose-red max-w-none prose-headings:text-white prose-p:text-[#cbd5f5] prose-li:text-[#cbd5f5] prose-strong:text-white prose-a:text-[#E02020]">
          <p>
            Ahoj, jmenuji se <strong>Adam Krenc</strong>. Jako realitní makléř
            v síti <strong>RE/MAX Synergy</strong> se specializuji na prodej a
            koupi nemovitostí v Ústeckém kraji. Moje cesta do světa realit
            nebyla náhodná – přišel jsem s vizí modernizovat proces, který je
            pro většinu lidí jedním z nejdůležitějších životních kroků.
          </p>
          <p>
            Mým cílem je, abyste svou nemovitost prodali rychle, za nejvyšší
            možnou cenu a s pocitem, že o všechno technické a administrativní
            je postaráno s digitální přesností.
          </p>

          <h2>Od AI automatizací k moderním realitám</h2>
          <p>
            Kromě realit vedu technologickou společnost{" "}
            <strong>Smartapky.cz</strong>. Pomáháme středním firmám, které
            chtějí <strong>škálovat svůj růst a zefektivnit procesy</strong>{" "}
            pomocí AI automatizací. Možná se ptáte, jak to souvisí s prodejem
            vašeho bytu nebo domu? <strong>Zásadně.</strong>
          </p>
          <p>
            Díky zkušenostem z technologického byznysu přináším do realit
            nástroje, které na trhu nejsou běžné:
          </p>
          <ul>
            <li>
              <strong>Data-driven rozhodování:</strong> Neodhaduji cenu
              pocitově. Používám pokročilé analytické nástroje k přesnému
              ocenění nemovitosti na základě reálných tržních dat.
            </li>
            <li>
              <strong>AI Marketing:</strong> Vaši nemovitost neprodávám jen na
              realitních portálech. Využívám algoritmy pro přesné cílení na
              sociálních sítích a LinkedInu, aby se nabídka dostala k těm
              správným kupcům.
            </li>
            <li>
              <strong>Maximální efektivita:</strong> Systémy, které stavím v
              technologiích, aplikuji i na své procesy v RE/MAXu. Méně zbytečné
              administrativy znamená více času na strategii prodeje vaší
              nemovitosti.
            </li>
          </ul>

          <h2>Energie, která se nezastaví</h2>
          <p>
            Moje pracovní nasazení a disciplína pramení z vášně pro sport.
            Ročně najedu tisíce kilometrů na kole a stovky naběhám v horách –
            tahle vytrvalost se přímo propisuje do mé práce.{" "}
            <strong>
              Když se do prodeje vaší nemovitosti zakousnu, nepustím, dokud
              není hotovo.
            </strong>
          </p>
          <p>
            Miluji Ústecký kraj. Znám Ústí, Most i Teplice nejen z mapy, ale i
            z pohledu na kole nebo v běžeckých botách. Rozumím specifikům
            zdejších lokalit, občanské vybavenosti i investičnímu potenciálu
            našeho regionu.
          </p>

          <h2>Jak vypadá spolupráce se mnou?</h2>
          <p>
            Zakládám si na absolutní <strong>transparentnosti a férovosti</strong>.
            Žádné skryté kličky nebo mlžení.
          </p>
          <ol>
            <li>
              <strong>Důkladná příprava:</strong> Provádím audit dokumentace a
              identifikuji skryté vady, abychom předešli budoucím problémům.
            </li>
            <li>
              <strong>Špičková prezentace:</strong> Využívám profesionální
              marketing, virtuální prohlídky a moderní vizuální styl, který
              vaši nemovitost odliší od stovek ostatních.
            </li>
            <li>
              <strong>Jasná komunikace:</strong> Každý krok procesu vám
              vysvětlím srozumitelně. Moje tech pozadí mě naučilo, že nejlepší
              systém je ten, kterému všichni rozumí.
            </li>
          </ol>

          <h2>Pojďme se potkat</h2>
          <p>
            Věřím, že jako podnikatel s technologickým backgroundem přináším do
            realit dravost a moderní pohled, který trh v Ústeckém kraji
            potřebuje. Pokud hledáte někoho, kdo spojuje zázemí silné značky
            RE/MAX s nejmodernějšími technologiemi a osobním nasazením, jsem tu
            pro vás.
          </p>
          <p>
            <strong>Nabízím vám bezplatný 15minutový rozhovor.</strong> Probereme
            vaši situaci a já vám dám konkrétní doporučení, jak postupovat, i
            kdybychom nakonec spolupráci nenavázali.
          </p>

          <p>
            Těším se na naše společné výsledky!
            <br />
            <strong>Adam Krenc</strong>
            <br />
            <em>Realitní makléř &amp; CEO Smartapky.cz</em>
          </p>
        </div>
      </div>
    </article>
  );
}

