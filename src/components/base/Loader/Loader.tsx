import { makeStyles } from 'utils'

import { CircularProgress } from '@mui/material'

import type { LoaderProps } from './Loader_d'

const useStyles = makeStyles()(() => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  },

  fullViewport: {
    height: '100vh'
  }
}))

const Loader = ({ className = '', size = '64px', fullViewport = false }: LoaderProps) => {
  const { classes, cx } = useStyles()

  return (
    <div className={cx(className, classes.root, { [classes.fullViewport]: fullViewport })}>
      <CircularProgress size={size} />
    </div>
  )
}

export default Loader
