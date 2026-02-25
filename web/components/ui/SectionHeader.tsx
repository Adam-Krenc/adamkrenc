interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  accentColor?: "red" | "blue";
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
  accentColor = "red",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";
  const accentClass = accentColor === "red" ? "bg-[#E02020]" : "bg-[#6B8FBF]";
  const eyebrowColor = accentColor === "red" ? "text-[#E02020]" : "text-[#6B8FBF]";

  return (
    <div className={`flex flex-col gap-3 mb-12 ${alignClass}`}>
      {eyebrow && (
        <div className="flex items-center gap-2">
          <span className={`w-8 h-0.5 ${accentClass}`} />
          <span className={`text-xs font-semibold uppercase tracking-widest ${eyebrowColor}`}>
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">{title}</h2>
      {subtitle && (
        <p className="text-[#94a3b8] text-base lg:text-lg leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
