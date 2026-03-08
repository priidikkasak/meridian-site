"use client";

import { motion } from "framer-motion";
import AnimatedLine from "./AnimatedLine";
import { fadeUp, stagger } from "@/lib/motion";

export default function Investment() {
  return (
    <section className="px-6 md:px-12 py-16 md:py-24">
      <motion.div variants={stagger} initial="hidden" whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}>

        <motion.p variants={fadeUp}
          className="font-mono text-[#8A8A85] text-[11px] tracking-[0.3em] uppercase mb-10">
          04 / Investment
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
          <div>
            <motion.h2 variants={fadeUp}
              className="font-mono font-bold text-[#1A1A18] leading-[1.1] mb-6"
              style={{ fontSize: "clamp(1.4rem, 2.8vw, 2.4rem)" }}>
              Not expensive.
              <br /><span className="italic font-normal">Compared to what?</span>
            </motion.h2>
            <motion.div variants={stagger} className="space-y-2">
              {[
                { t: "A full-time hire at $150,000/year.", dim: false },
                { t: "Still wouldn't know your market.", dim: true },
                { t: "Still wouldn't have the infrastructure.", dim: true },
                { t: "Still wouldn't be the call at 11pm.", dim: true },
              ].map(({ t, dim }, i) => (
                <motion.p key={i} variants={fadeUp}
                  className={`font-mono text-sm ${dim ? "text-[#8A8A85]" : "text-[#1A1A18] font-bold"}`}>
                  {t}
                </motion.p>
              ))}
            </motion.div>
          </div>

          <motion.div variants={fadeUp} className="border border-[#1A1A18] p-7">
            <div className="flex items-baseline gap-2 mb-4">
              <span className="font-mono font-bold text-[#1A1A18]"
                style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}>
                $15,000
              </span>
              <span className="font-mono text-[#8A8A85] text-sm">/ month</span>
            </div>
            <div className="h-px bg-[#D6D4CE] mb-4" />
            <p className="font-mono text-[#1A1A18] text-xs tracking-[0.2em] uppercase mb-1.5">
              Retainer · Month-to-month
            </p>
            <p className="font-mono text-[#8A8A85] text-xs">
              No pilots. No &ldquo;let&apos;s start small.&rdquo;
            </p>
          </motion.div>
        </div>
      </motion.div>

      <div className="mt-16 md:mt-24"><AnimatedLine /></div>
    </section>
  );
}
