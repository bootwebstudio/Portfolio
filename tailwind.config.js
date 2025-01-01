/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#FCFCFC",
        green: "#4ECC00",
        accent: "#0C0C0C",
        darkLiver: "#4F4F4F",
        gainsboro: "#DADADA",
      },
    },
  },
  plugins: [],
};
