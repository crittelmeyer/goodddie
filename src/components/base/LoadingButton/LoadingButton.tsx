import { useEventTracking } from 'components/context'

import { isEmpty } from 'utils'

import { LoadingButton as MuiLoadingButton } from '@mui/lab'

import type { TrackValues } from 'components/context'

import type { LoadingButtonProps } from './LoadingButton_d'

const LoadingButton = ({ children, tracking, onClick, ...props }: LoadingButtonProps) => {
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
    <MuiLoadingButton onClick={handleClick} {...props}>
      {children}
    </MuiLoadingButton>
  )
}

export default LoadingButton
