/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'desk': "url('../src/assets/bg-desktop.svg')",
        'mobile': "url('../src/assets/bg-mobile.svg')"
      }
    },
  },
  plugins: [],
}