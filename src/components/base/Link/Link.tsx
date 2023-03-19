import { useContext } from 'react'
import { LinkContext, useEventTracking } from 'components/context'

import { isEmpty } from 'utils'

import { Link as MuiLink } from '@mui/material'
import DomLink from 'next/link'

import type { TrackValues } from 'components/context'

import type { LinkProps } from './Link_d'

const getTrackValues = (tracking: { category?: string; label?: string }) => {
  let trackValues = {}

  if (!isEmpty(tracking?.category)) {
    trackValues = { category: tracking?.category }
  }
  if (!isEmpty(tracking?.label)) {
    trackValues = { ...trackValues, label: tracking?.label }
  }

  return trackValues
}

const Link = ({
  to = '',
  href = '',
  tracking = { category: '', label: '' },
  onClick = null,
  children,
  ...props
}: LinkProps) => {
  const { linkOverrides } = useContext(LinkContext)
  const eventTracking = useEventTracking({ action: 'click' })

  const handleClick = (event: React.MouseEvent) => {
    const trackValues: TrackValues = getTrackValues(tracking)

    if (eventTracking.track && !isEmpty(trackValues)) {
      eventTracking.track(trackValues)
    }
    if (onClick) {
      onClick(event)
    }
  }

  let linkHref = to || href

  linkOverrides?.forEach(linkOverride => {
    if (linkOverride.routes.includes(linkHref)) {
      linkHref = `${linkOverride.domain}${linkHref}`
    }
  })

  return (
    <DomLink href={linkHref} passHref>
      <MuiLink onClick={handleClick} {...props}>
        {children}
      </MuiLink>
    </DomLink>
  )
}

export default Link
