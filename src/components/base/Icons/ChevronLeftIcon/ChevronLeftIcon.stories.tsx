/* eslint-disable storybook/default-exports */
import { ChevronLeftIcon } from 'components/base'

import type { Story } from '@storybook/react/types-6-0'
import type { ComponentProps } from 'react'

type Props = ComponentProps<typeof ChevronLeftIcon>

const Template: Story<Props> = args => <ChevronLeftIcon {...args} />

export const ChevronLeft = Template.bind({})
ChevronLeft.args = {
  color: 'primary',
  htmlColor: 'red',
  titleAccess: 'Test title access',
  viewBox: '0 0 24 24'
}
