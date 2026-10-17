import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#f4f4f5",
        prata: { 100: "#e4e2e3", 300: "#b8b3b5", 500: "#7d8088" },
        grafite: "#151216",
        champagne: "#ddd5c5",
        taupe: "#9a7b5a",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
