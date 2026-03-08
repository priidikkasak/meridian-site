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
        bg: "#F5F4F0",
        surface: "#ECEAE4",
        border: "#D6D4CE",
        text: "#1A1A18",
        muted: "#8A8A85",
        ink: "#1A1A18",
      },
      fontFamily: {
        mono: ["var(--font-courier)", "Courier New", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
