import Loader from './Loader'

import type { Story } from '@storybook/react/types-6-0'
import type { ComponentProps } from 'react'

type Props = ComponentProps<typeof Loader>

export default {
  title: 'Base/Loader'
}

const Template: Story<Props> = args => <Loader {...args} />

export const Basic = Template.bind({})
Basic.args = {
  fullViewport: false,
  size: '64px'
}
