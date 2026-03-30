import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.adamkrenc.cz";

  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-03-16"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/reality`,
      lastModified: new Date("2026-03-16"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/reality/litvinov`,
      lastModified: new Date("2026-03-16"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/reality/most`,
      lastModified: new Date("2026-03-16"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/reality/teplice`,
      lastModified: new Date("2026-03-16"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/reality/chomutov`,
      lastModified: new Date("2026-03-16"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/reality/usti-nad-labem`,
      lastModified: new Date("2026-03-16"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/smartapky`,
      lastModified: new Date("2026-03-16"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/kontakt`,
      lastModified: new Date("2026-03-16"),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date("2026-03-16"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/investicni-hypoteky-litvinov-2026`,
      lastModified: new Date("2026-03-30"),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/blog/bezpecne-finale-garantni-fondy-dane-reklamace`,
      lastModified: new Date("2026-03-26"),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/blog/aesthetic-engineering-ai-staging-2026`,
      lastModified: new Date("2026-03-16"),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/blog/prodej-nemovitosti-2026`,
      lastModified: new Date("2026-03-09"),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/blog/realitni-trh-v-ere-ai`,
      lastModified: new Date("2025-03-01"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
