/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        height: {
          'screen-minus-80': 'calc(100vh - 80px)',
        },
      },
    },
    plugins: [],
  }