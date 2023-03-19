---
to: <%= absPath %>/<%= capitalizedComponentName %>.stories.tsx
---
import { ComponentProps } from 'react'
import { Story } from '@storybook/react/types-6-0'

import <%= capitalizedComponentName %> from './'

type Props = ComponentProps<typeof <%= capitalizedComponentName %>>

const argTypes = {
  label: {
    name: 'label',
    description: 'Description here',
    control: {
      type: 'text'
    }
  }
}

export default {
  title: '<%= h.capitalize(category) %>/<%= capitalizedComponentName %>',
  argTypes
}

const Template: Story<Props> = args => <<%= capitalizedComponentName %> {...args} />

export const Basic = Template.bind({})
Basic.args = {}
