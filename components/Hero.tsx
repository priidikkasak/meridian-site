"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex flex-col overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(129,140,248,0.08) 0%, transparent 70%)" }} />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(34,211,238,0.06) 0%, transparent 70%)" }} />

      {/* Grid */}
      <div className="grid-bg" />
      <div className="scanlines" />

      {/* Nav */}
      <nav className="relative z-10 flex items-center justify-between px-6 md:px-12 lg:px-16 pt-7">
        <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}>
          <span className="font-[var(--font-space-grotesk)] text-[#E8E8F0] text-sm font-semibold tracking-[0.18em] uppercase">
            Meridian
          </span>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}>
          <a href="#apply"
            className="font-[var(--font-dm-mono)] text-xs tracking-[0.2em] uppercase px-4 py-2 rounded-full border border-[#818CF8]/30 text-[#818CF8] hover:bg-[#818CF8]/10 transition-colors duration-200">
            Apply
          </a>
        </motion.div>
      </nav>

      {/* Hero content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-16 py-16">
        <motion.div variants={stagger} initial="hidden" animate="visible" className="max-w-4xl">

          {/* Eyebrow pill */}
          <motion.div variants={fadeUp} className="mb-7">
            <span className="inline-flex items-center gap-2 font-[var(--font-dm-mono)] text-[11px] tracking-[0.25em] uppercase
              px-3 py-1.5 rounded-full border border-[#818CF8]/25 text-[#818CF8] bg-[#818CF8]/8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE] animate-pulse" />
              B2B Advisory
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 variants={fadeUp}
            className="font-[var(--font-space-grotesk)] font-bold leading-[1.0] mb-5 tracking-tight"
            style={{ fontSize: "clamp(2.6rem, 7.5vw, 7rem)" }}>
            We don&apos;t pitch.{" "}
            <span className="grad-text">We already know.</span>
          </motion.h1>

          {/* Sub */}
          <motion.p variants={fadeUp}
            className="font-[var(--font-dm-mono)] text-[#3F3F52] text-sm leading-relaxed max-w-sm">
            Most consultants sell services.
            <br />We sell clarity. There&apos;s a difference.
          </motion.p>
        </motion.div>
      </div>

      {/* Bottom status bar */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.9 }}
        className="relative z-10 px-6 md:px-12 lg:px-16 pb-8 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE] animate-pulse" />
          <span className="font-[var(--font-dm-mono)] text-[#3F3F52] text-[11px] tracking-[0.22em] uppercase">
            Accepting 2 clients
          </span>
        </div>
        <span className="font-[var(--font-dm-mono)] text-[#3F3F52] text-[11px] tracking-[0.15em] uppercase hidden md:block">
          Est. 2024
        </span>
      </motion.div>

      {/* Bottom line */}
      <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
        transition={{ duration: 1.0, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-0 left-0 right-0 h-px origin-left"
        style={{ background: "linear-gradient(90deg, rgba(129,140,248,0.3), rgba(34,211,238,0.2) 60%, transparent)" }} />
    </section>
  );
}
