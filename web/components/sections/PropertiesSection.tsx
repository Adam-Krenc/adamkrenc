import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";

export default function PropertiesSection() {
  return (
    <SectionWrapper className="bg-[#060c18]" id="nemovitosti">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <SectionHeader
          eyebrow="Aktuální nabídka"
          title="Nemovitosti v nabídce."
          subtitle="Prohlédněte si moje aktuální nabídky na portálu RE/MAX."
        />
        <div className="shrink-0 pb-12">
          <Button
            href="https://www.remax-czech.cz/reality/nemovitosti-maklere/13616/adam-krenc/"
            variant="outline"
            external
            size="lg"
          >
            Zobrazit všechny nabídky ↗
          </Button>
        </div>
      </div>

      {/* Placeholder card pro budoucí API */}
      <div className="rounded-2xl border border-dashed border-[#1e2d47] bg-[#141c2e]/50 p-12 text-center">
        <div className="text-4xl mb-4">🏠</div>
        <h3 className="text-white font-semibold mb-2">Aktuální nabídky na RE/MAX</h3>
        <p className="text-[#64748b] text-sm mb-6 max-w-md mx-auto">
          Kompletní přehled mých nemovitostí najdete na profilu RE/MAX. Dynamické načítání přímo z API připravujeme.
        </p>
        <Button
          href="https://www.remax-czech.cz/reality/nemovitosti-maklere/13616/adam-krenc/"
          variant="red"
          external
          size="md"
        >
          Otevřít RE/MAX profil ↗
        </Button>
      </div>
    </SectionWrapper>
  );
}
