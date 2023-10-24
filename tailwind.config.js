/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx,vue}"],
    theme: {
      extend: {
        colors: {
          darkslateblue: {
            "100": "#34488e",
            "200": "#253985",
          },
          white: "#fff",
          dodgerblue: {
            "100": "#5786ee",
            "200": "#4e80ee",
          },
          gainsboro: {
            "100": "#e5e7eb",
            "200": "#dadde1",
            "300": "#d9d9d9",
          },
          slategray: "#797f8b",
          darkslategray: {
            "100": "#444",
            "200": "#333",
          },
          whitesmoke: {
            "100": "#f3f4f6",
            "200": "#e9eaeb",
            "300": "#e8e9ed",
          },
          lightslategray: {
            "100": "#8d919b",
            "200": "#888d97",
          },
          gray: {
            "100": "#1c212f",
            "200": "#1a202e",
          },
          black: "#000",
        },
        spacing: {},
        fontFamily: {
          inter: "Inter",
        },
        borderRadius: {
          xl: "20px",
        },
      },
      fontSize: {
        base: "1rem",
        "33xl": "3.25rem",
        "41xl": "3.75rem",
        inherit: "inherit",
      },
    },
    corePlugins: {
      preflight: false,
    },
  };
  