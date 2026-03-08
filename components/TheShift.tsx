"use client";

import { motion } from "framer-motion";
import AnimatedLine from "./AnimatedLine";
import { fadeUp, stagger } from "@/lib/motion";

const pillars = [
  { label: "01", text: "We study your market before we're paid to care." },
  { label: "02", text: "We identify what's broken before you tell us." },
  { label: "03", text: "We arrive with a thesis, not a proposal." },
];

export default function TheShift() {
  return (
    <section className="relative px-6 md:px-12 lg:px-16 py-16 md:py-24">
      <motion.div variants={stagger} initial="hidden" whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}>

        {/* Section badge */}
        <motion.div variants={fadeUp} className="flex items-center gap-3 mb-10">
          <span className="font-[var(--font-dm-mono)] text-[10px] tracking-[0.3em] uppercase
            px-2.5 py-1 rounded-full bg-[#22D3EE]/10 border border-[#22D3EE]/20 text-[#22D3EE]">
            02
          </span>
          <span className="font-[var(--font-dm-mono)] text-[#3F3F52] text-[11px] tracking-[0.22em] uppercase">
            The Difference
          </span>
        </motion.div>

        {/* Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12 md:mb-16">
          {/* Left */}
          <div className="lg:col-span-6">
            <motion.h2 variants={fadeUp}
              className="font-[var(--font-space-grotesk)] font-bold text-[#E8E8F0] leading-[1.1]"
              style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.9rem)" }}>
              Before the first call,{" "}
              <span className="grad-text">we already know your business.</span>
            </motion.h2>
          </div>

          {/* Right — pillars */}
          <motion.div variants={stagger}
            className="lg:col-span-5 lg:col-start-8 flex flex-col gap-4 justify-center">
            {pillars.map((p, i) => (
              <motion.div key={i} variants={fadeUp}
                className="flex items-start gap-4 p-4 rounded-lg bg-[#0D0D1A] border border-[#14141F]
                  hover:border-[#818CF8]/25 transition-colors duration-300 group">
                <span className="font-[var(--font-dm-mono)] text-[10px] text-[#818CF8]/50 mt-0.5 shrink-0">
                  {p.label}
                </span>
                <p className="font-[var(--font-dm-mono)] text-[#E8E8F0] text-sm leading-relaxed">
                  {p.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Case study card */}
        <motion.div variants={fadeUp}
          className="relative p-6 md:p-8 rounded-xl bg-[#0D0D1A] max-w-2xl overflow-hidden"
          style={{ border: "1px solid rgba(129,140,248,0.15)", boxShadow: "0 0 40px rgba(129,140,248,0.06)" }}>

          {/* Top accent line */}
          <div className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, #818CF8, #22D3EE, transparent)" }} />

          <div className="mb-4">
            <span className="font-[var(--font-dm-mono)] text-[10px] tracking-[0.25em] uppercase
              text-[#818CF8] bg-[#818CF8]/10 px-2.5 py-1 rounded-full border border-[#818CF8]/20">
              Client / Fractional CFO Firm
            </span>
          </div>

          <blockquote className="font-[var(--font-space-grotesk)] text-[#E8E8F0] font-medium leading-snug mb-5"
            style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)" }}>
            &ldquo;He stopped me halfway through and asked:
            <br />&lsquo;How do you know all of this?&rsquo;&rdquo;
          </blockquote>

          <div className="h-px bg-[#14141F] mb-4" />
          <p className="font-[var(--font-dm-mono)] text-[#3F3F52] text-[11px] tracking-[0.18em] uppercase">
            Closed on the call · No pilot · No negotiation · Full retainer
          </p>
        </motion.div>
      </motion.div>

      <div className="mt-16 md:mt-20">
        <AnimatedLine />
      </div>
    </section>
  );
}
