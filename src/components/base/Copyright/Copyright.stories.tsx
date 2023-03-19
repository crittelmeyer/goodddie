import Copyright from './Copyright'

import type { Story } from '@storybook/react/types-6-0'
import type { ComponentProps } from 'react'

type Props = ComponentProps<typeof Copyright>

const argTypes = {
  type: {
    name: 'Copyright Type',
    description: 'The Copyright type you want to render',
    options: ['short', 'long'],
    control: {
      type: 'select',
      labels: {
        short: 'Short',
        long: 'Long'
      }
    }
  }
}

export default {
  title: 'Base/Copyright',
  argTypes
}

const Template: Story<Props> = args => <Copyright {...args} />

export const Short = Template.bind({})
Short.args = {
  type: 'short'
}

export const Long = Template.bind({})
Long.args = {
  type: 'long'
}
