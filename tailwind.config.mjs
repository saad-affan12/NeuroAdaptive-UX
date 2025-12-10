/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "bg-dark": "#050509",
        "bg-elevated": "rgba(20,20,30,0.85)",
        "accent": "#38bdf8",
        "accent-soft": "#0ea5e9"
      },
      boxShadow: {
        glow: "0 0 25px rgba(56,189,248,0.35)"
      }
    }
  },
  plugins: []
};

export default config;
