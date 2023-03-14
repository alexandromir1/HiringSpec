module.exports = {
  content: ["./src/**/*.{html,js}"],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    fontFamily: {
      main: ['Rubik Mono One', 'sans-serif'],
      rail: ['Raleway'],
    },
    colors: {
      'body': '#121212',
      'orge': '#E79200',
      'btn': '#B8FC9F',
      'black': '#000000',
      'white': '#fff'
    },
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'big': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'biger': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '836px'},
      // => @media (max-width: 767px) { ... }

      'lil': {'max': '375px'},
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      
    },
  plugins: [],
  },
}