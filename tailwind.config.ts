import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#080810",
        surface: "#0D0D1A",
        border: "#14141F",
        text: "#E8E8F0",
        muted: "#3F3F52",
        accent: "#818CF8",
        cyan: "#22D3EE",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        mono: ["var(--font-dm-mono)", "Courier New", "monospace"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(129,140,248,0.12)",
        "glow-sm": "0 0 20px rgba(129,140,248,0.08)",
        "glow-cyan": "0 0 40px rgba(34,211,238,0.10)",
      },
    },
  },
  plugins: [],
};
export default config;
