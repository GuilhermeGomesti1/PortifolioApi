/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "h-gray-500": "#737994",
        "h-blue-500": "#8CAAEE",
        "h-blue-900": "#303446",
      },

      
      width: {
       
      },
      height: {
      
      },
    },
  },
  
  plugins: [],
};
