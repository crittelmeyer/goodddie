import { useTheme } from '@mui/material'

import { PhoenixLogoColorMode } from './PhoenixLogo_d'

import type { PhoenixLogoProps } from './PhoenixLogo_d'

export const PhoenixLogo: React.FC<PhoenixLogoProps> = props => {
  const { mode, color } = props
  const theme = useTheme()
  const logoColors = {
    [PhoenixLogoColorMode.dark]: 'black',
    [PhoenixLogoColorMode.light]: 'white',
    [PhoenixLogoColorMode.grey]: theme.palette.text.secondary,
    [PhoenixLogoColorMode.primary]: theme.palette.primary.main
  }
  const fillColor = color ?? logoColors[mode || PhoenixLogoColorMode.dark]

  console.log(fillColor)

  return <div>{'Phoenix'}</div>
}

export default PhoenixLogo
