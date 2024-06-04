/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      creole: '#0E0A00',
      cornField: '#F9F2BF',
      softPeach: '#F4EDED',
      persimmon: '#FF6346',
      orange: '#FF531B',
      scarlet: '#E52600',
      koromikol: '#FFBA68',
      supernova: '#FFCB00',
      webOrange: '#FFA300',
      pistachio: '#84C400',
      funGreen: '#02932E',
      cerulean: '#00B8EA',
      azureRadiance: '#007FFF',
      scienceBlue: '#003FD0',
      pinkSalmon: '#FF8E9D',
      mauve: '#FABEFF',
      hollywoodCerise: '#FF0096',
      electricViolet: '#BA25FD',
      fullGreen: '#00C560',
      pink: '#F7BBFF',
      yellow: '#FBCE08',
      lemonYellow: '#FFD000',
      tintGreen: '#A8DF00',
      darkYellow: '#FFA000',
      skyBlue: '#00B5E7',
      lightPink: '#F794FF',
      amber: '#ffbf00',
      lightGreen: '#00AC56',
    },
    fontFamily: {
      MontserratBlack: ['MontserratAlternatesBlack'],
      MontserratBold: ['MontserratAlternatesBold'],
      MontserratExtraBold: ['MontserratAlternatesExtraBold'],
      MontserratSemiBold: ['MontserratAlternatesSemiBold'],
      MontserratMedium: ['MontserratAlternatesRegular'],
      MontserratRegular: ['MontserratAlternatesMedium'],
    },
    boxShadow: {
      custom: '8px 10px 0px 0px rgb(14 13 13)',
      none: '0 0 #0000;',
    },
    backgroundImage: {
      shop: 'linear-gradient(180deg, #fbce08 0%, #f7bbff 70%)',
      connect: 'linear-gradient(180deg, #ffd000 0%, #a8df00 100%)',
      tag: 'linear-gradient(180deg, #FBCE08 0%, #FF531B 100%)',
      mixMatch:
        'linear-gradient(260deg, #00b8ea 0%, #93c300 48%, #fbce08 100%)',
    },
    keyframes: {
      marquee: {
        '0%': {transform: 'translateX(0)'},
        '100%': {transform: 'translateX(-100%)'},
      },
    },
    animation: {
      marquee: 'marquee 50s linear infinite',
    },
    extend: {},
  },
  plugins: [],
};
