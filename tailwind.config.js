/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gradientTop: "rgb(54,5,84)",
        gradientBottom: "rgb(192,34,111)",	
        backgroundDark: "rgb(16,2,53)",
        buttonTop: "#fa924b",
        buttonBottom: "#f7307a",
        yellowShine: "rgb(255,180,2)",
      },
      fontFamily: {
        lato: ['"Lato"', 'sans-serif'],
        dmsans: ['"DM Sans"', 'sans-serif']
      }
    },
  },
  plugins: [],
}