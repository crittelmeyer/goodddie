/* eslint-disable storybook/default-exports */
import RedirectIcon from './RedirectIcon'

import type { Story } from '@storybook/react/types-6-0'
import type { ComponentProps } from 'react'

type Props = ComponentProps<typeof RedirectIcon>

const Template: Story<Props> = args => <RedirectIcon {...args} />

export const Redirect = Template.bind({})
Redirect.args = {
  color: 'primary',
  htmlColor: 'red',
  titleAccess: 'Test title access',
  viewBox: '0 0 24 24'
}
