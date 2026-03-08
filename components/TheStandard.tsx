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
    <section className="px-8 md:px-16 py-20 md:py-28">
      <motion.div variants={stagger} initial="hidden" whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}>

        <motion.p variants={fadeUp}
          className="font-mono text-[#8A8A85] text-[11px] tracking-[0.3em] uppercase mb-12">
          03
        </motion.p>

        <motion.h2 variants={fadeUp}
          className="font-mono font-bold text-[#1A1A18] leading-[1.1] mb-14"
          style={{ fontSize: "clamp(1.3rem, 2.5vw, 2.2rem)" }}>
          The standard is simple.
          <br /><span className="italic font-normal">Almost nobody meets it.</span>
        </motion.h2>

        <motion.div variants={stagger} className="max-w-lg">
          <div className="grid grid-cols-2 border-b border-[#D6D4CE] pb-3 mb-1">
            <span className="font-mono text-[#8A8A85] text-[11px] tracking-[0.25em] uppercase">Vendor</span>
            <span className="font-mono text-[#1A1A18] text-[11px] tracking-[0.25em] uppercase font-bold">Professional</span>
          </div>
          {rows.map(([v, p], i) => (
            <motion.div key={i} variants={fadeUp}
              className="grid grid-cols-2 py-3.5 border-b border-[#ECEAE4] last:border-0">
              <span className="font-mono text-[#8A8A85] text-sm">{v}</span>
              <span className="font-mono text-[#1A1A18] text-sm font-bold">{p}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <div className="mt-20 md:mt-28"><AnimatedLine /></div>
    </section>
  );
}
