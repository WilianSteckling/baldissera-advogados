/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          darkGreen: "#033b40", // Cor dos sofás (primária)
          gold: "#caaa8a", // Cor do logo/detalhes (destaque)
          white: "#f8fafc", // Fundo
          black: "#1a1a1a", // Texto principal
          gray: "#5a5a5a", // Texto secundário
        },
      },
      fontFamily: {
        // Sugestão de fontes para o estilo 21st.dev
        serif: ['"Playfair Display"', "serif"],
        sans: ['"Inter"', "sans-serif"],
      },
      zIndex: {
        '100': '100',
      },
      spacing: {
        '125': '31.25rem', // 500px
      },
      aspectRatio: {
        '3/4': '3 / 4',
      },
    },
  },
  plugins: [],
};