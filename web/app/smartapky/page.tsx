import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Smartapky.cz – AI integrace a automatizace | Adam Krenc",
  description:
    "Smartapky.cz – AI chatboti, call agenti, automatizace procesů a webové aplikace na míru. CEO Adam Krenc. Digitalizujte a zrychlete růst své firmy.",
  alternates: {
    canonical: "https://www.adamkrenc.cz/smartapky",
  },
  openGraph: {
    type: "website",
    title: "Smartapky.cz – AI integrace a automatizace",
    description:
      "AI chatboti, call agenti, automatizace a vývoj webových aplikací. Smartapky.cz – CEO Adam Krenc.",
    url: "https://www.adamkrenc.cz/smartapky",
    images: [{ url: "/images/smartapky-banner.jpeg" }],
  },
};

const services = [
  {
    icon: "⚙️",
    title: "Automatizace procesů",
    desc: "Propojíme vaše nástroje (CRM, email, ERP) a eliminujeme manuální práci pomocí AI a vlastního programování. Děláme i CRM a komplexní webové systémy.",
    result: "Úspora 10–40 h/týdně",
    forWhom: "Malé a střední firmy",
  },
  {
    icon: "🤖",
    title: "AI Chatboti",
    desc: "Automatizujte zákaznickou podporu, lead generaci nebo interní procesy. 24/7 dostupnost bez přidaných nákladů.",
    result: "Průměrně -60 % nákladů na support",
    forWhom: "E-shopy, B2B firmy, služby",
  },
  {
    icon: "📞",
    title: "AI Call Agenti",
    desc: "Inteligentní hlasový agent, který volá, přijímá hovory, kvalifikuje leady a objednává schůzky.",
    result: "Automatizace inbound/outbound",
    forWhom: "Realitní kanceláře, pojišťovny, HR",
  },
  {
    icon: "💻",
    title: "Webové aplikace",
    desc: "Zákaznické portály, interní dashboardy, booking systémy. Vývoj na míru s moderními technologiemi.",
    result: "Plně custom řešení",
    forWhom: "Startupy, scale-upy, korporace",
  },
];

const processSteps = [
  { num: "01", title: "Audit a discovery", desc: "Zmapujeme vaše procesy, bolesti a příležitosti. Výstup: jasný přehled kde AI/automatizace přinese nejvyšší ROI." },
  { num: "02", title: "Návrh řešení", desc: "Připravíme konkrétní návrh včetně technologického stacku, časového plánu a rozpočtu." },
  { num: "03", title: "MVP a pilotní provoz", desc: "Rychle doručíme funkční prototyp. Testujeme v reálném provozu a iterujeme na základě dat." },
  { num: "04", title: "Nasazení a integrace", desc: "Plné nasazení do produkce, integrace s vašimi stávajícími systémy." },
  { num: "05", title: "Optimalizace a podpora", desc: "Dlouhodobé partnerství – monitorujeme výkon, optimalizujeme a přidáváme nové funkce." },
];

const scenarios = [
  {
    title: "Inbound lead kvalifikace",
    desc: "Chatbot nebo call agent automaticky kvalifikuje příchozí leady, zeptá se na klíčové otázky a předá jen ty vhodné vašemu obchodnímu týmu.",
    industry: "Reality, pojišťovny, finance",
  },
  {
    title: "Automatické follow-upy",
    desc: "Po první konzultaci nebo prohlídce systém automaticky rozesílá follow-up zprávy, připomínky a nabídky ve správný čas.",
    industry: "E-commerce, B2B prodej",
  },
  {
    title: "Objednávání schůzek",
    desc: "AI agent přijímá hovory, zjistí zájem klienta a rovnou zarezervuje schůzku do kalendáře bez lidského zásahu.",
    industry: "Kliniky, konzultanti, servisy",
  },
  {
    title: "Zpracování objednávek",
    desc: "Automatické zpracování objednávek, fakturace a notifikace zákazníkům – bez manuálního zásahu.",
    industry: "E-shopy, výroba, logistika",
  },
];

