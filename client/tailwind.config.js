/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  darkMode:"class",
  theme: {
    extend: {
      colors:{
        primary:"#fb8500",
        secondary:"#ffb703",
        accent:"#e9ecef"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
]
}
