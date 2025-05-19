/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0F1114",
        foreground: "#E8C6C0",
        surface: "#1C1F24",
        border: "#2A2E35",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 10px rgba(255, 255, 255, 0.05)",
      },
    },
  },
  plugins: [],
};
