/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gg: "#1d1d1b",
        yy: "#ffff00",
      },
      fontFamily: {
        mono: ["AkkuratMonoLLWebTrial-Regular"],
        ak: ["AkkuratLLWebTrial-Light"],
        akr: ["AkkuratLLWebTrial-Regular"],
      },
    },
  },
  plugins: [],
};
