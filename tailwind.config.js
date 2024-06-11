/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/stories/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    scale: {
      101: '1.01',
    },
    extend: {
      'boxShadow': {
        'box': '2px 2px 32px -2px rgba(30,30,30,0.1)',
        'box-dark': '2px 2px 32px -2px rgba(180,180,180,0.1)',
        'card': '0px 2px 32px 0px rgba(30,30,30,0.2)',
        'card-hover': '0px 2px 24px 1px rgba(30,30,30,0.25)',
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}

