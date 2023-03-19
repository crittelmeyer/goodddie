/* eslint-disable storybook/default-exports */
import { CircleOutlinedCheckmarkIcon } from 'components/base'

import type { Story } from '@storybook/react/types-6-0'
import type { ComponentProps } from 'react'

type Props = ComponentProps<typeof CircleOutlinedCheckmarkIcon>

const Template: Story<Props> = args => <CircleOutlinedCheckmarkIcon {...args} />

export const CircleOutlinedCheckmark = Template.bind({})
CircleOutlinedCheckmark.args = {
  color: 'primary',
  htmlColor: 'red',
  titleAccess: 'Test title access',
  viewBox: '0 0 24 24'
}
