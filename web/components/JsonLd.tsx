export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://www.adamkrenc.cz/#person",
        name: "Adam Krenc",
        url: "https://www.adamkrenc.cz",
        image: "https://www.adamkrenc.cz/images/adam-founder.jpg",
        sameAs: [
          "https://www.instagram.com/adamkrenc/",
          "https://www.linkedin.com/in/adamkrenc/",
          "https://smartapky.cz",
          "https://najdinajemnika.cz",
        ],
        jobTitle: "Zakladatel",
        worksFor: [
          {
            "@type": "Organization",
            name: "Smartapky.cz",
            url: "https://smartapky.cz",
          },
          {
            "@type": "Organization",
            name: "Najdinájemníka.cz",
            url: "https://najdinajemnika.cz",
          },
        ],
        knowsAbout: [
          "AI automatizace",
          "Vývoj webových aplikací",
          "Umělá inteligence a LLM",
          "Trading a investování",
          "Prověřování nájemníků",
        ],
        address: {
          "@type": "PostalAddress",
          addressRegion: "Ústecký kraj",
          addressCountry: "CZ",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
