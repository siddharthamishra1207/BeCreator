/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mycolor': 'rgba(164, 205, 186, 1)',
      },
    },
  },
  plugins: [],
}

