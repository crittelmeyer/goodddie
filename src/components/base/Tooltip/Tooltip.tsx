import React from 'react'

import { makeStyles } from 'utils'

import { ClickAwayListener, Paper, Popper } from '@mui/material'

import type { TooltipProps } from './Tooltip_d'

const useStyles = makeStyles()(theme => ({
  root: {
    zIndex: theme.zIndex.appBar - 1,

    '& > div': {
      position: 'relative'
    },
    '&[data-popper-placement*="bottom"]': {
      '& > div': {
        marginTop: theme.spacing(1)
      },
      '& #arrow': {
        top: theme.spacing(-1),
        left: 0,
        marginTop: 0,
        width: theme.spacing(3),
        height: theme.spacing(3),
        '&::before': {
          borderWidth: '0 1em 1em 1em',
          borderColor: `transparent transparent ${theme.palette.background.paper} transparent`
        }
      }
    },
    '&[data-popper-placement*="top"]': {
      '& > div': {
        marginBottom: theme.spacing(1)
      },
      '& #arrow': {
        bottom: theme.spacing(-2),
        left: 0,
        marginBottom: theme.spacing(0),
        width: theme.spacing(3),
        height: theme.spacing(3),
        '&::before': {
          borderWidth: '1em 1em 0 1em',
          borderColor: `${theme.palette.background.paper} transparent transparent transparent`
        }
      }
    }
  },
  arrow: {
    height: theme.spacing(2),
    overflow: 'hiddem',
    position: 'absolute',
    width: theme.spacing(3),

    '&::before': {
      borderStyle: 'solid',
      content: '""',
      display: 'block',
      margin: 'auto',
      height: 0,
      width: 0
    }
  },
  container: {
    minWidth: 400,
    [theme.breakpoints.down('sm')]: {
      minWidth: 327
    },
    padding: theme.spacing(2)
  },
  rootDarkMode: {
    '&[data-popper-placement*="bottom"]': {
      '& #arrow': {
        '&::before': {
          borderColor:
            theme.palette.mode === 'light'
              ? `transparent transparent ${theme.palette.common.black} transparent`
              : `transparent transparent ${theme.palette.background.paper} transparent`
        }
      }
    },
    '&[data-popper-placement*="top"]': {
      '& #arrow': {
        '&::before': {
          borderColor:
            theme.palette.mode === 'light'
              ? `${theme.palette.common.black} transparent transparent transparent`
              : `${theme.palette.background.paper} transparent transparent transparent`
        }
      }
    }
  },
  containerDarkMode: {
    backgroundColor: theme.palette.mode === 'light' ? theme.palette.common.black : theme.palette.background.paper,
    color: theme.palette.mode === 'light' ? theme.palette.background.paper : theme.palette.common.black
  }
}))

const Tooltip = ({ anchorEl, open, handleClose, className = null, children, dark, ...rest }: TooltipProps) => {
  const { classes, cx } = useStyles()

  const [arrowRef, setArrowRef] = React.useState(null)

  return (
    <Popper
      anchorEl={anchorEl}
      className={cx(classes.root, className, { [classes.rootDarkMode]: dark })}
      disablePortal={true}
      modifiers={[{ name: 'arrow', enabled: true, options: { element: arrowRef } }]}
      open={open}
      {...rest}>
      <div>
        <div ref={setArrowRef} className={classes.arrow} id="arrow" />
        <ClickAwayListener onClickAway={handleClose}>
          <Paper
            className={cx(classes.container, { [classes.containerDarkMode]: dark })}
            elevation={4}
            onClick={handleClose}>
            {children}
          </Paper>
        </ClickAwayListener>
      </div>
    </Popper>
  )
}

export default Tooltip
