import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Forest green — deep, restrained, luxury. 800 is the signature surface.
        forest: {
          50: "#F0F4EF",
          100: "#DBE3D8",
          200: "#B2C6AB",
          300: "#86A57D",
          400: "#59834E",
          500: "#396632",
          600: "#244B22",
          700: "#1A3820",
          800: "#0C2414",
          900: "#061308",
          950: "#020A05",
        },
        // Warm, paper-like neutrals — the luxury fintech "canvas".
        bone: {
          50: "#FBF9F4",
          100: "#F5F1E8",
          200: "#EBE5D5",
          300: "#DCD3BD",
          400: "#B8AE95",
          500: "#8E8672",
          600: "#6B6556",
          700: "#4D4A40",
          800: "#2E2C26",
          900: "#1A1915",
        },
        ink: {
          // Primary text is a deep forest, not black — connects the palette.
          DEFAULT: "#0A1D12",
          muted: "#4D4A40",
          subtle: "#8E8672",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "ui-serif", "Georgia", "serif"],
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
