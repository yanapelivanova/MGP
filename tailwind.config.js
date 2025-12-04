/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)'],   // Cormorant Garamond
        sans: ['var(--font-sans)'],         // Inter
      },
    },
  },
  plugins: [],
};
