/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        sage: {
          DEFAULT: '#8a9e8c',
          light: '#c8d8c9',
          pale: '#eef3ee',
        },
        warm: {
          DEFAULT: '#c4a882',
          light: '#ede5d8',
        },
        cream: '#faf8f4',
        txt: {
          DEFAULT: '#2c2c2a',
          mid: '#5a5a56',
          light: '#9a9a94',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
