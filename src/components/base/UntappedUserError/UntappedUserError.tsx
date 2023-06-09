import { Button } from 'components/base'

import { makeStyles } from 'utils'

import { Typography } from '@mui/material'

import type { UntappedUserErrorProps } from './UntappedUserError_d'

const useStyles = makeStyles({ name: 'ConsignmentsPage' })(theme => ({
  root: {
    background: theme.palette.primary.light,
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    textAlign: 'center',
    width: 640,
    padding: theme.spacing(2.5)
  },
  code: {
    color: theme.palette.grey[300]
  },
  title: {
    marginTop: theme.spacing(2),
    color: theme.palette.primary.dark
  },
  subtitle: {
    marginTop: theme.spacing(2),
    color: theme.palette.primary.dark,
    a: {
      textDecoration: 'underline',
      fontWeight: 'bold'
    }
  },
  button: {
    marginTop: theme.spacing(4),
    width: '100%',
    maxWidth: 360
  }
}))

const UntappedUserError = ({ classNames, showBackButton, subtitle, title }: UntappedUserErrorProps) => {
  const { classes, cx } = useStyles()

  return (
    <div className={cx(classes.root, classNames?.root)}>
      <div className={cx(classes.container, classNames?.container)}>
        <Typography className={cx(classes.title, classNames?.title)} variant="h1">
          {title}
        </Typography>
        {subtitle && (
          <Typography className={cx(classes.subtitle, classNames?.subtitle)} variant="body1">
            {subtitle}
          </Typography>
        )}
        {showBackButton && (
          <Button className={cx(classes.button, classNames?.button)} color="dark" href="/" size="large">
            Back To Home
          </Button>
        )}
      </div>
    </div>
  )
}

export default UntappedUserError
