import { makeStyles } from 'utils'

import { Typography } from '@mui/material'

import type { PillProps } from './Pill_d'

const useStyles = makeStyles()(theme => ({
  root: {
    width: 'fit-content',
    borderRadius: Number(theme.shape.borderRadius) / 2,
    backgroundColor: theme.palette.grey[200],
    margin: theme.spacing(0.5, 0.5, 0.5, 0),
    padding: theme.spacing(0.5, 1)
  },
  return: { backgroundColor: theme.palette.accent5.main },
  refund: { backgroundColor: theme.palette.primary.main, color: theme.palette.common.white },
  exchange: { backgroundColor: theme.palette.accent4.main }
}))

const setLabel = ({ type, quantity }: { type: 'exchange' | 'refund' | 'return'; quantity: number }) => {
  const qty = quantity ? `: ${quantity}` : ''
  const labels = {
    exchange: 'Exchange',
    refund: 'Refunded',
    return: 'Return'
  }

  return `${labels[type] || 'N/A'}${qty}`
}

const Pill = ({ className, type, quantity, children }: PillProps) => {
  const { classes, cx } = useStyles()

  return (
    <Typography
      className={cx(classes.root, classes[type], className)}
      color="textPrimary"
      component="span"
      variant="subtitle2">
      {children ?? setLabel({ type, quantity })}
    </Typography>
  )
}

export default Pill
