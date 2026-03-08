"use client";

import { motion } from "framer-motion";

export default function AnimatedLine({ className = "" }: { className?: string }) {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
      className={`h-px w-full origin-left ${className}`}
      style={{ background: "linear-gradient(90deg, rgba(129,140,248,0.3) 0%, rgba(34,211,238,0.15) 60%, transparent 100%)" }}
    />
  );
}
