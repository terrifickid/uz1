/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["AkkuratMonoLLWebTrial-Regular"],
        ak: ["AkkuratLLWebTrial-Light"],
        akr: ["AkkuratLLWebTrial-Regular"],
      },
    },
  },
  plugins: [],
};
