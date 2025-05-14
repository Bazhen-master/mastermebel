module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          // ... добавьте свою шкалу цветов
          600: '#0284c7',
          700: '#0369a1',
        },
        wood: {
          400: '#a87c5b',
          500: '#8d6b4f',
        }
      }
    }
  },
  plugins: [],
}
