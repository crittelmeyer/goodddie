import type { AlertProps } from '@mui/material'

export type AlertBannerProps = AlertProps & {
  className?: string
  icon?: React.ReactNode
  children: React.ReactNode
}
