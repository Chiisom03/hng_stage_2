/** @type {import('tailwindcss').Config} */

export default {
  content: [ 
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        turquoise: 'var(--color-turquoise)',
        't-orange': 'var(--color-t-orange)',
        'btn-hover': 'var(--color-button-hover)'
      },
      borderRadius: {
        primary: '10px',
      },
      fontFamily: {
         cabin: ['var(--default-font)'],
      },
      fontSize: {
        'sm-text': 'var(--font-small)',
        'md-text': 'var(--font-medium)',
        'lg-text': 'var(--font-large)',
      },
    },
    screens: {
      lg: '1024px',
      xl: '1440px',
    },
  },
  plugins: [],
}
