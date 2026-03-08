"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="px-6 md:px-12 py-6 border-t border-[#D6D4CE] bg-[#F5F4F0]">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.4 }}
        className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
        <span className="font-mono text-[#8A8A85] text-xs">© Meridian 2025</span>
        <div className="flex items-center gap-6">
          {[
            { label: "LinkedIn", href: "https://linkedin.com" },
            { label: "hello@meridian.co", href: "mailto:hello@meridian.co" },
          ].map(({ label, href }) => (
            <a key={label} href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="font-mono text-[#8A8A85] text-xs hover:text-[#1A1A18] underline underline-offset-2 transition-colors duration-150">
              {label}
            </a>
          ))}
        </div>
      </motion.div>
    </footer>
  );
}
