/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/Assets/images/hero/hero_background.png')",
      },
      colors: {
        lightgray: "#333",
        blue: "#347DA8",
        green: "#DDE127",
      },
      fontSize: {
        hero: "2.875rem",
        hero_subtitle: "1.5rem",
        content: "1rem",
        section_heading: "2.25rem",
        section_subtitle: "1.5rem",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        montserat: ["Montserrat", "sans-serif"],
        poppins: ["poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
