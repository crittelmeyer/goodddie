/* eslint-disable storybook/default-exports */
import { MinusIcon } from 'components/base'

import type { Story } from '@storybook/react/types-6-0'
import type { ComponentProps } from 'react'

type Props = ComponentProps<typeof MinusIcon>

const Template: Story<Props> = args => <MinusIcon {...args} />

export const Minus = Template.bind({})
Minus.args = {
  color: 'primary',
  htmlColor: 'red',
  titleAccess: 'Test title access',
  viewBox: '0 0 24 24'
}
