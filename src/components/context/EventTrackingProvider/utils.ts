import axios from 'axios'
import {
  browserName,
  browserVersion,
  isMobile,
  mobileModel,
  mobileVendor,
  osName,
  osVersion
} from 'react-device-detect'

import type { AdditionalValues, Metrics } from './EventTrackingProvider_d'

const post = (url: string, postData: string[]) => {
  axios.post(url, postData).catch(error => console.log(`postEvent.error`, error))
}

const commonPostData = (label?: string, action?: string, category?: string) => {
  let urlParams: string[] = []
  let domain = ''
  let referrerUrl = ''
  let sessionId = ''
  let url = ''

  // Need to check for window existence since this gets rendered server side and client side
  if (typeof window !== 'undefined') {
    urlParams = window.location.pathname.split('/')
    domain = document?.location?.host
    referrerUrl = document?.referrer
    sessionId = localStorage?.getItem('uuid')
    url = window?.location?.href.substring(0, 4000)
  }

  const findIdByFlowType = (flowType: 'orders' | 'shipments') => {
    const index = urlParams?.indexOf(flowType)
    const consignmentsIndex = urlParams?.indexOf('consignments')

    if (index >= 0) return urlParams[index + 1]

    const consignmentsFlowType = urlParams[consignmentsIndex + 1]

    const consignmentId = urlParams[consignmentsIndex + 2]

    if (flowType === consignmentsFlowType) return consignmentId

    return ''
  }

  return {
    action: action?.substring(0, 30),
    activityType: /^page[ _-]?view|visit|popup|server_.+/gi.test(action) ? 'non_interaction' : 'interaction',
    appType: isMobile ? 'mobile_web' : 'desktop_web',
    browserName: browserName,
    browserVersion: browserVersion,
    category: category?.substring(0, 500),
    domain,
    label: label?.substring(0, 500),
    mobileBrand: mobileVendor,
    mobileBrandModel: mobileModel,
    orderGuid: findIdByFlowType('orders'),
    osName,
    osVersion,
    referrerUrl,
    retailerId: urlParams?.[1] || '',
    sessionId,
    shipmentId: findIdByFlowType('shipments'),
    url
  }
}

export const postEvent = (
  url: string,
  label?: string,
  action?: string,
  category?: string,
  utmParameters?: any,
  additionalValues?: AdditionalValues
) => {
  post(url, {
    ...commonPostData(label, action, category),
    ...utmParameters,
    ...additionalValues
  })
}

const getPostDataFromMetrics = (metrics: Metrics) => {
  const metricToKeyMap = {
    CLS: 'cumulativeLayoutShift',
    FCP: 'firstContentfulPaint',
    FID: 'firstInputDelay',
    LCP: 'largestContentfulPaint',
    TTFB: 'timeToFirstByte'
  }

  return { [metricToKeyMap[metrics.name]]: metrics.value }
}

export const postMetrics = (
  url: string,
  metrics: Metrics,
  label?: string,
  action?: string,
  category?: string,
  utmParameters?: any
) => {
  post(url, {
    ...getPostDataFromMetrics(metrics),
    ...commonPostData(label, action, category),
    ...utmParameters
  })
}
