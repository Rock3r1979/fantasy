import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}", "./src/lib/**/*.{ts,tsx}"],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        background: "#f7f6f2", foreground: "#28251d", surface: "#f9f8f5", panel: "#fbfbf9", border: "#d4d1ca", muted: "#7a7974", primary: "#01696f"
      },
      fontFamily: { display: ["Cabinet Grotesk", "sans-serif"], body: ["Satoshi", "sans-serif"] },
      boxShadow: { soft: "0 4px 12px rgba(17,24,39,0.08)", card: "0 12px 32px rgba(17,24,39,0.08)" }
    }
  },
  plugins: []
};
export default config;
