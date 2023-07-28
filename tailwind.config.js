/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        840: "840px",
      },
      spacing: {
        90: "90px",
      },
    },
  },
  plugins: [],
};
