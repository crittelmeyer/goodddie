import { makeStyles } from 'utils'

import { Box, Typography } from '@mui/material'

import type { BannerProps } from './Banner_d'

const useStyles = makeStyles()(theme => ({
  root: {
    backgroundColor: theme.palette.secondary.main,
    height: '15rem',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center'
  }
}))

const Banner = ({ title, className }: BannerProps) => {
  const { classes, cx } = useStyles()

  return (
    <Box className={cx(classes.root, className)}>
      <Typography className={classes.title} color="inherit" component="h1" variant="h2">
        {title}
      </Typography>
    </Box>
  )
}

export default Banner
