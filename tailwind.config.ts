import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#faf7f5",
        fg: "#1e1a18",
        card: "#ffffff",
        line: "#e9dfd8",
        accent: "#c27d3f",
        accent2: "#f2dcc7",
        muted: "#6d625d"
      }
    }
  },
  plugins: []
} satisfies Config;
