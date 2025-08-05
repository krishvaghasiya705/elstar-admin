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
        Inter: ["Inter", "sans-serif"],
        InterUi: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      safelist: [
        {
          pattern: /bg-(red|orange|emerald|sky)-(100|200|600|700)/,
        },
        {
          pattern: /text-(gray|red|orange|emerald|sky)-(600|700|800)/,
        },
        {
          pattern: /border-(gray|red|orange|emerald|sky)-(200|300)/,
        },
      ],
    },
  },
  plugins: [],
};
