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
      },
      colors: {
        primary: "#000000",
        secondary: "#ffffff",
        accent: "#3b82f6", // Example blue accent, adjustable
      }
    },
  },
  plugins: [],
}