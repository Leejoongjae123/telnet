const {heroui} = require("@heroui/react");
import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",

  ],
  prefix: "",
  theme: {
    extend: {
      animation: {
        'background': 'background 1s step-end infinite',
      },
      keyframes: {
        background: {
          '0%, 49%': { backgroundColor: '#FF9F1C' },
          '50%, 100%': { backgroundColor: '#FCD34D' },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate"), heroui()],
} satisfies Config;

export default config;
