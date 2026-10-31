/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0f0ff',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
        },
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #60a5fa 100%)',
        'gradient-card': 'linear-gradient(135deg, #f0f7ff 0%, #e0f0ff 100%)',
      },
    },
  },
  plugins: [],
};
