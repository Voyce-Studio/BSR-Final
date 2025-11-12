/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: { center: true, padding: '1rem' },
    extend: {
      colors: {
        bsr: {
          base: '#ffffff',
          ink: '#0b0b0b',
          blue: '#0e3a74',
          teal: '#0f8a83',
          lilac: '#a885f3',
          orange: '#ff7a33',
          glass: 'rgba(255,255,255,0.55)'
        }
      },
      borderRadius: { xl: '18px', '2xl': '24px' },
      boxShadow: {
        glass: '0 1px 1px rgba(0,0,0,.03), 0 8px 24px rgba(0,0,0,.08)'
      }
    }
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-minimal': {
          'scrollbar-width': 'thin'
        },
        '.scrollbar-minimal::-webkit-scrollbar': { width: '8px', height: '8px' },
        '.scrollbar-minimal::-webkit-scrollbar-thumb': {
          'background-color': '#dcdcdc',
          'border-radius': '0'
        }
      });
    }
  ]
};
