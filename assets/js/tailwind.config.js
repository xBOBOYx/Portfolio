module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  // ...
  plugins: [
    // ...
    require('@tailwindcss/forms'),
  ]
}