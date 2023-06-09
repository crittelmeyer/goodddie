import UntappedError from './UntappedError'

import type { Story } from '@storybook/react/types-6-0'
import type { UntappedErrorProps } from './UntappedError_d'

export default { title: 'Base/UntappedError' }

const Template: Story<UntappedErrorProps> = args => <UntappedError {...args} />

export const Basic = Template.bind({})
Basic.args = {
  componentStack: '',
  stack: '',
  statusCode: 504,
  text: 'Error',
  subtext: 'Subtext Error'
}
