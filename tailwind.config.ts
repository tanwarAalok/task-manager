import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-bg': 'linear-gradient(to bottom, #ffffff, #afa3ff)',
        'gradient-btn-blue': 'linear-gradient(to bottom, #4C38C2, #2F2188)',
        'gradient-btn-black': 'linear-gradient(to bottom, #3A3A3A, #202020)',
      },
      colors: {
        'bg-start': '#afa3ff',
        'btn-light': '#afa3ff',
        'btn-dark': '#3f2ea7',
      }
    },
  },
  plugins: [],
};
export default config;
