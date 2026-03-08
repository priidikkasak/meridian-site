"use client";

import { motion } from "framer-motion";
import AnimatedLine from "./AnimatedLine";
import { fadeUp, stagger } from "@/lib/motion";

export default function Problem() {
  return (
    <section className="px-6 md:px-14 py-14 md:py-20">
      <motion.div variants={stagger} initial="hidden" whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}>

        <motion.p variants={fadeUp}
          className="font-[var(--font-dm-mono)] text-[#818CF8] text-[11px] tracking-[0.3em] uppercase mb-6">
          01 / The Market
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          <motion.h2 variants={fadeUp}
            className="font-[var(--font-space-grotesk)] font-bold text-[#E8E8F0] leading-[1.05]"
            style={{ fontSize: "clamp(1.5rem, 3.2vw, 2.6rem)" }}>
            The agency charging $2,500/month
            <br />says the exact same thing you do.
          </motion.h2>

          <motion.div variants={fadeUp}
            className="border-l border-[#818CF8]/25 pl-6 py-1 self-center">
            <p className="font-[var(--font-space-grotesk)] text-[#E8E8F0]/70 text-base italic leading-snug">
              &ldquo;You are a line item that gets cut when the budget gets squeezed.&rdquo;
            </p>
          </motion.div>
        </div>
      </motion.div>

      <div className="mt-14 md:mt-20"><AnimatedLine /></div>
    </section>
  );
}
