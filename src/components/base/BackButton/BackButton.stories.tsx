import BackButton from './BackButton'

import type { Story } from '@storybook/react/types-6-0'
import type { ComponentProps } from 'react'

type Props = ComponentProps<typeof BackButton>

export default {
  title: 'Base/Buttons/BackButton'
}

const Template: Story<Props> = args => <BackButton {...args} />

export const Basic = Template.bind({})
Basic.args = {}
