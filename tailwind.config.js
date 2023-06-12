/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
    theme: {
      extend: {
        backgroundClip: {
          'text': 'text',
        }
      }
    },
    variants: {
      extend: {
        backgroundClip: ['responsive']
      }
    },
    plugins: [],
  
  
}