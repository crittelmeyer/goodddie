import { ChevronLeftIcon } from 'components/base'

import { makeStyles } from 'utils'

import { Fab } from '@mui/material'

import type { BackButtonProps } from './BackButton_d'

const useStyles = makeStyles()(theme => ({
  backButton: {
    backgroundColor: 'white',
    border: `1.4px solid ${theme.palette.grey[300]}`,
    textAlign: 'center'
  }
}))
const BackButton = ({ className, onClick }: BackButtonProps) => {
  const { classes, cx } = useStyles()

  return (
    <Fab className={cx(classes.backButton, className)} size="small" variant="circular" onClick={onClick}>
      <ChevronLeftIcon />
    </Fab>
  )
}

export default BackButton
