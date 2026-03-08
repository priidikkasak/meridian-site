"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col">

      {/* Nav */}
      <nav className="flex items-center justify-between px-8 md:px-16 py-7 border-b border-[#D6D4CE]">
        <motion.span
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, ease }}
          className="font-mono text-xs font-bold tracking-[0.3em] uppercase">
          Meridian
        </motion.span>
        <motion.a
          href="#apply"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.1, ease }}
          className="font-mono text-[11px] tracking-[0.2em] uppercase border-b border-[#1A1A18]
            hover:opacity-50 transition-opacity duration-200 pb-px">
          Apply
        </motion.a>
      </nav>

      {/* Headline */}
      <div className="flex-1 flex items-center px-8 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease }}>
          <h1
            className="font-mono font-bold text-[#1A1A18] leading-[1.0] tracking-tight"
            style={{ fontSize: "clamp(2.8rem, 8vw, 8rem)" }}>
            We don&apos;t pitch.
            <br />
            <span className="italic font-normal">We already know.</span>
          </h1>
        </motion.div>
      </div>

      {/* Status */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.5, ease }}
        className="px-8 md:px-16 py-6 border-t border-[#D6D4CE] flex items-center gap-2.5">
        <span className="w-1.5 h-1.5 rounded-full bg-[#1A1A18]" />
        <span className="font-mono text-[#8A8A85] text-[11px] tracking-[0.25em] uppercase">
          Accepting 2 clients
        </span>
      </motion.div>
    </section>
  );
}
