import { SvgIcon } from '@mui/material'

import type { SvgIconProps } from '@mui/material'

const CircleIcon = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <circle cx="12" cy="12" fill="white" r="11" stroke="currentColor" strokeWidth="2" />
  </SvgIcon>
)

export default CircleIcon
