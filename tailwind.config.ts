import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-space-grotesk)"],
        body: ["var(--font-inter)"]
      },
      backgroundImage: {
        "sora-radial":
          "radial-gradient(circle at top, rgba(59,130,246,0.4), transparent 60%)",
        "sora-linear":
          "linear-gradient(135deg, rgba(252,211,77,0.2) 0%, rgba(129,140,248,0.3) 100%)"
      }
    }
  },
  plugins: []
};

export default config;
