export enum UntappedLogoColorMode {
  dark,
  light,
  grey,
  primary
}

export type UntappedLogoProps = {
  mode?: UntappedLogoColorMode
  color?: string
  width?: number
  height?: number
  className?: string
}
