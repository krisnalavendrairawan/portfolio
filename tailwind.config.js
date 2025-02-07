/** @type {import('tailwindcss').Config} */
export default {
content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'gradient': 'gradient 3s ease infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
                  '0%, 100%': { transform: 'translateY(-20px)' },
                  '50%': { transform: 'translateY(20px)' },
                },
      },
    },
  },
  plugins: [],
}

