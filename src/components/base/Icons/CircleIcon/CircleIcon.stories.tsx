/* eslint-disable storybook/default-exports */
import { CircleIcon } from 'components/base'

import type { Story } from '@storybook/react/types-6-0'
import type { ComponentProps } from 'react'

type Props = ComponentProps<typeof CircleIcon>

const Template: Story<Props> = args => <CircleIcon {...args} />

export const Circle = Template.bind({})
Circle.args = {
  color: 'primary',
  htmlColor: 'red',
  titleAccess: 'Test title access',
  viewBox: '0 0 24 24'
}
