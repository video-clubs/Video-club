/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Colores personalizados inspirados en el diseño de terror
        darkBg: "#0b0b0b",
        bloodRed: "#e50914",
        darkRed: "#b80710",
      },
    },
  },
  plugins: [],
}