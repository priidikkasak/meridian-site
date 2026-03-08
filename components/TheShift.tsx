"use client";

import { motion } from "framer-motion";
import AnimatedLine from "./AnimatedLine";
import { fadeUp, stagger } from "@/lib/motion";

const pillars = [
  "We study your market before we're paid to care.",
  "We identify what's broken before you tell us.",
  "We arrive with a thesis, not a proposal.",
];

export default function TheShift() {
  return (
    <section className="px-6 md:px-14 py-14 md:py-20">
      <motion.div variants={stagger} initial="hidden" whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}>

        <motion.p variants={fadeUp}
          className="font-[var(--font-dm-mono)] text-[#22D3EE] text-[11px] tracking-[0.3em] uppercase mb-6">
          02 / The Difference
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <motion.h2 variants={fadeUp}
            className="font-[var(--font-space-grotesk)] font-bold text-[#E8E8F0] leading-[1.05]"
            style={{ fontSize: "clamp(1.5rem, 3.2vw, 2.6rem)" }}>
            Before the first call,{" "}
            <span className="grad-text">we already know your business.</span>
          </motion.h2>

          <motion.div variants={stagger} className="flex flex-col gap-3 justify-center">
            {pillars.map((p, i) => (
              <motion.div key={i} variants={fadeUp} className="flex gap-3 items-start">
                <span className="text-[#818CF8] font-[var(--font-dm-mono)] text-xs mt-0.5 shrink-0">—</span>
                <p className="font-[var(--font-dm-mono)] text-[#E8E8F0] text-sm leading-relaxed">{p}</p>
              </motion.div>
            ))}

            <motion.div variants={fadeUp}
              className="mt-4 p-4 rounded-lg bg-[#0D0D1A] border border-[#818CF8]/15 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px"
                style={{ background: "linear-gradient(90deg, #818CF8, #22D3EE, transparent)" }} />
              <p className="font-[var(--font-space-grotesk)] text-[#E8E8F0] text-sm italic leading-snug mb-2">
                &ldquo;How do you know all of this?&rdquo;
              </p>
              <p className="font-[var(--font-dm-mono)] text-[#3F3F52] text-[11px] tracking-[0.15em] uppercase">
                Closed on the call · Full retainer · No negotiation
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <div className="mt-14 md:mt-20"><AnimatedLine /></div>
    </section>
  );
}
