/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      'boxShadow': {
        'box': '2px 2px 16px 0px rgba(0,0,0,0.2)'
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}

