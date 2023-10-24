import { createTheme } from '@mui/material'

import { typography } from '../common/typography'

import { getMonoPalette } from './palette'

const SPACING_FACTOR = 8
const BORDER_RADIUS = 8

export const monoTheme = createTheme({
  palette: getMonoPalette(),
  typography,
  spacing: SPACING_FACTOR,
  shape: { borderRadius: BORDER_RADIUS }
})

export default monoTheme
