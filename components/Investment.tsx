"use client";

import { motion } from "framer-motion";
import AnimatedLine from "./AnimatedLine";
import { fadeUp, stagger } from "@/lib/motion";

export default function Investment() {
  return (
    <section className="relative px-6 md:px-12 lg:px-16 py-16 md:py-24">
      <motion.div variants={stagger} initial="hidden" whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}>

        {/* Section badge */}
        <motion.div variants={fadeUp} className="flex items-center gap-3 mb-10">
          <span className="font-[var(--font-dm-mono)] text-[10px] tracking-[0.3em] uppercase
            px-2.5 py-1 rounded-full bg-[#22D3EE]/10 border border-[#22D3EE]/20 text-[#22D3EE]">
            04
          </span>
          <span className="font-[var(--font-dm-mono)] text-[#3F3F52] text-[11px] tracking-[0.22em] uppercase">
            What This Costs
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left */}
          <div className="lg:col-span-6">
            <motion.h2 variants={fadeUp}
              className="font-[var(--font-space-grotesk)] font-bold text-[#E8E8F0] leading-[1.1] mb-8"
              style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.9rem)" }}>
              Not expensive.{" "}
              <span className="grad-text">Compared to what?</span>
            </motion.h2>

            <motion.div variants={stagger} className="space-y-2 mb-6">
              {[
                { t: "A full-time hire at $150,000/year.", dim: false },
                { t: "Still wouldn't know your market like we do.", dim: true },
                { t: "Still wouldn't have the infrastructure we've built.", dim: true },
                { t: "Still wouldn't be the person you call when something breaks.", dim: true },
              ].map(({ t, dim }, i) => (
                <motion.p key={i} variants={fadeUp}
                  className={`font-[var(--font-dm-mono)] text-sm leading-relaxed ${dim ? "text-[#3F3F52]" : "text-[#E8E8F0]"}`}>
                  {t}
                </motion.p>
              ))}
            </motion.div>

            <motion.p variants={fadeUp}
              className="font-[var(--font-dm-mono)] text-[#3F3F52] text-sm">
              This is a different conversation entirely.
            </motion.p>
          </div>

          {/* Right — price card */}
          <motion.div variants={fadeUp} className="lg:col-span-4 lg:col-start-9">
            <div className="relative p-6 rounded-xl bg-[#0D0D1A] overflow-hidden"
              style={{ border: "1px solid rgba(129,140,248,0.2)", boxShadow: "0 0 50px rgba(129,140,248,0.08)" }}>

              {/* Top gradient line */}
              <div className="absolute top-0 left-0 right-0 h-px"
                style={{ background: "linear-gradient(90deg, #818CF8, #22D3EE)" }} />

              {/* Orb glow behind number */}
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(129,140,248,0.1) 0%, transparent 70%)" }} />

              <div className="relative">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-[var(--font-space-grotesk)] font-bold grad-text"
                    style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)" }}>
                    $15,000
                  </span>
                  <span className="font-[var(--font-dm-mono)] text-[#3F3F52] text-sm">/ mo</span>
                </div>

                <div className="h-px bg-[#14141F] my-4" />

                <div className="space-y-1.5">
                  <p className="font-[var(--font-dm-mono)] text-[#E8E8F0] text-xs tracking-[0.18em] uppercase">
                    Retainer · Month-to-month
                  </p>
                  <p className="font-[var(--font-dm-mono)] text-[#3F3F52] text-xs">
                    No pilots. No &ldquo;let&apos;s start small.&rdquo;
                  </p>
                </div>
              </div>
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
