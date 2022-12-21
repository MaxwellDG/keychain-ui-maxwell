const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", 'node_modules/daisyui/dist/**/*.js', 'node_modules/react-daisyui/dist/**/*.js'],
  theme: {
    fontFamily: {
      // sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      // industrybold: ["Industry-Bold", "sans-serif"],
      // industrydemi: ["Industry-Demi", "sans-serif"],
      // blenderprobold: ["BlenderPro-Bold", "sans-serif"],
      // blenderprobook: ["BlenderPro-Book", "sans-serif"],
      // blenderpromedium: ["BlenderPro-Medium", "sans-serif"],
    },
    extend: {
      transitionProperty: {
        'spacing': 'margin, padding',
      },
    },
  },
  plugins: [require("daisyui")],
};
