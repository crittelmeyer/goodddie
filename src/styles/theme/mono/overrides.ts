/* eslint-disable @crittelmeyer/no-duplicate-int */
import font from 'styles/theme/common/font'

import { createTheme } from '@mui/material'

import { getMonoPalette } from './palette'

import type { Palette, Theme } from '@mui/material'

export const getMonoThemeOverrides = (theme: Theme, prefersDarkMode = false, palette: Palette) =>
  createTheme(theme, {
    components: {
      MuiCssBaseline: {
        // NOTE: We are using a template string here as a workaround because currently there is a bug when specifying multiple font faces
        // where only the last font face in the list is properly injected. See https://github.com/mui/material-ui/issues/24966
        styleOverrides: `
        p {
          margin: 0
        }
        ${font}
        `
      },
      MuiAccordion: {
        styleOverrides: {
          root: {
            backgroundColor: theme.palette.grey[200]
          }
        }
      },
      MuiAlert: {
        styleOverrides: {
          root: {
            padding: theme.spacing(1.5),
            boxShadow: theme.shadows[2]
          },
          standard: {
            backgroundColor: theme.palette.common.white,
            color: theme.palette.common.black
          },
          filled: {
            boxShadow: 'none'
          },
          filledError: {
            backgroundColor: theme.palette.error.light,
            color: theme.palette.error.main
          },
          icon: {
            padding: 0
          },
          message: {
            padding: 0
          }
        }
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            ...(theme.palette.mode === 'light'
              ? { backgroundColor: 'white' }
              : { backgroundColor: theme.palette.grey[900] }),
            boxShadow: theme.shadows[0],
            borderBottom: `1px solid ${theme.palette.grey[200]}`
          }
        }
      },
      MuiButton: {
        defaultProps: {
          variant: 'contained'
        },
        styleOverrides: {
          root: {
            borderRadius: 46,
            fontSize: 16,
            letterSpacing: '1px !important',
            lineHeight: 1.45,
            textTransform: 'none'
          },
          sizeLarge: {
            padding: theme.spacing(2, 3)
          },
          sizeMedium: {
            padding: theme.spacing(1, 5)
          },
          sizeSmall: {
            padding: theme.spacing(0.5, 2)
          },
          containedPrimary: {
            color: theme.palette.common.white,

            '&:hover': {
              color: theme.palette.common.white
            }
          },
          containedDark: {
            color: theme.palette.grey[900],

            '&:hover': {
              backgroundColor: theme.palette.common.black,
              color: theme.palette.common.white
            }
          },
          outlinedDark: {
            borderColor: theme.palette.grey[500],
            color: theme.palette.grey[900],
            '&:hover': {
              color: theme.palette.common.black,
              borderColor: theme.palette.common.black
            }
          }
        }
      },
      MuiCheckbox: {
        styleOverrides: {
          root: {
            borderRadius: theme.shape.borderRadius,
            color: theme.palette.grey[400],
            padding: 0,
            /**
             * height/width don't apply so svg, hence transform scale up
             */
            transform: 'scale(1.25)',
            '&.Mui-checked': {
              color: theme.palette.dark.main
            }
          }
        }
      },
      MuiDrawer: {
        styleOverrides: {
          paper: {
            borderRadius: theme.spacing(1, 1, 0, 0)
          }
        }
      },
      MuiFab: {
        styleOverrides: {
          root: {
            boxShadow: 'none'
          }
        }
      },
      MuiGrid: {
        styleOverrides: {
          item: {
            flexGrow: 1
          }
        }
      },
      MuiLink: {
        styleOverrides: {
          root: {
            cursor: 'pointer',
            textDecoration: 'none'
          }
        }
      },
      MuiLoadingButton: {
        defaultProps: {
          variant: 'contained'
        },
        styleOverrides: {
          root: {
            borderRadius: 46,
            fontSize: 16,
            letterSpacing: '1px !important',
            lineHeight: 1.45,
            textTransform: 'none'
          },
          sizeLarge: {
            padding: theme.spacing(2, 3)
          },
          sizeMedium: {
            padding: theme.spacing(1, 5)
          },
          sizeSmall: {
            padding: theme.spacing(0.5, 2)
          },
          containedDark: {
            '&:hover': {
              backgroundColor: theme.palette.common.black
            }
          },
          outlinedDark: {
            borderColor: theme.palette.grey[500],
            color: theme.palette.grey[900],
            '&:hover': {
              color: theme.palette.common.black,
              borderColor: theme.palette.common.black
            }
          }
        },
        variants: [
          {
            props: { variant: 'returnOptionPrimary' },
            style: {
              backgroundColor: theme.palette.accent.main,
              boxShadow: '0px 5px 13px rgba(72, 122, 60, 0.25)',
              borderRadius: '8px',

              '&:hover': {
                backgroundColor: theme.palette.accent.main,
                boxShadow: '0px 8px 16px rgba(72, 122, 60, 0.25)'
              }
            }
          },
          {
            props: { variant: 'returnOptionSecondary' },
            style: {
              backgroundColor: theme.palette.accent.light,
              boxShadow: '0px 5px 13px rgba(72, 122, 60, 0.25)',
              borderRadius: '8px',

              '&:hover': {
                backgroundColor: theme.palette.accent.light,
                boxShadow: '0px 8px 16px rgba(72, 122, 60, 0.25)'
              }
            }
          }
        ]
      },
      MuiMenuItem: {
        styleOverrides: {
          root: {
            '&.Mui-selected, &.Mui-selected:hover': {
              backgroundColor: 'white',
              fontWeight: 'bold'
            },
            fontSize: '1rem',

            paddingBottom: theme.spacing(2),
            paddingTop: theme.spacing(2)
          }
        }
      },
      MuiPaper: {
        styleOverrides: {
          rounded: {
            borderRadius: 8
          }
        }
      },
      MuiSelect: {
        styleOverrides: {
          root: {
            fontSize: '1rem',
            padding: 0,
            paddingLeft: theme.spacing(1),
            '&:focus': {
              backgroundColor: 'transparent'
            }
          }
        }
      },
      MuiCalendarPicker: {
        styleOverrides: {
          root: {
            backgroundColor: theme.palette.grey[50]
          }
        }
      },
      MuiPickersDay: {
        styleOverrides: {
          root: {
            backgroundColor: theme.palette.grey[50]
          }
        }
      }
    },
    // eslint-disable-next-line sonarjs/no-all-duplicated-branches
    palette: palette || getMonoPalette(prefersDarkMode ? 'dark' : 'light') // TODO: add 'dark' here when dark mode is ready
  })
