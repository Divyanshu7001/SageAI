/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {  
        coreOrange: 'rgb(253 159 52 / var(--tw-text-opacity))',
        coreBg:'#0f0f0f',
        altcoreBg:"rgb(10,10,10)"
      }
    },
  },
  plugins: [],
};
