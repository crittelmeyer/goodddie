// import { useTheme } from '@mui/material'
import { makeStyles } from 'utils'

import { Typography } from '@mui/material'
import Image from 'next/image'

// import { PhoenixLogoColorMode } from './PhoenixLogo_d'
import type { PhoenixLogoProps } from './PhoenixLogo_d'

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

export const PhoenixLogo: React.FC<PhoenixLogoProps> = () => {
  const { classes } = useStyles()
  // const { mode, color } = props
  // const theme = useTheme()
  // const logoColors = {
  //   [PhoenixLogoColorMode.dark]: 'black',
  //   [PhoenixLogoColorMode.light]: 'white',
  //   [PhoenixLogoColorMode.grey]: theme.palette.text.secondary,
  //   [PhoenixLogoColorMode.primary]: theme.palette.primary.main
  // }
  // const fillColor = color ?? logoColors[mode || PhoenixLogoColorMode.dark]

  // console.log(fillColor)

  // const logoNum = Math.floor(Math.random() * 3)

  return (
    <div className={classes.root}>
      <Image alt="Phoenix Logo" height={65} src="https://phoenix-ai-assets.s3.amazonaws.com/logo-tree.png" width={65} />
      <div className={classes.text}>
        <Typography className={classes.topText} color="primary" variant="h6">
          Phoenix
        </Typography>
        <Typography className={classes.bottomText} color="primary" variant="h6">
          SOLUTIONS
        </Typography>
      </div>
    </div>
  )
}

export default PhoenixLogo
