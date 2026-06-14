import type { Metadata } from "next";
import { Space_Grotesk, Hanken_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Adam Krenc | Zakladatel a stavitel AI produktů",
  description:
    "Adam Krenc. Stavím AI produkty a učím se děláním. Zakladatel Smartapky.cz a Najdinájemníka.cz. Začínal jsem u grafů a tradingu, dnes stavím nástroje, co firmám berou rutinu.",
  metadataBase: new URL("https://www.adamkrenc.cz"),
  alternates: {
    canonical: "https://www.adamkrenc.cz",
  },
  authors: [{ name: "Adam Krenc" }],
  creator: "Adam Krenc",
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: "https://www.adamkrenc.cz",
    siteName: "Adam Krenc",
    title: "Adam Krenc | Zakladatel a stavitel AI produktů",
    description:
      "Stavím AI produkty a učím se děláním. Zakladatel Smartapky.cz a Najdinájemníka.cz.",
    images: [
      {
        url: "/images/adam-founder.jpg",
        width: 1200,
        height: 630,
        alt: "Adam Krenc",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adam Krenc | Zakladatel a stavitel AI produktů",
    description:
      "Stavím AI produkty a učím se děláním. Zakladatel Smartapky.cz a Najdinájemníka.cz.",
    images: ["/images/adam-founder.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "Jr7kMgw7DNZrpool84r7WThevCBXPSxLac2FK9UIgjw",
    other: {
      "seznam-wmt": "MzxFIjqj0ULBzrPdsRirUSznt8yqhvli",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="cs"
      data-direction="vzdusny"
      data-anim="mid"
      className={`${spaceGrotesk.variable} ${hanken.variable} ${spaceMono.variable}`}
    >
      <body>
        {/* Aktivuje skrytý výchozí stav reveal animací jen když běží JS
            (bez JS / pro crawlery zůstává obsah viditelný). Běží před vykreslením,
            takže nedojde k probliknutí. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(!matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.classList.add('reveal-on')}}catch(e){}",
          }}
        />
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
