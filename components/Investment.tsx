"use client";

import { motion } from "framer-motion";
import AnimatedLine from "./AnimatedLine";
import { fadeUp, stagger } from "@/lib/motion";

export default function Investment() {
  return (
    <section className="px-6 md:px-14 py-14 md:py-20">
      <motion.div variants={stagger} initial="hidden" whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}>

        <motion.p variants={fadeUp}
          className="font-[var(--font-dm-mono)] text-[#22D3EE] text-[11px] tracking-[0.3em] uppercase mb-6">
          04 / Investment
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          <div>
            <motion.h2 variants={fadeUp}
              className="font-[var(--font-space-grotesk)] font-bold text-[#E8E8F0] leading-[1.05] mb-5"
              style={{ fontSize: "clamp(1.5rem, 3.2vw, 2.6rem)" }}>
              Not expensive.
              <br /><span className="grad-text">Compared to what?</span>
            </motion.h2>
            <motion.p variants={fadeUp}
              className="font-[var(--font-dm-mono)] text-[#3F3F52] text-sm leading-relaxed">
              A $150K hire still wouldn&apos;t know your market.
              <br />Still wouldn&apos;t have the infrastructure.
              <br />Still wouldn&apos;t be the call at 11pm.
            </motion.p>
          </div>

          <motion.div variants={fadeUp}
            className="relative p-6 rounded-xl bg-[#0D0D1A] border border-[#818CF8]/20 overflow-hidden"
            style={{ boxShadow: "0 0 50px rgba(129,140,248,0.07)" }}>
            <div className="absolute top-0 left-0 right-0 h-px"
              style={{ background: "linear-gradient(90deg, #818CF8, #22D3EE)" }} />
            <div className="absolute top-0 right-0 w-40 h-40 pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(129,140,248,0.08) 0%, transparent 70%)" }} />
            <div className="flex items-baseline gap-2 mb-3">
              <span className="font-[var(--font-space-grotesk)] font-bold grad-text"
                style={{ fontSize: "clamp(2.2rem, 4vw, 3rem)" }}>$15,000</span>
              <span className="font-[var(--font-dm-mono)] text-[#3F3F52] text-sm">/ mo</span>
            </div>
            <div className="h-px bg-[#14141F] mb-3" />
            <p className="font-[var(--font-dm-mono)] text-[#E8E8F0] text-xs tracking-[0.15em] uppercase mb-1">Retainer · Month-to-month</p>
            <p className="font-[var(--font-dm-mono)] text-[#3F3F52] text-xs">No pilots. No &ldquo;let&apos;s start small.&rdquo;</p>
          </motion.div>
        </div>
      </motion.div>

      <div className="mt-14 md:mt-20"><AnimatedLine /></div>
    </section>
  );
}
