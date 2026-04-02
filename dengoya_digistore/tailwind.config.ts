import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        indigo: {
          600: "#4f46e5",
        },
        teal: {
          500: "#14b8a6",
        },
        violet: {
          500: "#8b5cf6",
        },
        slate: {
          50: "#f8fafc",
        },
      },
    },
  },
  plugins: [],
};
export default config;
