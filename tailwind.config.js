/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "desat-dark-cyan": "hsl(180, 29%, 50%)",
        "Light-Grayish-Cyan": "hsl(180, 52%, 96%)",
        "Light-Grayish-Cyan": "hsl(180, 31%, 95%)",
        "Dark-Grayish-Cyan": "hsl(180, 8%, 52%)",
        "vdark-gray-cyan": "hsl(180, 14%, 20%),",
      },
      fontFamily: {
        spartan: ["League Spartan", "sans-serif"],
      },
    },
  },
  plugins: [],
};
