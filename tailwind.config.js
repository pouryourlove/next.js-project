/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{jsx,tsx}", "./components/**/*.{jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        roboto_slab:['var(--font-roboto_slab)','sans-serif'],
        sans:['var(exo_2)','sans-serif']
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
};
