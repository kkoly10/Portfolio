import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark premium SaaS palette
        ink: {
          950: "#08080a",
          900: "#0b0b0e",
          800: "#111114",
          700: "#17171c",
        },
        line: "rgba(255,255,255,0.08)",
        accent: {
          DEFAULT: "#7c5cff",
          soft: "#a48bff",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
