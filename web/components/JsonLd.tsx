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
        description:
          "Adam Krenc se dlouhodobě věnuje tradingu, se kterým začal kolem patnácti let. Působil v komunitě Golden Pocket, kde vedl vlastní forexovou sekci. Dnes pracuje v týmu na algoritmickém trading projektu, o kterém kvůli NDA nejsou veřejné detaily. Je také zakladatelem projektů Smartapky.cz a Najdinájemníka.cz.",
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
          "Algoritmický trading",
          "Finanční trhy a trading",
          "Forex",
          "AI automatizace",
          "Vývoj webových aplikací",
          "Umělá inteligence a LLM",
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
