"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0f1e]">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #6B8FBF 1px, transparent 1px),
            linear-gradient(to bottom, #6B8FBF 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1e] via-[#0a0f1e]/90 to-[#0a0f1e]/40" />
      {/* Red accent glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#E02020]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-[#6B8FBF]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 lg:pt-0 lg:pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-center min-h-screen lg:py-24">
          {/* Text content */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#E02020]/30 bg-[#E02020]/10 text-[#E02020] text-xs font-semibold uppercase tracking-wider"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#E02020] animate-pulse" />
              RE/MAX Synergy · Ústecký kraj
            </motion.div>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              Moderní realitní<br />
              <span className="text-[#E02020]">makléř</span> pro<br />
              Ústecký kraj.
            </motion.h1>

            {/* Perex */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-[#94a3b8] text-base lg:text-lg leading-relaxed max-w-xl"
            >
              Propojuji svět realit s moderními technologiemi. Pod záštitou RE/MAX Synergy prodávám nemovitosti v Litvínově, Mostě, Teplicích a okolí – s přístupem, který ostatní makléři nemají.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="#kontakt"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-[#E02020] hover:bg-[#c01a1a] text-white font-semibold text-base transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-red-900/30"
              >
                Nezávazná konzultace zdarma
              </Link>
              <a
                href="https://www.remax-czech.cz/reality/nemovitosti-maklere/13616/adam-krenc/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border border-[#1e2d47] hover:border-[#6B8FBF] text-[#94a3b8] hover:text-white font-semibold text-base transition-all duration-200"
              >
                Zobrazit nabídky nemovitostí ↗
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex gap-8 pt-4 border-t border-[#1e2d47]"
            >
              {[
                { value: "RE/MAX", label: "Synergy" },
                { value: "9+", label: "lokalit v kraji" },
                { value: "24h", label: "odpověď" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-[#64748b] mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-72 sm:w-80 lg:w-[420px] xl:w-[480px]">
              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-3xl border border-[#1e2d47] opacity-50" />
              <div className="absolute -inset-8 rounded-3xl border border-[#1e2d47]/30 opacity-30" />

              {/* Photo container */}
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] shadow-2xl shadow-black/50">
                <Image
                  src="/images/adam-remax.png"
                  alt="Adam Krenc – Realitní makléř Ústecký kraj, RE/MAX Synergy"
                  fill
                  sizes="(max-width: 768px) 320px, (max-width: 1024px) 360px, 480px"
                  className="object-cover object-top"
                  priority
                />
                {/* Bottom gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#0a0f1e]/60 to-transparent" />
              </div>

              {/* Floating badge – RE/MAX */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.4 }}
                className="absolute -left-6 top-8 bg-[#141c2e] border border-[#1e2d47] rounded-xl px-4 py-3 shadow-xl"
              >
                <div className="text-xs text-[#94a3b8]">Člen sítě</div>
                <div className="text-sm font-bold text-[#E02020]">RE/MAX</div>
              </motion.div>

              {/* Floating badge – Tech */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.4 }}
                className="absolute -right-6 bottom-12 bg-[#141c2e] border border-[#1e2d47] rounded-xl px-4 py-3 shadow-xl"
              >
                <div className="text-xs text-[#94a3b8]">Také CEO</div>
                <div className="text-sm font-bold text-[#6B8FBF]">Smartapky.cz</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[#64748b] text-xs tracking-wider uppercase">Scroll</span>
        <div className="w-0.5 h-8 bg-gradient-to-b from-[#1e2d47] to-transparent" />
      </motion.div>
    </section>
  );
}
