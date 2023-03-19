import { useMemo } from 'react'
import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import {
  CssBaseline,
  responsiveFontSizes,
  ThemeProvider,
  useMediaQuery
} from '@mui/material'

import { defaultTheme, getDefaultThemeOverrides, getOrangeThemeOverrides, variants, orangeTheme } from 'styles'

import {
  AnalyticsProvider,
  EventTrackingProvider,
  LinkContext
} from 'components/context'

export const muiCache = createCache({
  key: 'mui',
  prepend: true
})

const Wrapper = ({ children }) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  const availableTheme = {
    default: { theme: defaultTheme, themeOverrides: getDefaultThemeOverrides },
    orange: { theme: orangeTheme, themeOverrides: getOrangeThemeOverrides }
  }
  const theme = useMemo(() => {
    const newTheme = responsiveFontSizes(availableTheme['default'].theme, {
      variants: Object.keys(variants)
    })

    return availableTheme['default'].themeOverrides(newTheme, prefersDarkMode)
  }, [prefersDarkMode])

  return (
    <AnalyticsProvider analyticsId={process.env.REACT_APP_GOOGLE_ANALYTICS_ID}>
      <EventTrackingProvider
        initialAction="Storybook action"
        initialCategory="Storybook category"
        trackingServiceUrl={process.env.EVENT_URL}>
        <LinkContext.Provider value={{ pathname: '' }}>
          <CacheProvider value={muiCache}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              {children}
            </ThemeProvider>
          </CacheProvider>
        </LinkContext.Provider>
      </EventTrackingProvider>
    </AnalyticsProvider>
  )
}

export const decorators = [
  Story => (
    <Wrapper>
      <Story />
    </Wrapper>
  )
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}