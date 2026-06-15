import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        wine: {
          DEFAULT: "#4A0E1E",
          dark: "#2D0810",
          light: "#6B1626",
        },
        gold: {
          DEFAULT: "#D4AF37",
          light: "#F0D98C",
          dark: "#A8841F",
        },
        ivory: "#FFF8F0",
        cream: "#FBF6EE",
      },
      fontFamily: {
        display: ["var(--font-playfair)"],
        script: ["var(--font-script)"],
        body: ["var(--font-cormorant)"],
      },
      backgroundImage: {
        "gold-shine":
          "linear-gradient(135deg, #A8841F 0%, #F0D98C 25%, #D4AF37 50%, #F0D98C 75%, #A8841F 100%)",
      },
      animation: {
        shimmer: "shimmer 3s linear infinite",
        "fade-in": "fadeIn 1s ease-out forwards",
        "fade-in-up": "fadeInUp 1s ease-out forwards",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
