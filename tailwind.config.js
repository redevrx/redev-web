/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{html, js, ts, vue}", "./src/**/*"],
  theme: {
    extend: {
      colors: {
        "dark-item": "#1a1a1a",
        "dark-bg": "#242424",
      },
    },
  },
  plugins: [],
};
