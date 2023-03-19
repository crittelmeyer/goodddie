import { useState } from 'react'

import { makeStyles } from 'utils'

import Tooltip from './Tooltip'

import type { Story } from '@storybook/react/types-6-0'
import type { ComponentProps, MouseEvent } from 'react'

type Props = ComponentProps<typeof Tooltip>

const argTypes = {
  className: {
    name: 'className',
    description: 'CSS class name applied to root element',
    control: { type: 'text' }
  },
  dark: {
    name: 'Dark tooltip',
    description: 'Enable light or dark color',
    control: { type: 'boolean' }
  }
}

const useStyles = makeStyles()(() => ({
  root: {
    display: 'flex'
  }
}))

export default {
  title: 'Base/Tooltip',
  argTypes
}

const Template: Story<Props> = args => {
  const { classes } = useStyles()
  const [anchor, setAnchor] = useState<HTMLElement | null>(null)
  const [open, setOpen] = useState(false)
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchor(event.currentTarget)
    setOpen(val => !val)
  }
  const handleClose = () => {
    setAnchor(null)
    setOpen(val => !val)
  }

  return (
    <div className={classes.root}>
      <Tooltip {...args} anchorEl={anchor} handleClose={handleClose} open={open}>
        <div>Any</div>
        <div>Content</div>
        <div>Inside</div>
        <div>The</div>
        <div>Tooltip</div>
      </Tooltip>
      <div style={{ cursor: 'pointer' }} onClick={handleClick}>
        Click here
      </div>
    </div>
  )
}

export const Basic = Template.bind({})
Basic.args = {
  className: '',
  dark: true
}
