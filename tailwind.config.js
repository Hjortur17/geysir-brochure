/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        main: "#a72204",
        neutral: {
            50: "#FAF9F7",
            100: "#E8E6E1",
            200: "#D3CEC4",
            300: "#B8B2A7",
            400: "#A39E93",
            500: "#857F72",
            600: "#625D52",
            700: "#504A40",
            800: "#423D33",
            900: "#27241D",
        },
    },
    },
  },
  plugins: [],
}
