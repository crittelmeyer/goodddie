import type { GridProps } from '@mui/material'

export type BannerProps = GridProps & {
  title: string
  className?: string
  onClick?(event: React.MouseEvent): void
}
