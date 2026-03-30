export type BlogPost = {
  slug: string;
  title: string;
  perex: string;
  date: string;
  heroImage: string;
  heroAlt: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "investicni-hypoteky-litvinov-2026",
    title: "Nová pravidla investičních hypoték od dubna 2026 – co to znamená pro kupující v Litvínově?",
    perex:
      "ČNB od 1. dubna 2026 zpřísňuje podmínky pro investiční hypotéky. LTV max. 70 %, DTI max. 7×, DSTI max. 40 %. Pokud plánujete koupit investiční nemovitost v Litvínově, čas jednat je právě teď.",
    date: "2026-03-30",
    heroImage: "/images/litvinov-investicni-hypoteky-2026.png",
    heroAlt: "Litvínov – investiční nemovitosti a nová pravidla hypoték od dubna 2026",
  },
  {
    slug: "bezpecne-finale-garantni-fondy-dane-reklamace",
    title: "Bezpečné finále: Garanční fondy, daně a jak se vyhnout reklamaci po 5 letech",
    perex:
      "Podpis kupní smlouvy neznamená konec. Jak v roce 2026 bezpečně uzavřít prodej – od úschovy peněz přes pětiletou odpovědnost za skryté vady až po daňový časový test a digitální předání nemovitosti.",
    date: "2026-03-26",
    heroImage: "/images/prodej-nemovitosti-2026.jpeg",
    heroAlt: "Bezpečné finále prodeje nemovitosti – garanční fondy, daně a skryté vady 2026",
  },
  {
    slug: "aesthetic-engineering-ai-staging-2026",
    title: "Aesthetic Engineering: Jak AI a staging v roce 2026 zvyšují cenu o 15 %",
    perex:
      "Prodáváte emoci, ne metry čtvereční. V roce 2026 rozhoduje o ceně nemovitosti AI staging, neuroestetika a technický audit dřív, než kupující fyzicky vstoupí do dveří.",
    date: "2026-03-16",
    heroImage: "/images/prodej-nemovitosti-2026.jpeg",
    heroAlt: "Aesthetic Engineering – AI staging a neuroestetika v realitách 2026",
  },
  {
    slug: "prodej-nemovitosti-2026",
    title: "Jak na prodej nemovitosti v roce 2026: Strategie, načasování a konec cenových odhadů od oka",
    perex:
      "Prodat nemovitost v roce 2026 je sofistikovaná operace na pomezí práva, financí a datové analýzy. Přečtěte si, jak načasovat prodej, projít právním auditem, správně ocenit nemovitost a sestavit smluvně neprůstřelný obchod.",
    date: "2026-03-09",
    heroImage: "/images/prodej-nemovitosti-2026.jpeg",
    heroAlt: "Prodej nemovitosti 2026 – strategie, načasování a cenotvorba",
  },
  {
    slug: "realitni-trh-v-ere-ai",
    title: "Realitní trh v éře AI: Proč sázím na data, efektivitu a lidský přístup",
    perex:
      "Jako realitní makléř v síti RE/MAX Synergy přináším do realit moderní technologie, AI a datový přístup, aby se prodej vaší nemovitosti stal promyšleným a maximálně efektivním procesem.",
    date: "2025-03-01",
    heroImage: "/images/adam-remax.png",
    heroAlt: "Adam Krenc – Realitní makléř Ústecký kraj, RE/MAX Synergy",
  },
];

export function getAllPosts() {
  return blogPosts;
}

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug) ?? null;
}

