import type { ReactNode } from 'react'

export interface UntappedUserErrorClasses {
  root: string
  container: string
  title: string
  subtitle: string
  button: string
}

export type UntappedUserErrorProps = {
  classNames?: Partial<UntappedUserErrorClasses>
  showBackButton: boolean
  subtitle?: string | ReactNode
  title: string
}
