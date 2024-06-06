/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#262a41",
          "200": "#101010",
        },
        white: "#fff",
        crimson: "#dc3434",
        darkslategray: {
          "100": "#404852",
          "200": "#273240",
        },
        mediumaquamarine: "#31ba96",
        aliceblue: "#eceff5",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        avenirnext: "AvenirNext",
      },
      borderRadius: {
        "11xl": "30px",
        "8xs": "5px",
      },
    },
    fontSize: {
      smi: "13px",
      "6xl": "25px",
      base: "16px",
      sm: "14px",
      lg: "18px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
