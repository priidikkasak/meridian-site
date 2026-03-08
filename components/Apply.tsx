"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";

export default function Apply() {
  return (
    <section id="apply" className="px-6 md:px-12 py-16 md:py-28 bg-[#1A1A18]">
      <motion.div variants={stagger} initial="hidden" whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="max-w-xl">

        <motion.p variants={fadeUp}
          className="font-mono text-[#8A8A85] text-[11px] tracking-[0.3em] uppercase mb-8">
          05 / Apply
        </motion.p>

        <motion.h2 variants={fadeUp}
          className="font-mono font-bold text-[#F5F4F0] leading-[1.0] mb-5"
          style={{ fontSize: "clamp(2rem, 6vw, 4.5rem)" }}>
          We take two clients.
          <br /><span className="italic font-normal">One slot is open.</span>
        </motion.h2>

        <motion.p variants={fadeUp}
          className="font-mono text-[#8A8A85] text-sm leading-relaxed mb-10">
          If you&apos;re still reading, you already know whether this is for you.
        </motion.p>

        <motion.a variants={fadeUp}
          href="mailto:hello@meridian.co"
          className="inline-block w-full md:w-auto font-mono font-bold text-sm tracking-[0.12em]
            uppercase bg-[#F5F4F0] text-[#1A1A18] px-8 py-4 text-center
            hover:bg-[#1A1A18] hover:text-[#F5F4F0] hover:outline hover:outline-1 hover:outline-[#F5F4F0]
            transition-all duration-200">
          Apply for a Conversation →
        </motion.a>

        <motion.p variants={fadeUp}
          className="font-mono text-[#8A8A85] text-[11px] mt-5">
          No forms · No sales calls · Response within 24 hours
        </motion.p>
      </motion.div>
    </section>
  );
}
