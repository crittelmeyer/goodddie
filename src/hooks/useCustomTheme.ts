import { useMemo } from 'react'
import { useRouter } from 'next/router'

import { defaultTheme, getDefaultThemeOverrides, getOrangeThemeOverrides, orangeTheme, variants } from 'styles'

import { responsiveFontSizes, useMediaQuery } from '@mui/material'

import type { Palette } from '@mui/material'

export type CustomThemeOptions = {
  basePalette: 'default' | 'orange'
  palette?: Palette
}

export const useCustomTheme = ({ basePalette, palette }: CustomThemeOptions) => {
  const router = useRouter()

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const availableTheme: any = {
    default: { theme: defaultTheme, overrides: getDefaultThemeOverrides },
    orange: { theme: orangeTheme, overrides: getOrangeThemeOverrides }
  }
  const queryStringTheme = Object.keys(availableTheme).find(i => i === router?.query.theme)

  return useMemo(() => {
    if (queryStringTheme && !palette) {
      const newTheme = responsiveFontSizes(availableTheme[queryStringTheme].theme, {
        variants: Object.keys(variants) as any
      })

      return availableTheme[queryStringTheme].overrides(newTheme, prefersDarkMode)
    }

    if (!queryStringTheme && palette) {
      const newTheme = responsiveFontSizes(availableTheme[basePalette].theme, {
        variants: Object.keys(variants) as any
      })

      return availableTheme[basePalette].overrides(newTheme, prefersDarkMode, palette)
    }

    if (queryStringTheme && palette) {
      const newTheme = responsiveFontSizes(availableTheme[queryStringTheme].theme, {
        variants: Object.keys(variants) as any
      })

      return availableTheme[queryStringTheme].overrides(newTheme, prefersDarkMode, palette)
    }

    const newTheme = responsiveFontSizes(availableTheme[basePalette].theme, {
      variants: Object.keys(variants) as any
    })

    return availableTheme[basePalette].overrides(newTheme, prefersDarkMode)
  }, [prefersDarkMode])
}
