import Button from './Button'

import type { Story } from '@storybook/react/types-6-0'
import type { ButtonProps } from './Button_d'

const argTypes = {
  color: {
    name: 'color',
    description: 'Color of the button',
    control: {
      type: 'radio'
    },
    options: ['primary', 'secondary', 'error', 'success']
  },
  size: {
    name: 'size',
    description: 'Size of the button',
    control: {
      type: 'radio'
    },
    options: ['small', 'medium', 'large']
  },
  variant: {
    name: 'variant',
    description: 'Variant for the underlying MUI button',
    control: {
      type: 'radio'
    },
    options: ['contained', 'outlined', 'default']
  }
}

export default { title: 'Base/Buttons/Button', argTypes }

const Template: Story<ButtonProps> = args => <Button {...args}>{args.children}</Button>

export const Basic = Template.bind({})
Basic.args = {
  children: 'Button',
  color: 'primary',
  size: 'medium',
  tracking: {
    category: 'Foo',
    label: 'Storybook Button Label'
  },
  variant: 'contained'
}
