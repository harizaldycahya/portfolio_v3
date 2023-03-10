/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.tsx",
    "./components/**/*.tsx",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#00ADB5',
        secondary: {
          100:'#393E46',
          200:'#232931',
        },
      },
      fontFamily:{
        body: ['Space Mono','monospace'],
        title:['Roboto','sans-serif'],
      }
    },
  },
  plugins: [],
}
