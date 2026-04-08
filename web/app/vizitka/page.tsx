import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import VCardButton from "./components/VCardButton";

export const metadata: Metadata = {
  title: "Adam Krenc | Realitní makléř RE/MAX",
  description:
    "Digitální vizitka Adama Krence, realitního makléře RE/MAX Synergy v Teplicích.",
  openGraph: {
    title: "Adam Krenc | Realitní makléř RE/MAX",
    description:
      "Digitální vizitka Adama Krence, realitního makléře RE/MAX Synergy v Teplicích.",
    images: [{ url: "/images/adam-remax.png" }],
    url: "https://www.adamkrenc.cz/vizitka",
  },
  alternates: {
    canonical: "https://www.adamkrenc.cz/vizitka",
  },
};

export default function VizitkaPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#000814] via-[#001944] to-black text-white flex items-center justify-center px-4 py-8">
      <div className="fixed inset-0 pointer-events-none opacity-60">
        <div className="absolute -inset-[20%] bg-[radial-gradient(circle_at_top,_#003DA5_0,_transparent_55%),radial-gradient(circle_at_bottom,_#D0021B_0,_transparent_55%)] animate-pulse" />
      </div>

      <div className="relative z-10 w-full max-w-sm">
        <section className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl shadow-2xl shadow-black/40 px-6 py-8 space-y-6 transition-transform duration-300">
          <div className="flex flex-col items-center text-center space-y-4">
          <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white/10 shadow-xl shadow-black/50">
  <Image
    src="/images/akrenc.png"
    alt="Adam Krenc – realitní makléř RE/MAX"
    fill
    className="object-cover object-top"
    priority
  />
</div>
            <div>
              <h1 className="text-2xl font-semibold tracking-tight">
                Adam Krenc
              </h1>
              <p className="text-sm text-white/80 mt-1">
                Realitní makléř | RE/MAX Synergy
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3">
            <IconLink
              href="tel:+420605822363"
              label="Zavolat"
              ariaLabel="Zavolat Adamovi Krencovi"
            >
              <PhoneIcon />
            </IconLink>
            <IconLink
              href="mailto:adam.krenc@remax-czech.cz"
              label="Email"
              ariaLabel="Napsat email Adamovi Krencovi"
            >
              <MailIcon />
            </IconLink>
            <IconLink
              href="https://www.adamkrenc.cz"
              label="Web"
              ariaLabel="Otevřít web adamkrenc.cz"
              external
            >
              <GlobeIcon />
            </IconLink>
            <IconLink
              href="https://www.linkedin.com/in/adamkrenc/"
              label="LinkedIn"
              ariaLabel="Otevřít LinkedIn profil"
              external
            >
              <LinkedInIcon />
            </IconLink>
            <IconLink
              href="https://www.instagram.com/adamkrenc/"
              label="Instagram"
              ariaLabel="Otevřít Instagram profil"
              external
            >
              <InstagramIcon />
            </IconLink>
          </div>

          <div className="space-y-2">
            <VCardButton />
            <p className="text-xs text-white/70 text-center">
              Po kliknutí se kontakt uloží přímo do vašeho telefonu.
            </p>
          </div>

          <div className="space-y-3 text-center">
            <p className="text-sm text-white/80">
              Moderní makléř s podporou umělé inteligence.
            </p>
            <div className="text-xs text-white/60 space-y-1">
              <p>
                Zakladatel{" "}
                <Link
                  href="https://smartapky.cz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-[#6B8FBF]/60 hover:decoration-[#6B8FBF] text-[#6B8FBF]"
                >
                  smartapky.cz
                </Link>{" "}
                – AI automatizace pro firmy a komplexní webové systémy.
              </p>
              <Link
                href="https://smartapky.cz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-3 py-1.5 rounded-full border border-[#6B8FBF]/40 text-[11px] text-[#cbd5f5] bg-[#0b1220]/60 hover:bg-[#182235] hover:border-[#6B8FBF] transition-colors"
              >
                Více o AI a automatizaci na smartapky.cz ↗
              </Link>
            </div>
          </div>

          <div className="pt-2 border-t border-white/10 text-center space-y-1">
            <p className="text-xs text-white/70">
              RE/MAX Synergy • Krupská 30, Teplice
            </p>
            <p className="text-[11px] text-white/40">
              adam.krenc@remax-czech.cz • +420 605 822 363
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

type IconLinkProps = {
  href: string;
  label: string;
  ariaLabel?: string;
  children: React.ReactNode;
  external?: boolean;
};

function IconLink({ href, label, ariaLabel, children, external }: IconLinkProps) {
  const commonProps = {
    className:
      "group flex flex-col items-center gap-1 text-xs text-white/70 hover:text-white transition-colors",
  };

  const content = (
    <>
      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/15 group-hover:border-[#D0021B] group-hover:bg-[#D0021B]/20 transition-colors">
        {children}
      </span>
      <span>{label}</span>
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel ?? label}
        {...commonProps}
      >
        {content}
      </a>
    );
  }

  return (
    <a href={href} aria-label={ariaLabel ?? label} {...commonProps}>
      {content}
    </a>
  );
}

function PhoneIcon() {
  return (
    <svg
      className="w-5 h-5"
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
    >
      <path
        d="M6.75 4.5A1.5 1.5 0 0 1 8.25 3h1.5c.69 0 1.28.47 1.45 1.14l.72 2.9a1.5 1.5 0 0 1-.43 1.46l-1.03.96a.75.75 0 0 0-.16.88 11.3 11.3 0 0 0 4.43 4.43.75.75 0 0 0 .88-.16l.96-1.03a1.5 1.5 0 0 1 1.46-.43l2.9.72A1.5 1.5 0 0 1 21 15.75v1.5A1.5 1.5 0 0 1 19.5 18 15.75 15.75 0 0 1 4.5 3 1.5 1.5 0 0 1 6.75 4.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      className="w-5 h-5"
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
    >
      <path
        d="M4 6.75A2.75 2.75 0 0 1 6.75 4h10.5A2.75 2.75 0 0 1 20 6.75v10.5A2.75 2.75 0 0 1 17.25 20H6.75A2.75 2.75 0 0 1 4 17.25V6.75Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="m5.5 7.5 5.4 4.05a2.25 2.25 0 0 0 2.7 0L19 7.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg
      className="w-5 h-5"
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
    >
      <circle
        cx="12"
        cy="12"
        r="8"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="3"
        ry="8"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M4 12h16M12 4v16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      className="w-5 h-5"
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
    >
      <path
        d="M6.5 6.75A1.75 1.75 0 1 0 6.5 3.25a1.75 1.75 0 0 0 0 3.5Z"
        fill="currentColor"
      />
      <path
        d="M5 9h3v9H5zM10.5 9H13v1.2c.4-.75 1.2-1.45 2.55-1.45 2.04 0 3.45 1.33 3.45 3.9V18h-3v-4.7c0-1.2-.55-1.95-1.6-1.95-1.02 0-1.7.7-1.7 2.02V18h-3V9Z"
        fill="currentColor"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      className="w-5 h-5"
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
    >
      <rect
        x="4"
        y="4"
        width="16"
        height="16"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17" cy="7" r="1" fill="currentColor" />
    </svg>
  );
}

