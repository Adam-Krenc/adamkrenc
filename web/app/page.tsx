import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import WhyAdamSection from "@/components/sections/WhyAdamSection";
import SmartapkySection from "@/components/sections/SmartapkySection";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Adam Krenc | AI a automatizace pro firmy – CEO Smartapky.cz",
  description:
    "Adam Krenc, zakladatel a CEO Smartapky.cz. Pomáhám firmám růst pomocí AI a automatizace – AI chatboti, call agenti, propojení systémů a webové aplikace na míru.",
  alternates: {
    canonical: "https://www.adamkrenc.cz",
  },
  openGraph: {
    type: "website",
    title: "Adam Krenc | AI a automatizace pro firmy – CEO Smartapky.cz",
    description:
      "Adam Krenc, zakladatel a CEO Smartapky.cz. Pomáhám firmám růst pomocí AI a automatizace.",
    url: "https://www.adamkrenc.cz",
    images: [{ url: "/images/adam-founder.jpg", width: 1200, height: 630, alt: "Adam Krenc – CEO Smartapky.cz" }],
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhyAdamSection />
      <SmartapkySection />
      <ContactSection />
    </>
  );
}
