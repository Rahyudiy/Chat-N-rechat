/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "*.{html,js}",
    "/node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        sourceSans: ['Source Sans 3', 'sans-serif'],
        DMsans: ['Josefin Sans', 'sans-serif']
      },
      animation: {
        updown: "moveUpDown 4s infinite ease-in-out",
      },
      keyframes: {
        moveUpDown: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-20px)",
          },
        },
    },
  },
  plugins: [
    require('flowbite/plugin')  
]
}
}