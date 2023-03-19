import LoadingButton from './LoadingButton'

import type { Story } from '@storybook/react/types-6-0'
import type { LoadingButtonProps } from './LoadingButton_d'

const argTypes = {
  color: {
    name: 'color',
    description: 'Color of the button',
    control: {
      type: 'radio'
    },
    options: ['primary', 'secondary', 'error', 'success']
  },
  loading: {
    name: 'loading',
    description: 'If true, loading indicator is shown',
    control: {
      type: 'boolean'
    }
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
    options: ['contained', 'outlined', 'default', 'returnOptionPrimary', 'returnOptionSecondary']
  }
}

export default { title: 'Base/Buttons/LoadingButton', argTypes }

const Template: Story<LoadingButtonProps> = args => <LoadingButton {...args}>{args.children}</LoadingButton>

export const Basic = Template.bind({})
Basic.args = {
  children: 'Loading Button',
  color: 'primary',
  loading: false,
  size: 'medium',
  tracking: {
    category: 'Foo',
    label: 'Storybook LoadingButton Label'
  },
  variant: 'contained'
}
