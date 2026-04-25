import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Forest — anchored on Signal Forest #14493C from the brand guide.
        forest: {
          50: "#E9EFEC",
          100: "#CBDAD2",
          200: "#9CB9AB",
          300: "#6F9886",
          400: "#477B69",
          500: "#2C6650",
          600: "#1F5544",
          700: "#1B5A48",
          800: "#14493C",
          900: "#0E3429",
          950: "#06180F",
        },
        // Bone — primary surface from the brand guide.
        bone: {
          50: "#F4EFE6",
          100: "#EAE3D0",
          200: "#DBD0B4",
          300: "#C2B894",
          400: "#A39A77",
          500: "#7F7860",
          600: "#605B49",
          700: "#46432F",
          800: "#2A2820",
          900: "#181612",
        },
        ink: {
          DEFAULT: "#0C1F1B",
          muted: "#475149",
          subtle: "#7E867E",
        },
        sage: {
          DEFAULT: "#7FA69A",
          50: "#EEF3F1",
          100: "#D7E2DD",
          200: "#B2C7BE",
        },
        // Wayfinding — used sparingly for product variants and accents.
        terracotta: { DEFAULT: "#D4573A", soft: "#F2D6CB", deep: "#7B3B26" },
        civic:      { DEFAULT: "#2D6AA8", soft: "#DCE5EE", deep: "#1F4A78" },
        ochre:      { DEFAULT: "#C49A2E", soft: "#F1E2BC", deep: "#6E5717" },
      },
      fontFamily: {
        sans:  ["var(--font-sans)",  "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "ui-serif", "Georgia", "serif"],
        mono:  ["var(--font-mono)",  "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      letterSpacing: {
        "tightest-2": "-0.04em",
      },
      fontSize: {
        "display-xl": ["clamp(2.25rem, 7.5vw, 6.25rem)", { lineHeight: "1", letterSpacing: "-0.035em" }],
        "display-lg": ["clamp(2rem, 5vw, 4.25rem)", { lineHeight: "1.02", letterSpacing: "-0.03em" }],
        "display-md": ["clamp(1.75rem, 3.5vw, 3rem)", { lineHeight: "1.05", letterSpacing: "-0.025em" }],
      },
      maxWidth: {
        prose: "62ch",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      animation: {
        "fade-up": "fade-up 0.9s cubic-bezier(0.16, 1, 0.3, 1) both",
        "fade-in": "fade-in 1.1s cubic-bezier(0.16, 1, 0.3, 1) both",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
