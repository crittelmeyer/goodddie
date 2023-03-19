/* eslint-disable storybook/default-exports */
import BoxIcon from './BoxIcon'

import type { Story } from '@storybook/react/types-6-0'
import type { ComponentProps } from 'react'

type Props = ComponentProps<typeof BoxIcon>

const Template: Story<Props> = args => <BoxIcon {...args} />

export const Box = Template.bind({})
Box.args = {
  titleAccess: 'Test title access',
  viewBox: '0 0 24 24'
}
