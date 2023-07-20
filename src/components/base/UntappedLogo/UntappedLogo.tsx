// import { useTheme } from '@mui/material'
import { makeStyles } from 'utils'

import { Typography } from '@mui/material'
import Image from 'next/image'

// import { UntappedLogoColorMode } from './UntappedLogo_d'
import type { UntappedLogoProps } from './UntappedLogo_d'

const useStyles = makeStyles()(theme => ({
  root: {
    alignItems: 'center',
    display: 'flex'
  },
  text: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    marginLeft: theme.spacing(1)
  },
  topText: {
    color: '#275193',
    fontSize: '1.5rem'
  },
  bottomText: {
    color: '#666680'
  }
}))

export const UntappedLogo: React.FC<UntappedLogoProps> = () => {
  const { classes } = useStyles()
  // const { mode, color } = props
  // const theme = useTheme()
  // const logoColors = {
  //   [UntappedLogoColorMode.dark]: 'black',
  //   [UntappedLogoColorMode.light]: 'white',
  //   [UntappedLogoColorMode.grey]: theme.palette.text.secondary,
  //   [UntappedLogoColorMode.primary]: theme.palette.primary.main
  // }
  // const fillColor = color ?? logoColors[mode || UntappedLogoColorMode.dark]

  // console.log(fillColor)

  // const logoNum = Math.floor(Math.random() * 3)

  return (
    <div className={classes.root}>
      <Image alt="Untapped Logo" height={65} src="https://untapped-assets.s3.amazonaws.com/logo-tree.png" width={65} />
      <div className={classes.text}>
        <Typography className={classes.topText} color="primary" variant="h6">
          UNTAPPED
        </Typography>
        <Typography className={classes.bottomText} color="primary" variant="h6">
          SOLUTIONS
        </Typography>
      </div>
    </div>
  )
}

export default UntappedLogo
