import { createTheme } from '@mui/material'

import { typography } from '../common/typography'

import { getOrangePalette } from './palette'

const SPACING_FACTOR = 8
const BORDER_RADIUS = 8

export const orangeTheme = createTheme({
  palette: getOrangePalette(),
  typography,
  spacing: SPACING_FACTOR,
  shape: { borderRadius: BORDER_RADIUS }
})

export default orangeTheme
