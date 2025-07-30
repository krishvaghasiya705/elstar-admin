/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        lg: { max: "1440px" },
        xl: { max: "1024px" },
        md: { max: "768px" },
        sm: { max: "576px" },
      },
      colors: {
        grayscroll: "#c2c3c5",
      },
      boxShadow: {},
      spacing: {},
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
