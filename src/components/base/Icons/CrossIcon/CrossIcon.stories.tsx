/* eslint-disable storybook/default-exports */
import { CrossIcon } from 'components/base'

import type { Story } from '@storybook/react/types-6-0'
import type { ComponentProps } from 'react'

type Props = ComponentProps<typeof CrossIcon>

const Template: Story<Props> = args => <CrossIcon {...args} />

export const Cross = Template.bind({})
Cross.args = {
  color: 'primary',
  htmlColor: 'red',
  titleAccess: 'Test title access',
  viewBox: '0 0 24 24'
}
