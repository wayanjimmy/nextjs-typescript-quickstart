const tailwind = require('tailwindcss')

module.exports = {
  plugins: [require('postcss-easy-import'), tailwind('./tailwind.js'), require('autoprefixer')]
}
