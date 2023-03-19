import type { Dispatch, SetStateAction } from 'react'

export type AdditionalValues = {
  affiliateTrackingId?: string
  applicationVersion?: string
  orderGuid?: string
  orderItemId?: string
  redirectUrl?: string
  status?: string
  trackingNumber?: string
  utmCampaign?: string
  utmContent?: string
  utmMedium?: string
  utmSource?: string
  utmTerm?: string
}

export type TrackValues = {
  action?: string
  additionalValues?: AdditionalValues
  category?: string
  label?: string
}

export type EventTrackingContextProps = {
  action?: string
  category?: string
  label?: string
  utmParameters?: any
  logMetrics?(args: any): void
  track?(trackValues: TrackValues): void
  setAction?: Dispatch<SetStateAction<string>>
  setCategory?: Dispatch<SetStateAction<string>>
  setLabel?: Dispatch<SetStateAction<string>>
  setUtmParameters?(utmParameters: any): void
}

export type EventTrackingProviderProps = {
  children: any
  initialAction?: string
  initialCategory?: string
  initialLabel?: string
  initialUtmParameters?: any
  trackingServiceUrl: string
}

export type Metrics = {
  name: 'CLS' | 'FCP' | 'FID' | 'LCP' | 'TTFB'
  value: string
}
