import type { LoadingButtonProps as MuiLoadingButtonProps } from '@mui/lab'

export type LoadingButtonProps = MuiLoadingButtonProps & {
  tracking?: {
    category?: string
    label?: string
  }
}
