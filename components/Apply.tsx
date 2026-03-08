"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";

export default function Apply() {
  return (
    <section id="apply" className="relative bg-[#0D0D1A] px-6 md:px-12 lg:px-16 py-20 md:py-28 overflow-hidden">

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(129,140,248,0.05) 0%, transparent 100%)" }} />
      <div className="grid-bg opacity-50" />

      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(129,140,248,0.3), rgba(34,211,238,0.2), transparent)" }} />

      <motion.div variants={stagger} initial="hidden" whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="relative z-10 max-w-2xl mx-auto text-center">

        {/* Section badge */}
        <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-8">
          <span className="font-[var(--font-dm-mono)] text-[10px] tracking-[0.3em] uppercase
            px-2.5 py-1 rounded-full bg-[#818CF8]/10 border border-[#818CF8]/20 text-[#818CF8]">
            05
          </span>
          <span className="font-[var(--font-dm-mono)] text-[#3F3F52] text-[11px] tracking-[0.22em] uppercase">
            Apply
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2 variants={fadeUp}
          className="font-[var(--font-space-grotesk)] font-bold text-[#E8E8F0] leading-[1.05] mb-5"
          style={{ fontSize: "clamp(1.9rem, 5vw, 3.75rem)" }}>
          Two clients.{" "}
          <span className="grad-text">One slot open.</span>
        </motion.h2>

        {/* Sub */}
        <motion.p variants={fadeUp}
          className="font-[var(--font-dm-mono)] text-[#3F3F52] text-sm leading-relaxed mb-10 max-w-sm mx-auto">
          If you&apos;re still reading, you already know whether this is for you.
        </motion.p>

        {/* CTA */}
        <motion.div variants={fadeUp} className="mb-6">
          <a href="mailto:hello@meridian.co"
            className="relative inline-block w-full md:w-auto font-[var(--font-space-grotesk)] font-semibold text-sm
              tracking-wide px-8 py-3.5 rounded-full text-[#080810] overflow-hidden group"
            style={{ background: "linear-gradient(135deg, #818CF8, #22D3EE)" }}>
            <span className="relative z-10">Apply for a Conversation →</span>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: "linear-gradient(135deg, #22D3EE, #818CF8)" }} />
          </a>
        </motion.div>

        {/* Fine print */}
        <motion.div variants={fadeUp}>
          <p className="font-[var(--font-dm-mono)] text-[#3F3F52] text-xs">
            No forms · No sales calls · Response within 24 hours
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
