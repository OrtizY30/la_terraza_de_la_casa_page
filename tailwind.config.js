/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        customRed: '#DD3525',
        customDark: '#232227',
        headerDarck: '#202020'
      },
    },
  },
  plugins: [],
}

