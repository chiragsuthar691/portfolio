import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        beat: {
          "0%": { transform: "rotate(0deg) scale(1)" },
          "25%": { transform: "rotate(0deg) scale(1)" },
          "30%": { transform: "rotate(0deg) scale(1.4)" },
          "50%": { transform: "rotate(0deg) scale(1.2)" },
          "70%": { transform: "rotate(0deg) scale(1.4)" },
          "100%": { transform: "rotate(0deg) scale(1)" },
        },
      },
      animation: {
        "spin-slow-30": "spin 30s linear infinite",
        "spin-slow-25": "spin 25s linear infinite",
        "spin-slow-10": "spin 10s linear infinite",
        "marquee-ltr": "marquee 25s linear infinite",
        "marquee-rtl": "marquee2 25s linear infinite",
        "beat-1": "beat 2s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
