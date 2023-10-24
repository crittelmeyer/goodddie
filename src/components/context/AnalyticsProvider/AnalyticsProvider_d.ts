export type AnalyticsProviderProps = {
  analyticsId?: string
  children?: React.ReactNode
  event?(options: any): void
  pageView?(path: string, title?: string): void
}
