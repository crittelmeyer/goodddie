export type LinkProps = {
  to?: string
  href?: string
  tracking?: {
    category?: string
    label?: string
  }
  onClick?(event: React.MouseEvent): void
  children: JSX.Element | JSX.Element[] | string

  [x: string]: any
}
