/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
    theme: {
      extend: {
        backgroundClip: {
          'text': 'text',
        },
        backdropFilter: {
          'none': 'none',
          'blur': 'blur(10px)',
          backgroundColor: {
            'glass': 'rgba(255, 255, 255, 0.15)'
          },
          borderColor: {
            'glass': 'rgba(255, 255, 255, 0.18)'
          },
          colors: {
            'accent-1': 'rgba(255, 255, 255, 0.15)',
            'accent-2': 'rgba(255, 255, 255, 0.18)',
          },
          backdropBlur: {
            'none': '0',
            'blur': '10px',
          },
          spacing: {
            '50vw': '50vw',
            '60vh': '60vh',
          },
        }
      }
    },
    variants: {
      extend: {
        backgroundClip: ['responsive']
      }
    },
    plugins: [
      require('@tailwindcss/forms'),
    ],    
}