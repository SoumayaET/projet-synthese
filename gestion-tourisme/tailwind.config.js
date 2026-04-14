/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(14, 70%, 40%)',
        secondary: 'hsl(25, 85%, 55%)',
        text: 'hsl(20, 25%, 25%)',
        softBg: 'hsl(30, 40%, 92%)',
      }
    },
  },
  plugins: [],
}