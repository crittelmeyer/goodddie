/* eslint-disable storybook/default-exports */
import { AlertInfoIcon } from 'components/base'

import type { Story } from '@storybook/react/types-6-0'
import type { ComponentProps } from 'react'

type Props = ComponentProps<typeof AlertInfoIcon>

const Template: Story<Props> = args => <AlertInfoIcon {...args} />

export const AlertInfo = Template.bind({})
AlertInfo.args = {
  color: 'primary',
  htmlColor: 'red',
  titleAccess: 'Test title access',
  viewBox: '0 0 24 24'
}
