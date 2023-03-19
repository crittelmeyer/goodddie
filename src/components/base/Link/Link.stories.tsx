import { Link } from 'components/base'

import type { Story } from '@storybook/react/types-6-0'
import type { ComponentProps } from 'react'

type Props = ComponentProps<typeof Link>

const argTypes = {
  target: {
    name: 'target',
    description: 'Target for the link',
    control: {
      type: 'text'
    }
  },
  to: {
    name: 'to',
    description: 'What the link links to',
    control: {
      type: 'text'
    }
  },
  rel: {
    name: 'rel',
    description: 'The rel value for the link',
    control: {
      type: 'text'
    }
  },
  value: {
    name: 'value',
    description: 'Link text',
    control: {
      type: 'text'
    }
  }
}

export default {
  title: 'Base/Link',
  argTypes
}

const Template: Story<Props> = args => <Link {...args}>{args.value}</Link>

export const Basic = Template.bind({})
Basic.args = {
  to: '/foo',
  tracking: {
    category: 'Storybook Link',
    label: 'Storybook Link clicked'
  },
  value: 'Link Text'
}
