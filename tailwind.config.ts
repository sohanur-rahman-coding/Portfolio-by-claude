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
        bg: "#0b0b0b",
        bg2: "#0e0e0e",
        bg3: "#131313",
        bg4: "#1a1a1a",
        orange: "#ff7a00",
        orange2: "#ff9a3c",
        cream: "#ede9e3",
        "off-white": "#f8f6f2",
        muted: "#5a5a5a",
        muted2: "#888",
      },
      fontFamily: {
        syne: ["var(--font-syne)", "sans-serif"],
        dm: ["var(--font-dm)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      animation: {
        "gradient-shift": "gradShift 5s ease infinite",
        "glow-float": "glowFloat 8s ease-in-out infinite",
        "hero-float": "heroFloat 9s ease-in-out infinite",
        pulse: "pulse 2s ease-in-out infinite",
        ping: "ping 2.5s ease-out infinite",
        marquee: "marquee 30s linear infinite",
        spin: "spin 1s linear infinite",
      },
      keyframes: {
        gradShift: {
          "0%,100%": { backgroundPosition: "0%" },
          "50%": { backgroundPosition: "100%" },
        },
        glowFloat: {
          "0%,100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(20px,-30px) scale(1.05)" },
          "66%": { transform: "translate(-15px,20px) scale(0.96)" },
        },
        heroFloat: {
          "0%,100%": { transform: "translateY(0) rotate(-0.5deg)" },
          "50%": { transform: "translateY(-22px) rotate(0.5deg)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
