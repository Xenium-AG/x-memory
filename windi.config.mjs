import { defineConfig } from 'windicss/helpers'
import colors from 'windicss/colors'
export default defineConfig({
  //darkMode: 'media',
  plugins: [],
  theme: {
    extend: {
      colors: {
        banan: colors.coolGray,
      },
      keyframes: {
        wiggle: {
          '0%, 100%': {
            transform: 'rotate(-1deg)',
          },
          '50%': {
            transform: 'rotate(1deg)',
          },
        },
      },
      animation: {
        wiggle: 'wiggle .2s ease-in-out .5s 1 reverse both;',
      },
    },
  },
})
