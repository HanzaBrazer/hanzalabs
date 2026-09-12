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
        bg: "#EFF0F1",
        ink: "#0E0E0E",
        gray: {
          DEFAULT: "#444444",
          light: "#E8E8E8",
          dark: "#A4A4A4",
        },
        primary: "#D7FF87",
        fill: {
          dark: "#1A1A1A",
        },
        stroke: {
          dark: "#282828",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        // name: [size, { lineHeight, letterSpacing }]
        h1: ["clamp(2.75rem, 8.2vw, 8rem)", { lineHeight: "0.98", letterSpacing: "-0.045em" }],
        h2: ["clamp(2.75rem, 6vw, 5.125rem)", { lineHeight: "1", letterSpacing: "-0.03em" }],
        h3: ["clamp(2.25rem, 4vw, 3.375rem)", { lineHeight: "1.06", letterSpacing: "-0.03em" }],
        h4: ["clamp(1.875rem, 3vw, 2.75rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        h5: ["1.75rem", { lineHeight: "1.25", letterSpacing: "-0.02em" }],
        h6: ["1.5rem", { lineHeight: "1.3", letterSpacing: "-0.02em" }],
        body: ["1rem", { lineHeight: "1.4", letterSpacing: "0" }],
        label: ["0.8125rem", { lineHeight: "1.15", letterSpacing: "0.04em" }],
      },
      letterSpacing: {
        tightest: "-0.03em",
      },
      maxWidth: {
        site: "1440px",
      },
      spacing: {
        gutter: "30px",
      },
      borderRadius: {
        card: "20px",
        pill: "999px",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
        "in-out-quart": "cubic-bezier(0.76, 0, 0.24, 1)",
      },
      keyframes: {
        "marquee-x": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "marquee-x": "marquee-x 30s linear infinite",
        "spin-slow": "spin-slow 14s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
