import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        ghostwhite: "#fffaff",
        darkslategray: {
          "100": "#3f3f3f",
          "200": "rgba(63, 63, 63, 0.27)",
        },
        white: "#fff",
        slateblue: "#744ccd",
        gainsboro: "rgba(217, 217, 217, 0)",
        lavender: "#d9daff",
        mediumslateblue: "#8f66e6",
        gray: "rgba(31, 26, 42, 0)",
        dimgray: {
          "100": "rgba(102, 102, 102, 0.27)",
          "200": "rgba(82, 77, 92, 0)",
        },
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        "rammetto-one": "'Rammetto One'",
        righteous: "Righteous",
      },
      borderRadius: {
        "160xl": "179px",
        "16xl": "35px",
        "25xl": "44px",
        "32xl": "51px",
      },
    },
    fontSize: {
      xl: "1.25rem",
      base: "1rem",
      "13xl": "2rem",
      lgi: "1.19rem",
      "7xl": "1.63rem",
      "29xl": "3rem",
      "10xl": "1.81rem",
      "19xl": "2.38rem",
      "17xl": "2.25rem",
      "3xl": "1.38rem",
      sm: "0.88rem",
      "5xl": "1.5rem",
      "231xl": "15.63rem",
      "43xl": "3.88rem",
      "81xl": "6.25rem",
      lg: "1.13rem",
      mini: "0.94rem",
      inherit: "inherit",
    },
    screens: {
      mq1150: {
        raw: "screen and (max-width: 1150px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  plugins: [],
};
export default config;
