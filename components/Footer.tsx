"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="px-6 md:px-12 lg:px-16 py-6 border-t border-[#14141F]">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
        <span className="font-[var(--font-dm-mono)] text-[#3F3F52] text-xs">
          © Meridian 2025
        </span>
        <div className="flex items-center gap-5">
          {[
            { label: "LinkedIn", href: "https://linkedin.com" },
            { label: "hello@meridian.co", href: "mailto:hello@meridian.co" },
          ].map(({ label, href }) => (
            <a key={label} href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="font-[var(--font-dm-mono)] text-[#3F3F52] text-xs hover:text-[#818CF8] transition-colors duration-200">
              {label}
            </a>
          ))}
        </div>
      </motion.div>
    </footer>
  );
}
