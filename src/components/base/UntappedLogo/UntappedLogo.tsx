import { useTheme } from '@mui/material'

import { UntappedLogoColorMode } from './UntappedLogo_d'

import type { UntappedLogoProps } from './UntappedLogo_d'

export const UntappedLogo: React.FC<UntappedLogoProps> = props => {
  const { mode, color } = props
  const theme = useTheme()
  const logoColors = {
    [UntappedLogoColorMode.dark]: 'black',
    [UntappedLogoColorMode.light]: 'white',
    [UntappedLogoColorMode.grey]: theme.palette.text.secondary,
    [UntappedLogoColorMode.primary]: theme.palette.primary.main
  }
  const fillColor = color ?? logoColors[mode || UntappedLogoColorMode.dark]

  console.log(fillColor)

  return <div>{'Untapped'}</div>
}

export default UntappedLogo
