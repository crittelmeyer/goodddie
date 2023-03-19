import Banner from './Banner'

import type { Story } from '@storybook/react/types-6-0'
import type { ComponentProps } from 'react'

type Props = ComponentProps<typeof Banner>

export default {
  title: 'Base/Banner'
}

const Template: Story<Props> = args => <Banner {...args} />

export const Basic = Template.bind({})
Basic.args = {
  title: 'This is a Banner'
}
