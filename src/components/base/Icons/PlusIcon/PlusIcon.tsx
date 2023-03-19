import { SvgIcon } from '@mui/material'

import type { SvgIconProps } from '@mui/material'

const PlusIcon = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <svg fill="none" height="25" viewBox="0 0 24 27" width="24" xmlns="http://www.w3.org/2000/svg">
      <path
        clipRule="evenodd"
        d="M11 5.96094V11.9609H5V13.9609H11V19.9609H13V13.9609H19V11.9609H13V5.96094H11Z"
        fill="#9B9B9B"
        fillRule="evenodd"
      />
    </svg>
  </SvgIcon>
)

export default PlusIcon
