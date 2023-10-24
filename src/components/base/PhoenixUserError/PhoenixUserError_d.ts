import type { ReactNode } from 'react'

export interface PhoenixUserErrorClasses {
  root: string
  container: string
  title: string
  subtitle: string
  button: string
}

export type PhoenixUserErrorProps = {
  classNames?: Partial<PhoenixUserErrorClasses>
  showBackButton: boolean
  subtitle?: string | ReactNode
  title: string
}
