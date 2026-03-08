"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";

export default function Apply() {
  return (
    <section id="apply" className="px-8 md:px-16 py-20 md:py-28 bg-[#1A1A18]">
      <motion.div variants={stagger} initial="hidden" whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}>

        <motion.p variants={fadeUp}
          className="font-mono text-[#8A8A85] text-[11px] tracking-[0.3em] uppercase mb-12">
          05
        </motion.p>

        <motion.h2 variants={fadeUp}
          className="font-mono font-bold text-[#F5F4F0] leading-[1.0] mb-10"
          style={{ fontSize: "clamp(2rem, 6vw, 5rem)" }}>
          One slot open.
          <br /><span className="italic font-normal">Is it yours?</span>
        </motion.h2>

        <motion.a variants={fadeUp}
          href="mailto:hello@meridian.co"
          className="inline-block font-mono text-sm tracking-[0.15em] uppercase
            border border-[#F5F4F0] text-[#F5F4F0] px-8 py-4
            hover:bg-[#F5F4F0] hover:text-[#1A1A18] transition-colors duration-200">
          Apply for a Conversation →
        </motion.a>

        <motion.p variants={fadeUp}
          className="font-mono text-[#8A8A85] text-[11px] mt-6">
          No forms · Direct conversation · 24h response
        </motion.p>
      </motion.div>
    </section>
  );
}
