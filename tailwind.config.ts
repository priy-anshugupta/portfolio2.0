import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: "#0a0a0a",
          elevated: "#111111",
          card: "rgba(255, 255, 255, 0.03)",
        },
        accent: {
          DEFAULT: "#e8e8e8",
          muted: "#888888",
          glow: "rgba(255, 255, 255, 0.08)",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
      },
      spacing: {
        section: "min(12vh, 8rem)",
      },
      animation: {
        "gradient-shift": "gradient-shift 12s ease infinite",
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 40s linear infinite",
      },
      keyframes: {
        "gradient-shift": {
          "0%, 100%": { opacity: "0.4", transform: "scale(1) translate(0, 0)" },
          "50%": { opacity: "0.6", transform: "scale(1.1) translate(2%, -2%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      backdropBlur: {
        glass: "24px",
      },
      boxShadow: {
        cinematic: "0 25px 50px -12px rgba(0, 0, 0, 0.8)",
        glow: "0 0 60px rgba(255, 255, 255, 0.06)",
        "glow-sm": "0 0 30px rgba(255, 255, 255, 0.04)",
        card: "0 4px 24px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
      },
      transitionTimingFunction: {
        cinematic: "cubic-bezier(0.16, 1, 0.3, 1)",
        premium: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
