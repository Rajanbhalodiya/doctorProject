// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./index.html",
//     "./src//*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors:{
//         'primary':'#5f6fff'
//       }
//     },
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", //  Correct recursive glob pattern
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#5f6fff',
      },
      gridTemplateColumns:{
        'auto':'repeat(auto-fit, minmax(200px, 1fr))', // Responsive grid columns
      }
    },
  },
  plugins: [],
};
