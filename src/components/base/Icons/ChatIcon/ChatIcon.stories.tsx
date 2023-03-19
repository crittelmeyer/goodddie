/* eslint-disable storybook/default-exports */
import { ChatIcon } from 'components/base'

import type { Story } from '@storybook/react/types-6-0'
import type { ComponentProps } from 'react'

type Props = ComponentProps<typeof ChatIcon>

const Template: Story<Props> = args => <ChatIcon {...args} />

export const Chat = Template.bind({})
Chat.args = {
  color: 'primary',
  htmlColor: 'red',
  titleAccess: 'Test title access',
  viewBox: '0 0 24 24'
}
