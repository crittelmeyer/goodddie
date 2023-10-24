/* eslint-disable @crittelmeyer/import-grouping */
import { useState } from 'react'
import { MinusIcon, PlusIcon } from 'components/base/Icons'

import { makeStyles } from 'utils'

import { IconButton, Typography } from '@mui/material'

import type { QuantityControlProps } from './QuantityControl.d'

const MINUS_1 = -1
const PLUS_1 = 1
const ICON_SIZE = 36

const useStyles = makeStyles({ name: 'QuantityControl' })(theme => ({
  alignStart: {
    justifyContent: 'flex-start',
    WebkitJustifyContent: 'flex-start' // iOS requires this in this instance
  },
  root: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'flex-end',
    WebkitJustifyContent: 'flex-end' // iOS requires this in this instance
  },
  iconButton: {
    boxShadow: theme.shadows[2],
    width: ICON_SIZE,
    height: ICON_SIZE
  },
  number: {
    margin: theme.spacing(0, 2)
  }
}))

const QuantityControl = ({
  alignStart = false,
  className,
  maxQuantity,
  selectedQuantity,
  onClick,
  onQuantityChange
}: QuantityControlProps) => {
  const { classes, cx } = useStyles()
  const [quantity, setQuantity] = useState(selectedQuantity)

  const handleIconButtonClick = (modifier: number) => {
    if (quantity === maxQuantity && modifier === PLUS_1) return
    if (quantity === 1 && modifier === MINUS_1) return
    const newQuantity = modifier === PLUS_1 ? quantity + 1 : quantity - 1

    setQuantity(newQuantity)
    if (onQuantityChange) onQuantityChange(newQuantity)
  }
  const increment = () => handleIconButtonClick(PLUS_1)
  const decrement = () => handleIconButtonClick(MINUS_1)

  return (
    <div
      className={cx(classes.root, alignStart ? classes.alignStart : '', className ? className : '')}
      onClick={onClick}>
      <IconButton
        classes={{
          root: classes.iconButton
        }}
        color="secondary"
        disabled={quantity === 1}
        onClick={decrement}>
        <MinusIcon />
      </IconButton>
      <Typography className={classes.number} color="textSecondary" variant="body2">
        {quantity}
      </Typography>
      <IconButton
        classes={{
          root: classes.iconButton
        }}
        color="secondary"
        disabled={quantity === maxQuantity}
        onClick={increment}>
        <PlusIcon />
      </IconButton>
    </div>
  )
}

export default QuantityControl
