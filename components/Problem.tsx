"use client";

import { motion } from "framer-motion";
import AnimatedLine from "./AnimatedLine";
import { fadeUp, stagger } from "@/lib/motion";

export default function Problem() {
  return (
    <section className="px-6 md:px-12 py-16 md:py-24">
      <motion.div variants={stagger} initial="hidden" whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}>

        <motion.p variants={fadeUp}
          className="font-mono text-[#8A8A85] text-[11px] tracking-[0.3em] uppercase mb-10">
          01 / The Market
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
          <motion.h2 variants={fadeUp}
            className="font-mono font-bold text-[#1A1A18] leading-[1.1]"
            style={{ fontSize: "clamp(1.4rem, 2.8vw, 2.4rem)" }}>
            &ldquo;The agency charging $2,500/month
            <br />says the exact same thing you do.&rdquo;
          </motion.h2>

          <motion.div variants={fadeUp} className="flex flex-col justify-center">
            <div className="border-l-2 border-[#1A1A18] pl-5">
              <p className="font-mono italic text-[#1A1A18] text-base leading-relaxed">
                &ldquo;You are a line item that gets cut when the budget gets squeezed.&rdquo;
              </p>
            </div>
            <div className="mt-8 space-y-2">
              {[
                "Same deliverables. Same case studies. Same pitch.",
                "The only difference is who cut their price first.",
                "That market has no floor.",
              ].map((l, i) => (
                <p key={i} className="font-mono text-[#8A8A85] text-sm">{l}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div className="mt-16 md:mt-24"><AnimatedLine /></div>
    </section>
  );
}
