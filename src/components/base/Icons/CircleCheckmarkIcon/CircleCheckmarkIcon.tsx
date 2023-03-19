import { SvgIcon } from '@mui/material'

import type { SvgIconProps } from '@mui/material'

const CircleCheckmarkIcon = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <circle cx="12" cy="12" r="12" />
    <path
      d="M17.3333 6L11.5048 16.6667L6 12.902"
      fill="none"
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </SvgIcon>
)

export default CircleCheckmarkIcon
