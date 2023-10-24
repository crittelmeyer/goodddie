import { createContext, useContext } from 'react'
import ReactGA from 'react-ga4'

import type { AnalyticsProviderProps } from './AnalyticsProvider_d'

const defaultValue: AnalyticsProviderProps = {}

const AnalyticsContext = createContext<AnalyticsProviderProps>(defaultValue)

AnalyticsContext.displayName = 'AnalyticsContext'

export const useAnalytics = () => {
  const analytics = useContext<AnalyticsProviderProps>(AnalyticsContext)

  return { gaEvent: analytics.event, pageView: analytics.pageView }
}

const AnalyticsProvider = ({ analyticsId, children }: AnalyticsProviderProps) => {
  if (analyticsId) ReactGA.initialize(analyticsId)
  const event = (props?: any) => ReactGA.event(props)
  const pageView = (path: string, title: string) => ReactGA.send({ hitType: 'pageview', page: path, title })

  return <AnalyticsContext.Provider value={{ event, pageView }}>{children}</AnalyticsContext.Provider>
}

export default AnalyticsProvider
