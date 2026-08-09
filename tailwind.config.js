/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      colors: {
        ivory: "#F5F0EA",
        "ivory-light": "#FAF7F2",
        "ivory-dark": "#EFE7DE",
        blush: "#E8BFC0",
        rose: "#C98B8D",
        champagne: "#D8C3A5",
        gold: "#C9A66B",
        taupe: "#9B8A7A",
        charcoal: "#3E3835",
        "charcoal-light": "#4E4743",
        "charcoal-dark": "#2E2927",
        primary: "#3E3835",
        secondary: "#F5F0EA",
        accent: "#C98B8D",
      }
    },
  },
  plugins: [],
}