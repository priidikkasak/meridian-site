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
    <section className="px-8 md:px-16 py-20 md:py-28">
      <motion.div variants={stagger} initial="hidden" whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}>

        <motion.p variants={fadeUp}
          className="font-mono text-[#8A8A85] text-[11px] tracking-[0.3em] uppercase mb-12">
          02
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <motion.h2 variants={fadeUp}
            className="font-mono font-bold text-[#1A1A18] leading-[1.1]"
            style={{ fontSize: "clamp(1.3rem, 2.5vw, 2.2rem)" }}>
            Before the first call,
            <br /><span className="italic font-normal">we already know your business.</span>
          </motion.h2>

          <motion.div variants={stagger} className="flex flex-col justify-center gap-5">
            {pillars.map((p, i) => (
              <motion.p key={i} variants={fadeUp}
                className="font-mono text-[#1A1A18] text-sm leading-relaxed border-b border-[#D6D4CE] pb-5 last:border-0 last:pb-0">
                {p}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <div className="mt-20 md:mt-28"><AnimatedLine /></div>
    </section>
  );
}
