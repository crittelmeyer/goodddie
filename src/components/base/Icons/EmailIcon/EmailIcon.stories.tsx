/* eslint-disable storybook/default-exports */
import { EmailIcon } from 'components/base'

import type { Story } from '@storybook/react/types-6-0'
import type { ComponentProps } from 'react'

type Props = ComponentProps<typeof EmailIcon>

const Template: Story<Props> = args => <EmailIcon {...args} />

export const Email = Template.bind({})
Email.args = {
  color: 'primary',
  htmlColor: 'red',
  titleAccess: 'Test title access',
  viewBox: '0 0 24 24'
}
