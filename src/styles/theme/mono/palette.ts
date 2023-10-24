import { colors as MUIColors, darken, lighten } from '@mui/material'

import type { PaletteMode } from '@mui/material'

const colors = {
  black: '#050505',
  blue: '#275193',
  clay: '#fae9df',
  darkGreen: '#3b4d2e',
  darkOrange: '#313638',
  fog: '#cedede',
  green: '#52821e',
  grey: MUIColors.grey,
  kiwi: '#daea78',
  lightSage: '#eaf5eb',
  orange: '#fc663d',
  lightOrange: '#e0dfd5',
  lightGreen: '#f8f9f2',
  pink: '#daccdb',
  lightRed: '#fcecea',
  red: '#ff2825',
  sage: '#ace2af',
  skyBlue: '#b7dde1',
  stone: '#f4f3f1',
  teal: '#00ab94'
}

export const getMonoPalette = (mode: PaletteMode = 'light') => ({
  mode,
  ...(mode === 'light'
    ? {
        primary: {
          main: MUIColors.grey[700],
          light: colors.kiwi,
          dark: MUIColors.grey[800]
        },
        secondary: {
          main: colors.teal,
          light: lighten(colors.teal, 0.9),
          dark: darken(colors.teal, 0.6)
        },
        text: {
          primary: MUIColors.grey[800],
          secondary: MUIColors.grey[600]
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
          default: MUIColors.grey[50],
          paper: colors.stone
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
          contrastText: colors.green
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
          main: MUIColors.grey[300],
          light: colors.lightOrange,
          dark: colors.darkOrange
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
          contrastText: colors.green
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
