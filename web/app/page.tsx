import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import WhyAdamSection from "@/components/sections/WhyAdamSection";
import LocalitiesSection from "@/components/sections/LocalitiesSection";
import SmartapkySection from "@/components/sections/SmartapkySection";
import PropertiesSection from "@/components/sections/PropertiesSection";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Adam Krenc | Realitní makléř Litvínov, Most, Teplice – Ústecký kraj",
  description:
    "Moderní realitní makléř Adam Krenc působící v Litvínově, Mostě, Teplicích a celém Ústeckém kraji. Prodej a koupě nemovitostí pod záštitou RE/MAX Synergy.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhyAdamSection />
      <LocalitiesSection />
      <SmartapkySection />
      <PropertiesSection />
      <ContactSection />
    </>
  );
}