export default function SmartapkyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Banner as background */}
        <div className="absolute inset-0">
          <Image
            src="/images/smartapky-banner.jpeg"
            alt="Smartapky.cz – AI integrace"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-[#0a0f1e]/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1e] via-[#0a0f1e]/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center gap-10 lg:gap-16">
            <div className="max-w-xl space-y-8 text-left min-w-0">
              <span className="text-[#6B8FBF] text-sm font-semibold">smartapky.cz</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Digitalizujte.<br />
                Automatizujte.<br />
                <span className="text-[#6B8FBF]">Zrychlete růst.</span>
              </h1>
              <p className="text-[#94a3b8] text-base lg:text-lg leading-relaxed">
                Spolehlivé AI integrace a vývoj softwaru na míru vaší firmě. Chatboti, call agenti, automatizace a webové aplikace – od týmu, který to dělá každý den pro sebe.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://www.smartapky.cz/#kontakt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-[#6B8FBF] hover:bg-[#8aafd9] text-white font-semibold text-base transition-all hover:scale-105 hover:shadow-xl hover:shadow-blue-900/30"
                >
                  Domluvit 15min call ↗
                </a>
                <Link
                  href="#sluzby"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-[#1e2d47] hover:border-[#6B8FBF] text-[#94a3b8] hover:text-white font-semibold text-base transition-all"
                >
                  Zobrazit služby ↓
                </Link>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end lg:pl-4">
              <Image
                src="/images/header_logo.png"
                alt="Smartapky.cz logo"
                width={340}
                height={340}
                className="rounded-xl w-64 h-64 sm:w-80 sm:h-80 lg:w-[340px] lg:h-[340px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Služby */}
      <SectionWrapper className="bg-[#0a0f1e]" id="sluzby">
        <SectionHeader
          eyebrow="Služby"
          title="Co dodáváme."
          subtitle="Konkrétní řešení, konkrétní výsledky."
          accentColor="blue"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl bg-[#141c2e] border border-[#1e2d47] p-8 hover:border-[#6B8FBF]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="text-3xl">{s.icon}</div>
                <div>
                  <h3 className="text-white font-bold text-lg">{s.title}</h3>
                  <span className="text-[#64748b] text-xs">{s.forWhom}</span>
                </div>
              </div>
              <p className="text-[#94a3b8] text-sm leading-relaxed mb-4">{s.desc}</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-[#6B8FBF]/10 border border-[#6B8FBF]/20 text-[#6B8FBF] text-xs font-medium">
                  {s.result}
                </span>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Jak vypadá spolupráce */}
      <SectionWrapper className="bg-[#060c18]">
        <SectionHeader
          eyebrow="Spolupráce"
          title="Jak spolupráce vypadá."
          subtitle="Strukturovaný proces, žádné překvapení."
          accentColor="blue"
        />

        <div className="space-y-4">
          {processSteps.map((step, i) => (
            <div
              key={step.num}
              className="flex items-start gap-6 rounded-2xl bg-[#141c2e] border border-[#1e2d47] p-6 hover:border-[#6B8FBF]/30 transition-colors"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#6B8FBF]/10 border border-[#6B8FBF]/30 flex items-center justify-center">
                <span className="text-[#6B8FBF] text-xs font-bold">{step.num}</span>
              </div>
              <div>
                <h3 className="text-white font-bold mb-1">{step.title}</h3>
                <p className="text-[#94a3b8] text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Ukázkové scénáře */}
      <SectionWrapper className="bg-[#0a0f1e]">
        <SectionHeader
          eyebrow="Use cases"
          title="Ukázkové scénáře nasazení."
          subtitle="Reálné příklady, jak naše řešení fungují v praxi."
          accentColor="blue"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {scenarios.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl bg-[#141c2e] border border-[#1e2d47] p-6 hover:border-[#6B8FBF]/30 transition-colors"
            >
              <h3 className="text-white font-bold mb-2">{s.title}</h3>
              <p className="text-[#94a3b8] text-sm leading-relaxed mb-3">{s.desc}</p>
              <span className="text-xs text-[#6B8FBF] font-medium bg-[#6B8FBF]/10 px-3 py-1 rounded-full">
                {s.industry}
              </span>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="bg-[#060c18]">
        <div className="rounded-2xl bg-gradient-to-br from-[#141c2e] to-[#0a1628] border border-[#6B8FBF]/20 p-10 lg:p-16 text-center">
          <div className="flex justify-center mb-6">
            <div className="rounded-2xl bg-white p-1 ring-1 ring-white/20 shadow-xl">
              <Image
                src="/images/header_logo.png"
                alt="Smartapky.cz"
                width={80}
                height={80}
                className="rounded-xl"
              />
            </div>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Připraveni automatizovat?
          </h2>
          <p className="text-[#94a3b8] text-base mb-8 max-w-xl mx-auto">
            Domluvme 15minutový discovery call. Zjistíme, jestli a jak vám můžeme pomoct – bez závazků a bez zbytečného obchodního tlaku.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="https://www.smartapky.cz/#kontakt" variant="blue" external size="lg">
              Domluvit 15min call ↗
            </Button>
            <Button href="https://smartapky.cz" variant="outline" external size="lg">
              Více na Smartapky.cz ↗
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
