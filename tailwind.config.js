module.exports = {
  content: ["./views/**/*.ejs"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        rounded: ["ui-rounded", "SF Pro Rounded", "system-ui", "san-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
