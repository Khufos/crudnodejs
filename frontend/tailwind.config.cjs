/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#EE6C4D",
        secondary: {
          9: "#1E1F25",
          900: "#333"
        }
      },
    },
  },
  plugins: [],
}
