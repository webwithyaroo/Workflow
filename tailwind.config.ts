import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // "./page/**/*.{js,ts,jsx,tsx,mdx}",
    // "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // // "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "bint-bg":
          "linear-gradient(222deg, rgba(217, 217, 217, 0.13)22.09%, rgba(115, 115, 115, 0.16)100%)",

        "dotted-black": "url('/images/dotted_black_background.jpg')",
      },
      colors: {
        primary: {
          20: "rgba(26, 25, 25, 0.007)",
          100: "#34233E",
          150: "#653185",
          200: "rgba(217, 217, 217, 0.05)",
          250: "#707070",
          300: "#1C1C1C",
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",

          sm: "0rem",
          lg: "0rem",
          xl: "5rem",
          "2xl": "6rem",
        },
        screens: {
          sm: "840px",
          md: "968px",
          lg: "1050px",
          xl: "1280px",
          "2xl": "1536px",
        },
      },
    },
  },
  plugins: [],
};
export default config;
