import PhoenixError from './PhoenixError'

import type { Story } from '@storybook/react/types-6-0'
import type { PhoenixErrorProps } from './PhoenixError_d'

export default { title: 'Base/PhoenixError' }

const Template: Story<PhoenixErrorProps> = args => <PhoenixError {...args} />

export const Basic = Template.bind({})
Basic.args = {
  componentStack: '',
  stack: '',
  statusCode: 504,
  text: 'Error',
  subtext: 'Subtext Error'
}
