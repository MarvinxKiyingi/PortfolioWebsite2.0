import { createTheme } from '@mui/material/styles';

export const mainTheme = createTheme({
  // Overides
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          padding: '12px 15px',
          borderRadius: 16,
          '&.MuiButton-outlined': {
            border: '3px solid ',
          },
        },
      },
    },
  },
  spacing: 12,

  //Breakpoints
  breakpoints: {
    values: {
      xs: 375,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },

  // Pallet
  palette: {
    primary: {
      main: '#1c223d',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#9ebcba',
    },
    background: {
      default: '#d7e3e0',
    },
    common: {
      black: '#000000',
    },
  },

  // Typography
  typography: {
    fontFamily: 'Inter',
    h1: {
      fontFamily: 'Neo Display',
      fontWeight: 700,
    },
    h2: {
      fontFamily: 'Neo Display',
      fontWeight: 700,
    },
    h3: {
      fontFamily: 'Neo Display',
      fontWeight: 700,
    },
    h4: {
      fontFamily: 'Neo Display',
      fontWeight: 700,
    },
    h5: {
      fontFamily: 'Neo Display',
      fontWeight: 700,
    },
    h6: {
      fontFamily: 'Neo Display',
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: 19,
      lineHeight: 1.75,
    },
    subtitle2: {
      fontSize: 16,
      lineHeight: 1.75,
    },
    body1: {
      fontSize: 16,
      lineHeight: 1.75,
    },
    body2: {
      fontSize: 14,
      lineHeight: 1.75,
    },
    button: {
      fontSize: 14,
      lineHeight: 1.75,
      fontWeight: 700,
    },
    caption: {
      fontSize: 12,
      lineHeight: 1.75,
    },
    overline: {
      fontSize: 10,
      lineHeight: 1.75,
    },
  },
});
