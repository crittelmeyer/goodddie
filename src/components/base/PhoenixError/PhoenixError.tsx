import { isEmpty, makeStyles } from 'utils'

import { Typography } from '@mui/material'

import type { PhoenixErrorProps } from './PhoenixError_d'

const useStyles = makeStyles()(theme => ({
  root: {
    alignItems: 'center',
    backgroundColor: theme.palette.error.light,
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    justifyContent: 'center',
    padding: theme.spacing(4, 0),
    textAlign: 'center'
  },
  statusCodeAndText: {
    display: 'flex',
    flexDirection: 'column'
  },
  text: {
    alignItems: 'center',
    display: 'flex'
  },
  stack: {
    border: `solid 1px ${theme.palette.grey[400]}`,
    margin: theme.spacing(1, 1, 3),
    maxHeight: 300,
    overflow: 'scroll',
    padding: theme.spacing(1),
    textAlign: 'left',
    width: 1000
  }
}))

const statusCodes: { [code: number]: string } = {
  400: 'Bad Request',
  404: 'Page Not Found',
  405: 'Method Not Allowed',
  500: 'Internal Server Error'
}

const DEFAULT_TEXT = 'An unexpected error has occurred'

const PhoenixError = ({
  className = '',
  componentStack = '',
  stack = '',
  statusCode,
  text,
  subtext = ''
}: PhoenixErrorProps) => {
  const { classes, cx } = useStyles()

  const errorText = text || statusCodes[statusCode] || DEFAULT_TEXT

  return (
    <div className={cx(className, classes.root)}>
      <div className={classes.text}>
        {statusCode && <Typography variant="h6">{`${statusCode} |`}&nbsp;</Typography>}
        <Typography>{errorText}</Typography>
      </div>
      {stack && (
        <div className={classes.stack}>
          <Typography>
            {stack.split(' at ').map((line, index) => (
              <Typography key={index}>at {line}</Typography>
            ))}
          </Typography>
        </div>
      )}
      {componentStack && (
        <>
          <Typography>Component Stack</Typography>
          <div className={classes.stack}>
            <Typography>
              {componentStack
                .split(' at ')
                .filter(item => !isEmpty(item.trim()))
                .map((line, index) => (
                  <Typography key={index}>at {line}</Typography>
                ))}
            </Typography>
          </div>
        </>
      )}

      {subtext && <Typography variant="caption">{subtext}</Typography>}
    </div>
  )
}

PhoenixError.displayName = 'PhoenixError'

export default PhoenixError
