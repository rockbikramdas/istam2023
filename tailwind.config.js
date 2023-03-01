/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    ".//*.{html,js,jsx,ts,tsx}",
    "./pages/**/*.{html,js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {

    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
    ],
}
