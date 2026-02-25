import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/JsonLd";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Adam Krenc | Realitní makléř Litvínov, Most, Teplice – Ústecký kraj",
  description:
    "Moderní realitní makléř Adam Krenc působící v Litvínově, Mostě, Teplicích a celém Ústeckém kraji. Prodej a koupě nemovitostí pod záštitou RE/MAX Synergy.",
  keywords: [
    "realitní makléř Litvínov",
    "makléř Most",
    "makléř Teplice",
    "makléř Chomutov",
    "prodej bytu Litvínov",
    "prodej domu Most",
    "RE/MAX Litvínov",
    "realitní kancelář Ústecký kraj",
  ],
  metadataBase: new URL("https://adamkrenc.cz"),
  authors: [{ name: "Adam Krenc" }],
  creator: "Adam Krenc",
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: "https://adamkrenc.cz",
    siteName: "Adam Krenc",
    title: "Adam Krenc | Realitní makléř Litvínov, Most, Teplice – Ústecký kraj",
    description:
      "Moderní realitní makléř Adam Krenc působící v Litvínově, Mostě, Teplicích a celém Ústeckém kraji. Prodej a koupě nemovitostí pod záštitou RE/MAX Synergy.",
    images: [
      {
        url: "/images/adam-remax.png",
        width: 1200,
        height: 630,
        alt: "Adam Krenc – Realitní makléř Ústecký kraj",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adam Krenc | Realitní makléř Litvínov, Most, Teplice",
    description:
      "Moderní realitní makléř Adam Krenc v Ústeckém kraji. RE/MAX Synergy.",
    images: ["/images/adam-remax.png"],
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
    google: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body className={`${poppins.variable} antialiased`}>
        <JsonLd />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
