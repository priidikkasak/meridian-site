"use client";

import { motion } from "framer-motion";
import AnimatedLine from "./AnimatedLine";
import { fadeUp, stagger } from "@/lib/motion";

const rows = [
  ["Waits to be told", "Already done it"],
  ["Sells deliverables", "Sells outcomes"],
  ["Gets replaced", "Gets called at 11pm"],
  ["Competes on price", "Redefines the category"],
];

export default function TheStandard() {
  return (
    <section className="px-6 md:px-14 py-14 md:py-20">
      <motion.div variants={stagger} initial="hidden" whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}>

        <motion.p variants={fadeUp}
          className="font-[var(--font-dm-mono)] text-[#818CF8] text-[11px] tracking-[0.3em] uppercase mb-6">
          03 / The Standard
        </motion.p>

        <motion.h2 variants={fadeUp}
          className="font-[var(--font-space-grotesk)] font-bold text-[#E8E8F0] leading-[1.05] mb-10"
          style={{ fontSize: "clamp(1.5rem, 3.2vw, 2.6rem)" }}>
          Simple standard.{" "}
          <span className="grad-text">Almost nobody meets it.</span>
        </motion.h2>

        <motion.div variants={fadeUp}
          className="max-w-xl rounded-xl overflow-hidden border border-[#14141F]">
          <div className="grid grid-cols-2 bg-[#0D0D1A] border-b border-[#14141F]">
            <div className="px-5 py-2.5 border-r border-[#14141F]">
              <span className="font-[var(--font-dm-mono)] text-[#3F3F52] text-[10px] tracking-[0.3em] uppercase">Vendor</span>
            </div>
            <div className="px-5 py-2.5">
              <span className="font-[var(--font-dm-mono)] text-[11px] tracking-[0.3em] uppercase grad-text">Professional</span>
            </div>
          </div>
          {rows.map(([v, p], i) => (
            <motion.div key={i} variants={fadeUp}
              className={`grid grid-cols-2 group hover:bg-[#818CF8]/4 transition-colors duration-150 ${i < rows.length - 1 ? "border-b border-[#14141F]" : ""}`}>
              <div className="px-5 py-3.5 border-r border-[#14141F]">
                <span className="font-[var(--font-dm-mono)] text-[#3F3F52] text-sm">{v}</span>
              </div>
              <div className="px-5 py-3.5">
                <span className="font-[var(--font-dm-mono)] text-[#E8E8F0] text-sm group-hover:text-[#818CF8] transition-colors duration-150">{p}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <div className="mt-14 md:mt-20"><AnimatedLine /></div>
    </section>
  );
}
