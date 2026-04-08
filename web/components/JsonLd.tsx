export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://www.adamkrenc.cz/#person",
        name: "Adam Krenc",
        url: "https://www.adamkrenc.cz",
        image: "https://www.adamkrenc.cz/images/adam-remax.png",
        sameAs: [
          "https://www.instagram.com/adamkrenc/",
          "https://www.linkedin.com/in/adamkrenc/",
          "https://youtube.com/@smartapky",
          "https://smartapky.cz",
        ],
        jobTitle: "Realitní makléř, CEO",
        worksFor: [
          {
            "@type": "Organization",
            name: "RE/MAX Synergy",
            url: "https://www.remax-czech.cz",
          },
          {
            "@type": "Organization",
            name: "Smartapky.cz",
            url: "https://smartapky.cz",
          },
        ],
        knowsAbout: [
          "Prodej nemovitostí",
          "Realitní trh Ústecký kraj",
          "AI automatizace",
          "Digitální marketing",
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.adamkrenc.cz/#business",
        name: "Adam Krenc – Realitní makléř",
        url: "https://www.adamkrenc.cz",
        image: "https://www.adamkrenc.cz/images/adam-remax.png",
        logo: "https://www.adamkrenc.cz/images/adam-remax.png",
        description:
          "Moderní realitní makléř Adam Krenc působící v Litvínově, Mostě, Teplicích a celém Ústeckém kraji pod záštitou RE/MAX Synergy.",
        telephone: "+420605822363",
        email: "adam.krenc@remax-czech.cz",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Krupská 30/26",
          addressLocality: "Teplice",
          postalCode: "41501",
          addressRegion: "Ústecký kraj",
          addressCountry: "CZ",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 50.6404,
          longitude: 13.8257,
        },
        areaServed: [
          "Litvínov",
          "Most",
          "Teplice",
          "Chomutov",
          "Ústí nad Labem",
          "Louny",
          "Žatec",
          "Děčín",
          "Kadaň",
        ],
        priceRange: "$$",
        openingHours: "Mo-Fr 09:00-18:00",
        sameAs: [
          "https://www.instagram.com/adamkrenc/",
          "https://www.linkedin.com/in/adamkrenc/",
        ],
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
