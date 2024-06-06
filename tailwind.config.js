/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/stories/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      'boxShadow': {
        'box': '2px 2px 32px -2px rgba(30,30,30,0.1)'
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}

