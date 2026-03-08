"use client";

import { motion } from "framer-motion";
import AnimatedLine from "./AnimatedLine";
import { fadeUp, stagger } from "@/lib/motion";

export default function Problem() {
  return (
    <section className="relative px-6 md:px-12 lg:px-16 py-16 md:py-24">
      <motion.div variants={stagger} initial="hidden" whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}>

        {/* Section badge */}
        <motion.div variants={fadeUp} className="flex items-center gap-3 mb-10">
          <span className="font-[var(--font-dm-mono)] text-[10px] tracking-[0.3em] uppercase
            px-2.5 py-1 rounded-full bg-[#818CF8]/10 border border-[#818CF8]/20 text-[#818CF8]">
            01
          </span>
          <span className="font-[var(--font-dm-mono)] text-[#3F3F52] text-[11px] tracking-[0.22em] uppercase">
            The Market
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left */}
          <div className="lg:col-span-7">
            <motion.h2 variants={fadeUp}
              className="font-[var(--font-space-grotesk)] font-bold text-[#E8E8F0] leading-[1.1] mb-8"
              style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.9rem)" }}>
              &ldquo;The agency charging $2,500/month
              <br />says the exact same thing you do.&rdquo;
            </motion.h2>

            <motion.div variants={stagger} className="space-y-2.5">
              {[
                "Same deliverables. Same case studies. Same pitch.",
                "The only difference is who cut their price first.",
                "That market has no floor.",
              ].map((line, i) => (
                <motion.p key={i} variants={fadeUp}
                  className="font-[var(--font-dm-mono)] text-[#3F3F52] text-sm leading-relaxed">
                  {line}
                </motion.p>
              ))}
            </motion.div>
          </div>

          {/* Right — pull quote */}
          <motion.div variants={fadeUp} className="lg:col-span-4 lg:col-start-9">
            <div className="relative p-5 rounded-xl bg-[#0D0D1A] border border-[#818CF8]/15"
              style={{ boxShadow: "0 0 30px rgba(129,140,248,0.06)" }}>
              <div className="absolute top-0 left-6 w-8 h-px"
                style={{ background: "linear-gradient(90deg, #818CF8, transparent)" }} />
              <p className="font-[var(--font-space-grotesk)] text-[#E8E8F0] text-base leading-snug font-light italic">
                &ldquo;You are a line item that gets cut when the budget gets squeezed.&rdquo;
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div className="mt-16 md:mt-20">
        <AnimatedLine />
      </div>
    </section>
  );
}
