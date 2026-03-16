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

