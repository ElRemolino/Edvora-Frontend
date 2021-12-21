module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        edvora: {
          black: '#131313',
          greyFont: '#A5A5A5',
          greyCard: '#232323',
          greyCard2: 'rgba(19,19,19,.9)',
          hr: '#CBCBCB',
          offwhiteFont: '#FFFFFF',
        }
      }
    },
  },
  plugins: [],
}
