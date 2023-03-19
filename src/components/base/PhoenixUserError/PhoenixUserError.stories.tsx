import { Link } from 'components/base'

import PhoenixUserError from './PhoenixUserError'

import type { Story } from '@storybook/react/types-6-0'
import type { PhoenixUserErrorProps } from './PhoenixUserError_d'

export default { title: 'Base/PhoenixUserError' }

const Template: Story<PhoenixUserErrorProps> = args => <PhoenixUserError {...args} />

export const Basic = Template.bind({})
Basic.args = {
  title: 'Maybe the boxes ate it.',
  subtitle: (
    <>
      We couldn’t find the page you’re looking for. Need help?{' '}
      <Link href="sms:+18664665483">Text us at (866) 466-5483.</Link>
    </>
  ),
  showBackButton: true
}
