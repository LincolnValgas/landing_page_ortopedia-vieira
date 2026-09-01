/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#C62828',
          'red-dark': '#a91f1f',
          orange: '#E65100',
          yellow: '#FFE600',
          whatsapp: '#25D366',
          'whatsapp-dark': '#1ebe5d',
          dark: '#263238',
          muted: '#455A64',
          light: '#F8F9FA',
          gray: '#F2F2F2',
        }
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
