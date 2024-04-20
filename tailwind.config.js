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
        cardBg: "rgb(69,49,151)",
        cardBg2: "rgb(73,57,192)",
        cardStepBg: "rgb(131,63,240)",
        money: "rgb(47,190,84)",
        blackclr: "rgb(40, 40, 40)",
      },
      fontFamily: {
        lato: ['"Lato"', 'sans-serif'],
        dmsans: ['"DM Sans"', 'sans-serif']
      },
      screens: {
        'xxsm': {'max': '250px'},
        // => @media (max-width: 200px) { ... }
      },
    },
  },
  plugins: [],
}