/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-light': 'linear-gradient(to bottom, lightblue, white)',
        'gradient-dark': 'linear-gradient(to bottom, white, lightgreen)',
      },
      animation: {
        'slide-down-fade-in': 'slideDownFadeIn 0.7s ease-in-out forwards',
      },
    },
  },
  plugins: [],
}
