/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'american-red': '#DC2626',  // Vibrant red
        'american-blue': '#1E40AF', // Deep blue
        'american-white': '#F9FAFB' // Slightly off-white for better contrast
      },
      fontFamily: {
        'sans': ['neue-haas-grotesk-display', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        'display': ['neue-haas-grotesk-display', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif']
      }
    },
  },
  plugins: [],
}
