/* eslint-disable storybook/default-exports */
import InfoIcon from './InfoIcon'

import type { Story } from '@storybook/react/types-6-0'
import type { ComponentProps } from 'react'

type Props = ComponentProps<typeof InfoIcon>

const Template: Story<Props> = args => <InfoIcon {...args} />

export const Info = Template.bind({})
Info.args = {
  color: 'primary',
  htmlColor: 'red',
  titleAccess: 'Test title access',
  viewBox: '0 0 24 24'
}
