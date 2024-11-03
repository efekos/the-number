import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      colors: {
        'badgeBorder': '#272c46',
        'main-bg-dark': '#0c0d0f',
        'main-bg-light': '#fcfeff',
        'navbar-bg-dark': '#16181a',
        'navbar-bg-light': '#3486eb',
        'panel': {
          'dark': '#151718',
          'light': '#d5dee8',
          'header': {
            'dark': '#121314',
            'light': '#c3cbe3'
          },
          'darker':{
            'dark': '#1c1d20',
            'light': '#a3adb8'
          }
        },
        commission: {
          bg: {
            dark: '#0b0d17',
            light: '#deedff'
          },
          border: {
            dark: '#272c46',
            light: '#b6d0f0'
          }
        },
        input:{
          bg:{
            dark:'#2d3033',
            light:'#d8e1eb',
            hover: {
              dark: '#343943',
              light: '#edf5fc'
            }
          },
          border: {
            light: '#b3bec9',
            dark: '#595f64'
          },
          disabled: {
            bg:{
              dark: '#1e2022',
              light: '#ced7de'
            },
            border: {
              dark: '#4b5055',
              light: '#9da8b3'
            }
          }
        }
      },
      borderWidth: {
        '6': '6px'
      }
    },
    screens: {
      'sm': '1px',
      'md': '720px',
      'lg': '1000px'
    }
  },

  plugins: []
} satisfies Config;
