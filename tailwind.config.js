/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mobile': '380px',
        // => @media (min-width: 380px) { ... }
        'laptop': '1024px',
      },
      fontFamily: {
      'poppins': ["Gentium Book Plus", 'sans-serif'],
      'lato': ["Lato", 'sans-serif'] 
    },
    backgroundImage:{
      "hero-pattern": 
      "linear-gradient(180deg,  rgba(0, 0, 0, 0.76) 15.54%,  rgba(0, 0, 0, 0.192) 60.23%, rgba(0, 0, 0, 8e-5) 100%), url('/src/assets/skyline4.jpg')",
     
    },
  },
  },
  plugins: [require("@tailwindcss/line-clamp")],
}
