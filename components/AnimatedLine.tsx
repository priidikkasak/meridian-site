"use client";

import { motion } from "framer-motion";

export default function AnimatedLine({ className = "" }: { className?: string }) {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className={`h-px w-full origin-left bg-[#D6D4CE] ${className}`}
    />
  );
}
