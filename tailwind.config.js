/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F7F3EE',
        sage: '#9CAEA0',
        'sage-600': '#7F9B8F',
        'dark-brown': '#3E2F2A'
      }
    }
  },
  plugins: []
}
