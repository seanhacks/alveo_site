/** @type {import('tailwindcss').Config} */
import flowbitePlugin from 'flowbite/plugin';

export default {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
  ],

  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontFamily: 'Alata, sans-serif'
            },
            p: {
              fontFamily: 'Khula, sans-serif'
            }
          }
        }
      },
      colors: {
        alveoblue: '#002B47',
        alveogray: '#F7F7F7',
        lightblack: '#040406',
        darkgray: '#282F3B',
        offwhite: '#F0F3F9'
      },
      fontFamily: {
        khula: 'Khula, sans-serif',
        inter: 'Inter Variable, sans-serif',
        alata: 'Alata, sans-serif'
      }
    }
  },

  plugins: [flowbitePlugin]
};
