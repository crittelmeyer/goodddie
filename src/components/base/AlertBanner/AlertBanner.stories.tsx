import { BoxIcon, Link } from 'components'
import { AlertBanner } from 'components/base'

import { makeStyles } from 'utils'

import { Typography } from '@mui/material'

import type { Story } from '@storybook/react/types-6-0'
import type { ComponentProps } from 'react'
import type { Theme } from '@mui/material'

type Props = ComponentProps<typeof AlertBanner>

const useStyles = makeStyles()((theme: Theme) => ({
  myAlert: {
    backgroundColor: theme.palette.grey[200],
    boxShadow: 'none'
  },
  link: {
    fontWeight: 'bold',
    textDecoration: 'underline'
  }
}))

export default {
  title: 'Base/AlertBanner'
}

const Template: Story<Props> = args => {
  const { classes } = useStyles()

  return (
    <AlertBanner className={classes.myAlert} icon={<BoxIcon />} {...args}>
      <div>Explanation text</div>
      <Link className={classes.link} href="/" rel="noopener noreferrer" target="_blank">
        <Typography>Text with link</Typography>
      </Link>
    </AlertBanner>
  )
}

export const Basic = Template.bind({})

export const BasicWithoutIcon = Template.bind({})
BasicWithoutIcon.args = {
  icon: false
}
