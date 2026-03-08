"use client";

import { motion } from "framer-motion";
import AnimatedLine from "./AnimatedLine";
import { fadeUp, stagger } from "@/lib/motion";

export default function Problem() {
  return (
    <section className="px-8 md:px-16 py-20 md:py-28">
      <motion.div variants={stagger} initial="hidden" whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}>

        <motion.p variants={fadeUp}
          className="font-mono text-[#8A8A85] text-[11px] tracking-[0.3em] uppercase mb-12">
          01
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <motion.h2 variants={fadeUp}
            className="font-mono font-bold text-[#1A1A18] leading-[1.1]"
            style={{ fontSize: "clamp(1.3rem, 2.5vw, 2.2rem)" }}>
            &ldquo;The agency charging $2,500/month
            <br />says the exact same thing you do.&rdquo;
          </motion.h2>

          <motion.div variants={fadeUp} className="border-l border-[#D6D4CE] pl-8 flex items-center">
            <p className="font-mono italic text-[#8A8A85] text-sm leading-relaxed">
              &ldquo;You are a line item that gets cut
              <br />when the budget gets squeezed.&rdquo;
            </p>
          </motion.div>
        </div>
      </motion.div>

      <div className="mt-20 md:mt-28"><AnimatedLine /></div>
    </section>
  );
}
