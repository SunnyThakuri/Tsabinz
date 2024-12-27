/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customWhite: "#FBFBFB",
        customGray: "#D9D9D9",
        customBlack: "#121212",
        bgWhite: "#F8F8F8",
        textBrown: "#63583E"
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};
