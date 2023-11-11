const plugin = require('tailwindcss/plugin');
import tailwindTypography from '@tailwindcss/typography';

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#ffffff',
      black: '#191919',
      green: '#4ADE80',
      red: '#EF4444',
      violet: '#818CF8',
      yellow: '#FBBF24'
    },
    extend: {
      fontFamily: {
        inter: ['"Inter"']
      }
    },
  },
  plugins: [
    tailwindTypography,
    plugin(function ({addUtilities}) {
      addUtilities({
        // Typo
        '.typo-h1': {
          '@apply font-inter text-[100px] leading-[121px]': {}
        },
        '.typo-h2': {
          '@apply font-inter text-[35px] leading-[42px]': {}
        },
        '.typo-h3': {
          '@apply font-inter text-[22px] leading-[26px]': {}
        },
        '.typo-text': {
          '@apply font-inter text-[16px] leading-[20px]': {}
        },
        '.typo-info': {
          '@apply font-inter text-[14px] leading-[17px]': {}
        }
      })
    })
  ]
}
