"use client";

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
      {/* Blue accent glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#6B8FBF]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-[#6B8FBF]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 lg:pt-0 lg:pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen lg:py-24">
          {/* Text content */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#6B8FBF]/30 bg-[#6B8FBF]/10 text-[#6B8FBF] text-xs font-semibold uppercase tracking-wider"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#6B8FBF] animate-pulse" />
              Zakladatel Smartapky.cz · CEO
            </motion.div>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              Pomáhám firmám<br />
              růst pomocí{" "}
              <span className="text-[#6B8FBF]">AI</span> a<br />
              automatizace.
            </motion.h1>

            {/* Perex */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-[#94a3b8] text-base lg:text-lg leading-relaxed max-w-xl"
            >
              Jsem Adam Krenc, zakladatel{" "}
              <a
                href="https://smartapky.cz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6B8FBF] hover:text-white transition-colors"
              >
                Smartapky.cz
              </a>
              . Stavíme systémy, které firmám šetří desítky hodin měsíčně a z přehledu dat dělají konkurenční výhodu.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="https://www.smartapky.cz/book/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-[#6B8FBF] hover:bg-[#8aafd9] text-white font-semibold text-base transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-blue-900/30"
              >
                Domluvit úvodní call zdarma
              </a>
              <Link
                href="/smartapky"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border border-[#1e2d47] hover:border-[#6B8FBF] text-[#94a3b8] hover:text-white font-semibold text-base transition-all duration-200"
              >
                Co děláme ve Smartapky.cz ↓
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex gap-8 pt-4 border-t border-[#1e2d47]"
            >
              {[
                { value: "Smartapky.cz", label: "Zakladatel & CEO" },
                { value: "AI + Weby", label: "hlavní zaměření" },
                { value: "24h", label: "odpověď" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-base font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-[#64748b] mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Vimeo video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-lg">
              {/* Decorative rings */}
              <div className="absolute -inset-4 rounded-3xl border border-[#1e2d47] opacity-50" />
              <div className="absolute -inset-8 rounded-3xl border border-[#1e2d47]/30 opacity-30" />

              {/* Video container – 9:16 portrait */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50 bg-[#0a0f1e]"
                style={{ aspectRatio: "9/16", maxHeight: "70vh" }}
              >
                <iframe
                  src="https://player.vimeo.com/video/1188794286?badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0&transparent=0"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                  title="Adam Krenc – CEO Smartapky.cz"
                  className="absolute inset-0 w-full h-full"
                />
              </div>

              {/* Floating badge – Smartapky */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.4 }}
                className="absolute -left-6 top-8 bg-[#141c2e] border border-[#1e2d47] rounded-xl px-4 py-3 shadow-xl"
              >
                <div className="text-xs text-[#94a3b8]">Zakladatel</div>
                <div className="text-sm font-bold text-[#6B8FBF]">Smartapky.cz</div>
              </motion.div>

              {/* Floating badge – AI */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.4 }}
                className="absolute -right-6 bottom-12 bg-[#141c2e] border border-[#1e2d47] rounded-xl px-4 py-3 shadow-xl"
              >
                <div className="text-xs text-[#94a3b8]">Specializace</div>
                <div className="text-sm font-bold text-white">AI & Automatizace</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
