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
    <section className="relative px-6 md:px-12 lg:px-16 py-16 md:py-24">
      <motion.div variants={stagger} initial="hidden" whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}>

        {/* Section badge */}
        <motion.div variants={fadeUp} className="flex items-center gap-3 mb-10">
          <span className="font-[var(--font-dm-mono)] text-[10px] tracking-[0.3em] uppercase
            px-2.5 py-1 rounded-full bg-[#818CF8]/10 border border-[#818CF8]/20 text-[#818CF8]">
            03
          </span>
          <span className="font-[var(--font-dm-mono)] text-[#3F3F52] text-[11px] tracking-[0.22em] uppercase">
            How We Work
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2 variants={fadeUp}
          className="font-[var(--font-space-grotesk)] font-bold text-[#E8E8F0] leading-[1.1] mb-10 max-w-2xl"
          style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.9rem)" }}>
          The standard is simple.{" "}
          <span className="grad-text">Almost nobody meets it.</span>
        </motion.h2>

        {/* Table */}
        <motion.div variants={fadeUp} className="max-w-2xl rounded-xl overflow-hidden border border-[#14141F]"
          style={{ boxShadow: "0 0 30px rgba(129,140,248,0.04)" }}>

          {/* Header */}
          <div className="grid grid-cols-2 bg-[#0D0D1A]">
            <div className="px-5 py-3 border-b border-r border-[#14141F]">
              <span className="font-[var(--font-dm-mono)] text-[#3F3F52] text-[10px] tracking-[0.3em] uppercase">
                The Vendor
              </span>
            </div>
            <div className="px-5 py-3 border-b border-[#14141F]">
              <span className="font-[var(--font-dm-mono)] text-[11px] tracking-[0.3em] uppercase grad-text">
                The Professional
              </span>
            </div>
          </div>

          {/* Rows */}
          {rows.map(([vendor, pro], i) => (
            <motion.div key={i} variants={fadeUp}
              className="grid grid-cols-2 group hover:bg-[#818CF8]/4 transition-colors duration-200">
              <div className="px-5 py-4 border-b border-r border-[#14141F] last:border-b-0">
                <span className="font-[var(--font-dm-mono)] text-[#3F3F52] text-sm">{vendor}</span>
              </div>
              <div className={`px-5 py-4 border-b border-[#14141F] ${i === rows.length - 1 ? "border-b-0" : ""}`}>
                <span className="font-[var(--font-dm-mono)] text-[#E8E8F0] text-sm group-hover:text-[#818CF8] transition-colors duration-200">
                  {pro}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <div className="mt-16 md:mt-20">
        <AnimatedLine />
      </div>
    </section>
  );
}
