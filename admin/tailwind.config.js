/** @type {import('tailwindcss').Config} */
export default {
  // Add './index.html' and the other file extensions like .jsx
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':"#5F6FFF"
      }
    },
  },
  plugins: [],
}