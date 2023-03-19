/* eslint-disable storybook/default-exports */
import { PlusIcon } from 'components/base'

import type { Story } from '@storybook/react/types-6-0'
import type { ComponentProps } from 'react'

type Props = ComponentProps<typeof PlusIcon>

const Template: Story<Props> = args => <PlusIcon {...args} />

export const Plus = Template.bind({})
Plus.args = {
  color: 'primary',
  htmlColor: 'red',
  titleAccess: 'Test title access',
  viewBox: '0 0 24 24'
}
