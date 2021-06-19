module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'rounded': ['SF Pro Rounded', 'san-serif'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
  
    require("@tailwindcss/line-clamp")],
};
