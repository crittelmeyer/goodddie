export enum PhoenixLogoColorMode {
  dark,
  light,
  grey,
  primary
}

export type PhoenixLogoProps = {
  mode?: PhoenixLogoColorMode
  color?: string
  width?: number
  height?: number
  className?: string
}
