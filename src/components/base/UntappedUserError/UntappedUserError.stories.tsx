import { Link } from 'components/base'

import UntappedUserError from './UntappedUserError'

import type { Story } from '@storybook/react/types-6-0'
import type { UntappedUserErrorProps } from './UntappedUserError_d'

export default { title: 'Base/UntappedUserError' }

const Template: Story<UntappedUserErrorProps> = args => <UntappedUserError {...args} />

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
