/* eslint-disable @crittelmeyer/no-duplicate-int */

export const h1 = {
  fontSize: '4.813rem',
  fontWeight: 400,
  lineHeight: 1
}
export const h2 = {
  fontSize: '3.5rem',
  fontWeight: 400,
  lineHeight: 1.15
}
export const h3 = {
  fontSize: '3.188rem',
  fontWeight: 700,
  lineHeight: 1.25
}
export const h4 = {
  fontSize: '2.25rem',
  fontWeight: 600,
  lineHeight: 1.1
}
export const h5 = {
  fontSize: '1.75rem',
  fontWeight: 400,
  lineHeight: 1.2
}
export const h6 = {
  fontSize: '1.25rem',
  fontWeight: 600,
  lineHeight: 1.25
}
export const h1Serif = {
  fontFamily: 'Butler',
  ...h1
}
export const h2Serif = {
  fontFamily: 'Butler',
  ...h2
}
export const h3Serif = {
  fontFamily: 'Butler',
  ...h3
}
export const h4Serif = {
  fontFamily: 'Butler',
  ...h4
}
export const h5Serif = {
  fontFamily: 'Butler',
  ...h5
}
export const h6Serif = {
  fontFamily: 'Butler',
  ...h6
}
export const body1 = {
  fontSize: '1rem',
  fontWeight: 400,
  lineHeight: 1.35
}
export const body2 = {
  fontSize: '0.95rem',
  fontWeight: 400,
  lineHeight: 1.4
}
export const body3 = {
  fontSize: '0.875rem',
  fontWeight: 400,
  lineHeight: 1.4
}
export const subtitle1 = {
  fontSize: '1rem',
  fontWeight: 600,
  lineHeight: 1.25
}
export const subtitle2 = {
  fontSize: '0.875rem',
  fontWeight: 600,
  lineHeight: 1.4
}
export const caption = {
  fontSize: '0.688rem',
  fontWeight: 400,
  lineHeight: 1.35
}
export const overline = {
  fontSize: '0.75rem',
  fontWeight: 400,
  lineHeight: 1.35
}

export const variants = {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  h1Serif,
  h2Serif,
  h3Serif,
  h4Serif,
  h5Serif,
  h6Serif,
  body1,
  body2,
  body3,
  subtitle1,
  subtitle2,
  caption,
  overline
}

export const typography = {
  fontFamily: '"Montserrat", sans-serif',
  ...variants
}
