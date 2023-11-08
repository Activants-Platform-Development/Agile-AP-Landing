/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        DEFAULT: '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'full': '9999px',
        'large': '12px',
        'xl': '20px'
      },
      colors: {
        primary: '#F15A29',
        secondary: '#596780',
        grayLight: '#00000099',
        darkBlue: '#0C1C37',
        theme_color: "#3C08A0",
        darkPink: "#EC1E79",
        darkOrange: "#F7931E",
        lightBlue: '#6DB2E3',
      },
      width: {
        lgMain: '85%'
      }
    },
  },
  plugins: [],
}

