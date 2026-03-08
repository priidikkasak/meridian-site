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
    <section className="px-6 md:px-12 py-16 md:py-24">
      <motion.div variants={stagger} initial="hidden" whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}>

        <motion.p variants={fadeUp}
          className="font-mono text-[#8A8A85] text-[11px] tracking-[0.3em] uppercase mb-10">
          03 / The Standard
        </motion.p>

        <motion.h2 variants={fadeUp}
          className="font-mono font-bold text-[#1A1A18] leading-[1.1] mb-12"
          style={{ fontSize: "clamp(1.4rem, 2.8vw, 2.4rem)" }}>
          The standard is simple.
          <br /><span className="italic font-normal">Almost nobody meets it.</span>
        </motion.h2>

        <motion.div variants={fadeUp} className="max-w-2xl border border-[#D6D4CE]">
          {/* Header */}
          <div className="grid grid-cols-2 border-b border-[#D6D4CE] bg-[#ECEAE4]">
            <div className="px-5 py-3 border-r border-[#D6D4CE]">
              <span className="font-mono text-[#8A8A85] text-[10px] tracking-[0.3em] uppercase">The Vendor</span>
            </div>
            <div className="px-5 py-3">
              <span className="font-mono text-[#1A1A18] font-bold text-[10px] tracking-[0.3em] uppercase">The Professional</span>
            </div>
          </div>

          {rows.map(([v, p], i) => (
            <motion.div key={i} variants={fadeUp}
              className={`grid grid-cols-2 group hover:bg-[#ECEAE4] transition-colors duration-150 ${i < rows.length - 1 ? "border-b border-[#D6D4CE]" : ""}`}>
              <div className="px-5 py-4 border-r border-[#D6D4CE]">
                <span className="font-mono text-[#8A8A85] text-sm line-through decoration-[#D6D4CE]">{v}</span>
              </div>
              <div className="px-5 py-4">
                <span className="font-mono text-[#1A1A18] text-sm font-bold">{p}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <div className="mt-16 md:mt-24"><AnimatedLine /></div>
    </section>
  );
}
