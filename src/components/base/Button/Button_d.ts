import type { ButtonProps as MuiButtonProps } from '@mui/material'

export type ButtonProps = MuiButtonProps & {
  tracking?: {
    category?: string
    label?: string
  }
}
