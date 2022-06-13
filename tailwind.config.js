/** @type {import('tailwindcss').Config} */
module.exports = {
  impotant: true,
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
    './pages/**/*.{js,jsx,ts,tsx,vue}',
    './components/**/*.{js,jsx,ts,tsx,vue}',
    './layouts/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        social: {
          facebook: '#4267B2',
          telegram: '#088cce',
          twitter: '#1DA1F2',
          instagram: '#FD1D1D',
          google: '#DB4437',
          youtube: '#FF0000',
          medium: '#000000',
        },
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        aclonica: ['Aclonica', 'sans-serif'],
      },
    },
  },
  plugins: [require('tailwindcss-neumorphism')],
}
