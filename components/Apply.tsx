"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";

export default function Apply() {
  return (
    <section id="apply" className="relative bg-[#0D0D1A] px-6 md:px-14 py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(129,140,248,0.06) 0%, transparent 100%)" }} />
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(129,140,248,0.35), rgba(34,211,238,0.2), transparent)" }} />

      <motion.div variants={stagger} initial="hidden" whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="relative z-10 max-w-xl mx-auto text-center">

        <motion.h2 variants={fadeUp}
          className="font-[var(--font-space-grotesk)] font-bold text-[#E8E8F0] leading-[1.0] mb-4"
          style={{ fontSize: "clamp(2rem, 6vw, 4.5rem)" }}>
          One slot.
          <br /><span className="grad-text">Is it yours?</span>
        </motion.h2>

        <motion.p variants={fadeUp}
          className="font-[var(--font-dm-mono)] text-[#3F3F52] text-sm mb-8">
          If you&apos;re still reading — you already know.
        </motion.p>

        <motion.a variants={fadeUp}
          href="mailto:hello@meridian.co"
          className="inline-block w-full md:w-auto font-[var(--font-space-grotesk)] font-semibold text-sm
            tracking-wide px-8 py-3.5 rounded-full text-[#080810] relative overflow-hidden group"
          style={{ background: "linear-gradient(135deg, #818CF8, #22D3EE)" }}>
          <span className="relative z-10">Apply for a Conversation →</span>
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-250"
            style={{ background: "linear-gradient(135deg, #22D3EE, #818CF8)" }} />
        </motion.a>

        <motion.p variants={fadeUp}
          className="font-[var(--font-dm-mono)] text-[#3F3F52] text-[11px] mt-5">
          No forms · Direct conversation · 24h response
        </motion.p>
      </motion.div>
    </section>
  );
}
