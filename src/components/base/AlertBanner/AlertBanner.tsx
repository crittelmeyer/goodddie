import { makeStyles } from 'utils'

import { Alert, Typography } from '@mui/material'

import type { AlertBannerProps } from './AlertBanner.d'

const useStyles = makeStyles()(theme => ({
  root: {
    textAlign: 'left',
    '& .MuiAlert-icon': {
      width: 46,
      display: 'flex',
      justifyContent: 'center',
      paddingLeft: theme.spacing(0.5)
    }
  }
}))

const AlertBanner = ({ className = '', icon, children, ...rest }: AlertBannerProps) => {
  const { classes, cx } = useStyles()

  return (
    <Alert className={cx(className, classes.root)} icon={icon || rest?.severity ? icon : false} {...rest}>
      <Typography variant="body3">{children}</Typography>
    </Alert>
  )
}

export default AlertBanner
