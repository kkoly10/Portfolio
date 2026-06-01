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
        // Warm editorial light palette
        paper: "#faf8f5", // page background
        surface: "#ffffff", // cards
        "surface-2": "#f4f0e9", // subtle insets / hovers
        ink: {
          DEFAULT: "#1c1917", // primary text (warm near-black)
        },
        line: "rgba(28, 25, 23, 0.10)", // hairline borders on light
        accent: {
          DEFAULT: "#1f3a5f", // refined navy
          soft: "#2c5282", // readable navy for eyebrows/labels
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
