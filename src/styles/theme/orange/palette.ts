import { colors as MUIColors } from '@mui/material'

import type { PaletteMode } from '@mui/material'

const colors = {
  black: '#050505',
  blue: '#203f59',
  clay: '#fae9df',
  fog: '#cedede',
  grey: MUIColors.grey,
  kiwi: '#daea78',
  lightSage: '#eaf5eb',
  orange: '#ff6c2f',
  lightOrange: '#ffedd9',
  darkOrange: '#6c2605',
  lightGreen: '#f8f9f2',
  pink: '#daccdb',
  lightRed: '#fcecea',
  red: '#ff2825',
  sage: '#ace2af',
  skyBlue: '#b7dde1',
  stone: '#f4f3f1'
}

export const getOrangePalette = (mode: PaletteMode = 'light') => ({
  mode,
  ...(mode === 'light'
    ? {
        primary: {
          main: colors.orange,
          light: colors.lightOrange,
          dark: '#6c2605'
        },
        secondary: {
          main: '#546e32'
        },
        text: {
          primary: colors.black,
          secondary: MUIColors.grey[600]
        },
        error: {
          main: '#0C0C0C',
          light: '#ffffff'
        },
        warning: {
          main: colors.orange,
          light: colors.lightOrange
        },
        background: {
          default: MUIColors.grey[50],
          paper: 'white'
        },

        /** @see expanded.ts to add more custom palette options as needed */
        accent: {
          main: colors.sage,
          light: colors.lightSage
        },
        accent2: {
          main: colors.skyBlue
        },
        accent3: {
          main: colors.pink
        },
        accent4: {
          main: colors.kiwi
        },
        accent5: {
          main: colors.clay
        },
        neutral: {
          main: 'white',
          dark: colors.fog,
          contrastText: colors.orange
        },
        neutral2: {
          main: MUIColors.grey[200]
        },
        neutral3: {
          main: colors.stone
        },
        dark: {
          main: MUIColors.grey[900],
          contrastText: 'white'
        }
      }
    : {
        primary: {
          main: colors.orange,
          light: colors.darkOrange,
          dark: colors.lightOrange
        },
        secondary: {
          main: colors.blue
        },
        text: {
          primary: colors.stone,
          secondary: MUIColors.grey[100]
        },
        error: {
          main: colors.red,
          light: colors.lightRed
        },
        warning: {
          main: colors.orange,
          light: colors.lightOrange
        },
        background: {
          default: MUIColors.grey[900],
          paper: colors.black
        },

        /** @see expanded.ts to add more custom palette options as needed */
        accent: {
          main: colors.sage,
          light: colors.lightSage
        },
        accent2: {
          main: colors.skyBlue
        },
        accent3: {
          main: colors.pink
        },
        accent4: {
          main: colors.kiwi
        },
        accent5: {
          main: colors.clay
        },
        neutral: {
          main: colors.black,
          dark: colors.fog,
          contrastText: colors.orange
        },
        neutral2: {
          main: MUIColors.grey[200]
        },
        neutral3: {
          main: colors.stone
        },
        dark: {
          main: MUIColors.grey[900],
          contrastText: colors.stone
        }
      })
})
