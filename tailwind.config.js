/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/common/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/font/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/styles/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    {
      pattern:
        /bg-(red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose|gray|slate|zinc|neutral|stone)-(100|200|300|400|500|600|700|800|900)/,
    },
    {
      pattern:
        /text-(red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose|gray|slate|zinc|neutral|stone)-(100|200|300|400|500|600|700|800|900)/,
    },
    {
      pattern:
        /border-(red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose|gray|slate|zinc|neutral|stone)-(100|200|300|400|500|600|700|800|900)/,
    },
    {
      pattern: /hover:bg-(red|green|blue|gray|emerald|sky)-(500|600|700)/,
    },
    {
      pattern: /hover:text-(gray|red|green|blue|emerald|sky)-(600|700|800)/,
    },
  ],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        grayscroll: "#c2c3c5",
      },
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
    },
  },
  plugins: [],
};
