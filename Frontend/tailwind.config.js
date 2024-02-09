/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize:{
        "biggest" : "13rem"
      },
      height:{
        "card-Height" :"40rem"
      },
      width:{
        "card-Width": "32rem"
      }
      
    },
  },
  plugins: [],
}