import type { ReactNode } from 'react'

export type PillProps = {
  className?: string
  children?: ReactNode
  quantity?: number | null
  type?: 'return' | 'refund' | 'exchange'
}
