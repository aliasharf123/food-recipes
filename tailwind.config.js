/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        'secondary': '#69757a' ,
        'primaary': '#495257',
        'bgcolor': '#f5f7f8',        
        'lighBlue': 'rgba(59,130,246,.2)',
        'hovering': 'rgba(0,0,0,.4)',
        'Theme':'#FBE0DC',
        'blur': '#e0e0e0',
        'ring-blue':'rgba(59,130,246,.5)',
        'error':'#cc392f',
        'greenmoney':'#07bc0c'
      }
    },
  },
  plugins: [],
}
