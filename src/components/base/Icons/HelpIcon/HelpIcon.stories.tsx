/* eslint-disable storybook/default-exports */
import { HelpIcon } from 'components/base'

import type { Story } from '@storybook/react/types-6-0'
import type { ComponentProps } from 'react'

type Props = ComponentProps<typeof HelpIcon>

const Template: Story<Props> = args => <HelpIcon {...args} />

export const Help = Template.bind({})
Help.args = {
  color: 'primary',
  htmlColor: 'red',
  titleAccess: 'Test title access',
  viewBox: '0 0 24 24'
}
