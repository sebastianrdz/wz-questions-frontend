module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      gradientColorStops: {
        'red-gradient' : 'background:linear-gradient(135deg, rgba(215, 76, 75, 1) 0%, rgba(157, 55, 55, 1) 100%);'
      },
    },
  },
  plugins: [],
}
