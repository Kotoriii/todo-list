/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.vue"],
  theme: {
    colors: {
      blue: {
        dark: "#005FBC",
        DEFAULT: "#0080FF",
        light: "#41A0FF",
      },
      gray: {
        dark: "#AAAAAA",
        DEFAULT: "#BBBBBB",
        light: "#CCCCCC",
      },
      chrome: {
        DEFAULT: "#EEEEEE",
      },
      black: {
        DEFAULT: "#121212",
      },
      white: {
        DEFAULT: "#FFFFFF",
      },
    },
    fontSize: {
      10: "10px",
      13: "13px",
      15: "15px",
      28: "28px",
    },
    spacing: {
      2: "2px",
      8: "8px",
      12: "12px",
      15: "15px",
      20: "20px",
      32: "32px",
    },
  },
  plugins: [],
};
