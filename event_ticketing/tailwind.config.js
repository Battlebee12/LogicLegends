/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tropical-blue': {
          '50': '#eff7ff',
          '100': '#dcecfd',
          '200': '#beddfc',
          '300': '#96cbfa',
          '400': '#65adf5',
          '500': '#418df0',
          '600': '#2b6fe5',
          '700': '#235bd2',
          '800': '#224aab',
          '900': '#214287',
          '950': '#192952',
      },
      }
    
    },
  },
  plugins: [],
}
