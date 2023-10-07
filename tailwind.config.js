/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "600px", // Define a breakpoint for screens less than 600px wide
      },
    },
  },
  plugins: [],
};
