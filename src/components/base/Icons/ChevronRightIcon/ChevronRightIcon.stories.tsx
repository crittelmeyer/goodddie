/* eslint-disable storybook/default-exports */
import { ChevronRightIcon } from 'components/base'

import type { Story } from '@storybook/react/types-6-0'
import type { ComponentProps } from 'react'

type Props = ComponentProps<typeof ChevronRightIcon>

const Template: Story<Props> = args => <ChevronRightIcon {...args} />

export const ChevronRight = Template.bind({})
ChevronRight.args = {
  color: 'primary',
  htmlColor: 'red',
  titleAccess: 'Test title access',
  viewBox: '0 0 24 24'
}
