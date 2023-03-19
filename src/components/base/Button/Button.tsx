import { useEventTracking } from 'components/context'

import { isEmpty } from 'utils'

import { Button as MuiButton } from '@mui/material'

import type { TrackValues } from 'components/context'

import type { ButtonProps } from './Button_d'

const Button = ({ children, tracking, onClick, ...props }: ButtonProps) => {
  const eventTracking = useEventTracking({ action: 'click' })

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    let trackValues: TrackValues = {}

    if (!isEmpty(tracking?.category)) {
      trackValues = { category: tracking.category }
    }
    if (!isEmpty(tracking?.label)) {
      trackValues = { ...trackValues, label: tracking.label }
    }

    if (eventTracking.track && !isEmpty(trackValues)) {
      eventTracking.track(trackValues)
    }

    onClick && onClick(event)
  }

  return (
    <MuiButton onClick={handleClick} {...props}>
      {children}
    </MuiButton>
  )
}

export default Button
