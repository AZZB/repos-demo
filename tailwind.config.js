module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      flex: {
        "1/2": "0 0 50%",
        "m1/2": "0 0 calc(50% - 10px)",
        "1/3": "0 0 33.3333%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
