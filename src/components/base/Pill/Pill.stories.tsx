import Pill from './Pill'

import type { Story } from '@storybook/react/types-6-0'
import type { ComponentProps } from 'react'

type Props = ComponentProps<typeof Pill>

const argTypes = {
  className: {
    name: 'className',
    description: 'CSS class name applied to root element',
    control: { type: 'text' }
  },
  type: {
    name: 'Pill type',
    description: 'Change pill type',
    control: { type: 'radio', options: ['return', 'refund', 'exchange', null], required: false }
  }
}

export default {
  title: 'Base/Pill',
  argTypes
}

const Template: Story<Props> = args => <Pill {...args} />

export const Basic = Template.bind({})
Basic.args = {
  className: '',
  type: null,
  children: 'Label: 10'
}

export const BasicExchange = Template.bind({})
BasicExchange.args = {
  className: '',
  type: 'exchange',
  quantity: 1
}

export const BasicRefund = Template.bind({})
BasicRefund.args = {
  className: '',
  type: 'refund',
  quantity: 1
}

export const BasicReturn = Template.bind({})
BasicReturn.args = {
  className: '',
  type: 'return',
  quantity: 1
}
