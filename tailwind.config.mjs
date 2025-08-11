/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'craftbytes-blue': 'rgba(13, 70, 94, 1)',
        'craftbytes-blue-light': 'rgba(26, 83, 107, 1)',
        'craftbytes-red': 'rgba(255, 107, 107, 1)',
      }
    },
  },
  plugins: [],
}