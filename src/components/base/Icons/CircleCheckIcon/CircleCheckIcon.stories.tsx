/* eslint-disable storybook/default-exports */
import { CircleCheckIcon } from 'components/base'

import type { Story } from '@storybook/react/types-6-0'
import type { ComponentProps } from 'react'

type Props = ComponentProps<typeof CircleCheckIcon>

export default {
  title: 'Icons/CircleCheckIcon'
}
const Template: Story<Props> = args => <CircleCheckIcon {...args} />

export const CircleCheck = Template.bind({})
CircleCheck.args = {
  viewBox: '0 0 64 64'
}
