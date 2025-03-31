/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        backgroundPurple: '#1F1B24',
        robotText: '#1D1B20',
        arrowColor: '#49454F'
      }
    },
  },
  plugins: [],
}