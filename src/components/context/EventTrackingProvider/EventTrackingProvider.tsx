/* eslint-disable @crittelmeyer/import-grouping */
import { createContext, useContext, useState } from 'react'
import { useAnalytics } from 'components/context/AnalyticsProvider'

import { isEmpty } from 'utils'

import { postEvent, postMetrics } from './utils'

import type { EventTrackingContextProps, EventTrackingProviderProps, TrackValues } from './EventTrackingProvider_d'

const EventTrackingContext = createContext({})

EventTrackingContext.displayName = 'EventTrackingContext'

export const useEventTracking = (props?: EventTrackingContextProps) => {
  const eventTracking = useContext<EventTrackingContextProps>(EventTrackingContext)

  // eventTracking.track won't exist if the consumer didn't wrap with an <EventTrackingProvider> component
  if (eventTracking.track) {
    return {
      track: (values?: TrackValues) => {
        const trackValues = {
          ...props,
          ...values
        }

        try {
          eventTracking.track(trackValues)
        } catch (ev) {
          console.error('Error occurred POSTing tracking event', ev)
        }
      },
      logMetrics: eventTracking.logMetrics,
      utmParameters: eventTracking.utmParameters,
      setUtmParameters: eventTracking.setUtmParameters
    }
  }

  return {}
}

const EventTrackingProvider = ({
  children,
  initialAction,
  initialCategory,
  initialLabel,
  initialUtmParameters,
  // NOTE: Would be nice to make top-level EventTrackingProvider require this prop but nested EventTrackingProviders not required (for now they are required all the way down)
  trackingServiceUrl
}: EventTrackingProviderProps) => {
  const [action, setAction] = useState<string>(initialAction)
  const [category, setCategory] = useState<string>(initialCategory)
  const [label, setLabel] = useState<string>(initialLabel)
  const { utmParameters: parentUtmParameters } = useEventTracking()
  const [utmParameters, setUtmParameters] = useState(initialUtmParameters || parentUtmParameters)

  const { gaEvent, pageView } = useAnalytics()

  const track = (trackValues?: TrackValues) => {
    const postTrackValues = {
      action: trackValues?.action || action,
      category: trackValues?.category || category,
      label: trackValues?.label || label
    }

    if (isEmpty(postTrackValues?.action) || isEmpty(postTrackValues?.category) || isEmpty(postTrackValues?.label)) {
      throw new Error(
        `Attempted to post activity tracking event with incomplete payload: ${JSON.stringify(postTrackValues)}`
      )
    }

    if (/^page[ _-]?view/gi.test(postTrackValues?.action)) {
      pageView(postTrackValues?.label)
    } else {
      gaEvent({
        category: postTrackValues?.category || category,
        action: postTrackValues?.action || action,
        label: postTrackValues?.label || label
      })
    }

    postEvent(
      trackingServiceUrl,
      postTrackValues?.label || label,
      postTrackValues?.action || action,
      postTrackValues?.category || category,
      utmParameters,
      trackValues?.additionalValues
    )
  }

  const logMetrics = (
    data: any,
    trackValues?: {
      action?: string
      category?: string
      label?: string
    }
  ) => {
    postMetrics(
      trackingServiceUrl,
      data,
      trackValues?.label || label,
      trackValues?.action || action,
      trackValues?.category || category,
      utmParameters
    )
  }

  return (
    <EventTrackingContext.Provider
      value={{
        action,
        category,
        label,
        utmParameters,
        logMetrics,
        track,
        setAction,
        setCategory,
        setLabel,
        setUtmParameters
      }}>
      {children}
    </EventTrackingContext.Provider>
  )
}

export default EventTrackingProvider
