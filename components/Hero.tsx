"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col border-b border-[#D6D4CE]">

      {/* Nav */}
      <nav className="flex items-center justify-between px-6 md:px-12 py-6 border-b border-[#D6D4CE]">
        <motion.span
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, ease }}
          className="font-mono text-[#1A1A18] text-sm font-bold tracking-[0.25em] uppercase">
          Meridian
        </motion.span>
        <motion.a
          href="#apply"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.08, ease }}
          className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#1A1A18] border border-[#1A1A18]
            px-4 py-2 hover:bg-[#1A1A18] hover:text-[#F5F4F0] transition-colors duration-200">
          Apply
        </motion.a>
      </nav>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-center px-6 md:px-12 py-16">
        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15, ease }}>
          <p className="font-mono text-[#8A8A85] text-xs tracking-[0.3em] uppercase mb-8">
            Advisory
          </p>
          <h1
            className="font-mono font-bold text-[#1A1A18] leading-[1.0] tracking-tight mb-8"
            style={{ fontSize: "clamp(2.8rem, 8.5vw, 8rem)" }}>
            We don&apos;t pitch.
            <br />
            <span className="italic font-normal">We already know.</span>
          </h1>
          <p className="font-mono text-[#8A8A85] text-sm max-w-xs leading-relaxed">
            Most consultants sell services.
            <br />We sell clarity. There&apos;s a difference.
          </p>
        </motion.div>
      </div>

      {/* Status bar */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.5, ease }}
        className="px-6 md:px-12 py-5 border-t border-[#D6D4CE] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#1A1A18] animate-pulse" />
          <span className="font-mono text-[#8A8A85] text-[11px] tracking-[0.22em] uppercase">
            Currently accepting 2 clients
          </span>
        </div>
        <span className="font-mono text-[#D6D4CE] text-[11px] tracking-[0.15em] hidden md:block">2025</span>
      </motion.div>
    </section>
  );
}
