import type ReactGA from 'react-ga'

export type AnalyticsProviderProps = {
  analyticsId?: string
  children?: React.ReactNode
  event?(args: ReactGA.EventArgs, trackerNames?: ReactGA.TrackerNames): void
  pageView?(path: string, trackerNames?: ReactGA.TrackerNames, title?: string): void
}
