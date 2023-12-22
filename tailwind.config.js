/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        secondaryy: '#4b00b7',
        primaryy: '#b800cc',

      },
      border: {
        secondaryy: '#4b00b7',
        primaryy: '#b800cc',

      },
      textColor: {
        customText: '#4b00b7', 
        customText2: '#b800cc',
        customText3: '#1ea7f3',
        customText4: '#b800cc',
        

      },

      border: {
        primaryy: '#b800cc', // Customize this color to your preference
      },
      fontFamily: {
        custom: ['Geometria', 'sans-serif'],
      },
    
    },
  },
  plugins: [],
}