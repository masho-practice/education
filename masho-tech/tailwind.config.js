/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'heroImg': "url('back.jpg')",
        'formImg': "url('signup.jpg')",
        'aboutBackImg': "url('./assets/images/back1.jpg')",

      }
    },
  },
  plugins: [],
}