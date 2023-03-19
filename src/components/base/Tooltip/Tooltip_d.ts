import type { ReactNode } from 'react'
import type { PopperProps } from '@mui/material'

export type TooltipProps = PopperProps & {
  key?: string
  className?: string
  dark?: boolean
  children?: ReactNode
  handleClose: () => void
}
