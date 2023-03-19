import { createTheme } from '@mui/material'

import { typography } from '../common/typography'

import { getDefaultPalette } from './palette'

const SPACING_FACTOR = 8
const BORDER_RADIUS = 8

export const defaultTheme = createTheme({
  palette: getDefaultPalette(),
  typography,
  spacing: SPACING_FACTOR,
  shape: { borderRadius: BORDER_RADIUS }
})

export default defaultTheme
