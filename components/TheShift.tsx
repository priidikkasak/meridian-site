"use client";

import { motion } from "framer-motion";
import AnimatedLine from "./AnimatedLine";
import { fadeUp, stagger } from "@/lib/motion";

const pillars = [
  "We study your market before we're paid to care.",
  "We identify what's broken before you tell us.",
  "We arrive with a thesis, not a proposal.",
];

export default function TheShift() {
  return (
    <section className="px-6 md:px-12 py-16 md:py-24">
      <motion.div variants={stagger} initial="hidden" whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}>

        <motion.p variants={fadeUp}
          className="font-mono text-[#8A8A85] text-[11px] tracking-[0.3em] uppercase mb-10">
          02 / The Difference
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
          <motion.h2 variants={fadeUp}
            className="font-mono font-bold text-[#1A1A18] leading-[1.1]"
            style={{ fontSize: "clamp(1.4rem, 2.8vw, 2.4rem)" }}>
            Before the first call,
            <br /><span className="italic font-normal">we already know your business.</span>
          </motion.h2>

          <motion.div variants={stagger} className="flex flex-col gap-4">
            {pillars.map((p, i) => (
              <motion.div key={i} variants={fadeUp} className="flex gap-4 items-start border-b border-[#D6D4CE] pb-4 last:border-0 last:pb-0">
                <span className="font-mono text-[#D6D4CE] text-xs mt-0.5 shrink-0 select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-mono text-[#1A1A18] text-sm leading-relaxed">{p}</p>
              </motion.div>
            ))}

            <motion.div variants={fadeUp} className="mt-4 p-5 bg-[#ECEAE4] border border-[#D6D4CE]">
              <p className="font-mono text-[#8A8A85] text-[11px] tracking-[0.2em] uppercase mb-3">
                Client / Fractional CFO Firm
              </p>
              <p className="font-mono italic text-[#1A1A18] text-sm leading-relaxed mb-3">
                &ldquo;He stopped me halfway through and asked:
                &lsquo;How do you know all of this?&rsquo;&rdquo;
              </p>
              <p className="font-mono text-[#8A8A85] text-[11px] tracking-[0.15em] uppercase">
                Closed on the call · No pilot · Full retainer
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <div className="mt-16 md:mt-24"><AnimatedLine /></div>
    </section>
  );
}
