/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        rovix: {
          black: '#121212',      // Matte Black
          dark: '#1C1A18',       // Charcoal Dark
          leather: '#4A2C11',    // Dark Brown Leather
          gold: '#D4AF37',       // Gold Accent
          goldHover: '#B8962E',  // Dark Gold Accent
          bgLight: '#F9F8F6',    // Soft Background
          border: '#E5E0D8',     // Soft Border
        },
      },
      fontFamily: {
        sans: ['Cinzel', 'Playfair Display', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
