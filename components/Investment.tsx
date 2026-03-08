"use client";

import { motion } from "framer-motion";
import AnimatedLine from "./AnimatedLine";
import { fadeUp, stagger } from "@/lib/motion";

export default function Investment() {
  return (
    <section className="px-8 md:px-16 py-20 md:py-28">
      <motion.div variants={stagger} initial="hidden" whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}>

        <motion.p variants={fadeUp}
          className="font-mono text-[#8A8A85] text-[11px] tracking-[0.3em] uppercase mb-12">
          04
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          <motion.h2 variants={fadeUp}
            className="font-mono font-bold text-[#1A1A18] leading-[1.1]"
            style={{ fontSize: "clamp(1.3rem, 2.5vw, 2.2rem)" }}>
            Not expensive.
            <br /><span className="italic font-normal">Compared to what?</span>
          </motion.h2>

          <motion.div variants={fadeUp}>
            <div className="border-t-2 border-[#1A1A18] pt-5">
              <div className="flex items-baseline gap-2 mb-4">
                <span className="font-mono font-bold text-[#1A1A18]"
                  style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
                  $15,000
                </span>
                <span className="font-mono text-[#8A8A85] text-sm">/ month</span>
              </div>
              <p className="font-mono text-[#8A8A85] text-xs tracking-[0.2em] uppercase mb-1">
                Retainer · Month-to-month
              </p>
              <p className="font-mono text-[#8A8A85] text-xs">
                No pilots. No &ldquo;let&apos;s start small.&rdquo;
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div className="mt-20 md:mt-28"><AnimatedLine /></div>
    </section>
  );
}
