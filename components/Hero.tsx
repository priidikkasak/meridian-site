"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#080810]">
      <div className="grid-bg" />

      {/* Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{ background: "radial-gradient(circle at 70% 30%, rgba(129,140,248,0.09) 0%, transparent 65%)" }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(circle at 30% 70%, rgba(34,211,238,0.06) 0%, transparent 65%)" }} />

      {/* Nav */}
      <nav className="relative z-10 flex items-center justify-between px-6 md:px-14 pt-7">
        <motion.span
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}
          className="font-[var(--font-space-grotesk)] text-[#E8E8F0] text-sm font-bold tracking-[0.22em] uppercase">
          Meridian
        </motion.span>
        <motion.a
          href="#apply"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.1 }}
          className="font-[var(--font-dm-mono)] text-[11px] tracking-[0.2em] uppercase px-4 py-2 rounded-full
            border border-[#818CF8]/30 text-[#818CF8] hover:bg-[#818CF8]/10 transition-colors duration-200">
          Apply
        </motion.a>
      </nav>

      {/* Main */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-14 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}>
          <h1
            className="font-[var(--font-space-grotesk)] font-bold text-[#E8E8F0] leading-[0.95] tracking-tight mb-6"
            style={{ fontSize: "clamp(3.2rem, 10vw, 9.5rem)" }}>
            We don&apos;t pitch.
            <br />
            <span className="grad-text">We already know.</span>
          </h1>
          <p className="font-[var(--font-dm-mono)] text-[#3F3F52] text-sm max-w-xs">
            Most consultants sell services. We sell clarity.
          </p>
        </motion.div>
      </div>

      {/* Footer bar */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.5 }}
        className="relative z-10 px-6 md:px-14 pb-8 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE] animate-pulse shrink-0" />
        <span className="font-[var(--font-dm-mono)] text-[#3F3F52] text-[11px] tracking-[0.2em] uppercase">
          2 client slots · Currently open
        </span>
      </motion.div>

      <motion.div
        initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
        transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-0 left-0 right-0 h-px origin-left"
        style={{ background: "linear-gradient(90deg, rgba(129,140,248,0.4), rgba(34,211,238,0.2) 50%, transparent)" }} />
    </section>
  );
}
