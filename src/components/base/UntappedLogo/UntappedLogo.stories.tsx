import { UntappedLogo, UntappedLogoColorMode } from 'components/base'

import type { Story } from '@storybook/react/types-6-0'
import type { ComponentProps } from 'react'

type Props = ComponentProps<typeof UntappedLogo>

const argTypes = {
  className: {
    name: 'className',
    description: 'CSS class name applied to root element',
    control: {
      type: 'text'
    }
  },
  height: {
    name: 'height',
    description: 'Height (in px) of the component',
    control: {
      type: 'number'
    }
  },
  mode: {
    name: 'mode',
    description: 'Color mode of the logo (dark, grey, light, or primary)',
    options: ['dark', 'grey', 'light', 'primary'],
    control: {
      type: 'select'
    }
  },
  width: {
    name: 'width',
    description: 'Width (in px) of the component',
    control: {
      type: 'number'
    }
  }
}

export default {
  title: 'Base/UntappedLogo',
  argTypes
}

const Template: Story<Props> = args => <UntappedLogo {...args} />

export const Basic = Template.bind({})
Basic.args = {
  className: '',
  height: 30,
  color: 'black',
  mode: UntappedLogoColorMode.dark,
  width: 120
}
