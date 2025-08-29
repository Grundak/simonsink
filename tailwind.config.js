// tailwind.config.js
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // musí obsahovat všechny komponenty
  ],
  theme: {
    extend: {
      fontFamily: {
        copper: ['Copperplate', 'serif'],
      },
    },
  },
  plugins: [],
};
