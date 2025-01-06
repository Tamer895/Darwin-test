/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Google Sans', 'sans-serif'],
        // Add other font families if needed
      },


      colors: {
        primary: {
          def: "rgb(74, 92, 251)",
          5: "rgba(52, 71, 246, 0.05)",
          15: "rgba(52, 71, 246, 0.15)",
          25: "rgba(52, 71, 246, 0.25)",

          darker: "#3f36e2"
        },
        
        gray: '#636363',
        input_border: "rgb(202, 213, 226)",

        purple: '#732459',
        blue: {
          def: "#003584",
          soft: "rgb(74, 92, 251)",
          dark: "#051043",
          title: "0C29AB",
        },
        yellow: {
          def: "#D17400",
          light: "#FDB916",
        },


        light_bg: 'rgb(242,245,250)',


        black: {
          def: '#1E1E1E',
          10: 'rgba(0,0,0,0.1)',
          25: 'rgba(0,0,0,0.25)',
          70: 'rgba(0,0,0,0.7)',
          30: 'rgba(0,0,0,0.3',
          50: 'rgba(0,0,0,0.5)',
        }
        // Add more custom colors as needed
      },
    },
  },
  plugins: [],
}

