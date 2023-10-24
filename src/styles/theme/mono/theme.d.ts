/// <reference types="react" />
import '@mui/styles'
declare module '@mui/material/styles/createPalette' {
  interface Palette {
    accent?: {
      main: string
      light: string
    }
    accent2?: {
      main: string
    }
    accent3?: {
      main: string
    }
    neutral?: {
      main: string
    }
    neutral2?: {
      main: string
    }
    neutral3?: {
      main: string
    }
    dark?: {
      main: string
    }
  }
  interface PaletteOptions {
    accent?: {
      main: string
      light: string
    }
    accent2?: {
      main: string
    }
    accent3?: {
      main: string
    }
    neutral?: {
      main: string
    }
    neutral2?: {
      main: string
    }
    neutral3?: {
      main: string
    }
    dark?: {
      main: string
    }
  }
}
declare module '@mui/material/styles' {
  interface TypographyVariants {
    body3: React.CSSProperties
    h1Serif: React.CSSProperties
    h2Serif: React.CSSProperties
    h3Serif: React.CSSProperties
    h4Serif: React.CSSProperties
    h5Serif: React.CSSProperties
    h6Serif: React.CSSProperties
  }
  interface TypographyVariantsOptions {
    body3?: React.CSSProperties
    h1Serif?: React.CSSProperties
    h2Serif?: React.CSSProperties
    h3Serif?: React.CSSProperties
    h4Serif?: React.CSSProperties
    h5Serif?: React.CSSProperties
    h6Serif?: React.CSSProperties
  }
}
declare module '@mui/material/styles/createTypography' {
  interface Typography {
    body3: React.CSSProperties
    h1Serif: React.CSSProperties
    h2Serif: React.CSSProperties
    h3Serif: React.CSSProperties
    h4Serif: React.CSSProperties
    h5Serif: React.CSSProperties
    h6Serif: React.CSSProperties
  }
  interface TypographyOptions {
    body3?: React.CSSProperties
    h1Serif?: React.CSSProperties
    h2Serif?: React.CSSProperties
    h3Serif?: React.CSSProperties
    h4Serif?: React.CSSProperties
    h5Serif?: React.CSSProperties
    h6Serif?: React.CSSProperties
  }
}
declare module '@mui/material/Typography/Typography' {
  interface TypographyPropsVariantOverrides {
    body3: true
    h1Serif: true
    h2Serif: true
    h3Serif: true
    h4Serif: true
    h5Serif: true
    h6Serif: true
  }
}
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    accent: true
    accent2: true
    accent3: true
    neutral: true
    neutral2: true
    neutral3: true
    dark: true
  }
  interface ButtonPropsVariantOverrides {
    flat: true
    returnOptionPrimary: true
    returnOptionSecondary: true
  }
}
