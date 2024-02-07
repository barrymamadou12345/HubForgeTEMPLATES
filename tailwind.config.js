/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        violet: "#A88ADD",
        verto: " #0CC2AA",
        jauno: "#FCC100",
        rougeo: "#F90000",
        violeto: "#9C27B0",
        blo: "#1565C0",
        blanco: "#FFFFff",
        grayo: "#444444",
        textHotel: "#8D4B38",
        page: "#ebeaea",
      },
    },
    screens: {
      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
};

