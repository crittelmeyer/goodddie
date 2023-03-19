import QuantityControl from './QuantityControl'

import type { Story } from '@storybook/react/types-6-0'
import type { ComponentProps } from 'react'

type Props = ComponentProps<typeof QuantityControl>

export default {
  title: 'Base/QuantityControl'
}

const Template: Story<Props> = args => <QuantityControl {...args} />

export const Basic = Template.bind({})
Basic.args = {
  alignStart: true,
  maxQuantity: 10,
  selectedQuantity: 1
}
