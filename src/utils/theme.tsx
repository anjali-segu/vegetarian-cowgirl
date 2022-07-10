import {createTheme} from '@mui/material/styles'

export const white = 'rgba(255, 255, 255, .97)'
export const black = 'rgba(0, 0, 0, .97)'
export const beige = 'rgba(250, 234, 185, 1)'
export const gray = 'rgba(245, 245, 245, 1)'
export const lightbeige = 'rgba(245, 236, 228, 1)'
export const lightblack = 'rgba(0, 0, 0, 0.7)'
export const charcoal = 'rgba(13, 13, 13, 1)'
export const tan = 'rgba(225, 168, 122,1)'


export const theme = createTheme({
  // Any overrides will go here ..
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
        containedPrimary: {
          color: white,
          border: `1px solid ${tan}`,
          backgroundColor: 'transparent',
          borderRadius: 0,
          '&:hover': {
            color: black,
            backgroundColor: tan,
          },
        },
        containedSecondary: {
          color: white,
          border: `1px solid ${white}`,
          backgroundColor: 'transparent',
          borderRadius: 0,
          '&:hover': {
            color: black,
            backgroundColor: white,
          },
        },
        containedSizeLarge: {
          paddingBottom: '16px',
          paddingLeft: '32px',
          paddingRight: '32px',
          paddingTop: '16px',
        }
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          boxShadow: 'none',
          overflow: 'unset',
        }
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 0,
        }
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          alignItems: 'center',
        },
        colorPrimary: {
          backgroundColor: 'transparent',
          boxShadow: 'none',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontFamily: 'Poly, serif',
        },
        h2: {
          fontFamily: 'Poly, serif',
        },
        h3: {
          fontFamily: 'Poly, serif',
        },
        h4: {
          fontFamily: 'Poly, serif',
          color: lightblack,
        },
        h5: {
          fontFamily: 'Ubuntu, sans-serif',
          color: lightblack,
        },
        h6: {
          fontFamily: 'Ubuntu, sans-serif',
          color: lightblack,
        },
      },
    }
  },
  spacing: (factor: number) => `${0.25 * factor}rem`,
  typography: {
    fontFamily: 'Karla, Quicksand, open sans, sans-serif',
  },
  palette: {
    primary: {
      main: '#f09b85',
    },
  },
})
