/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {transformOrigin: {
      'top-left-1/2-1/2': '-50% -50%',
    }
},
  },
  plugins: [],
}

