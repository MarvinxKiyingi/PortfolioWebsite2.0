import { createTheme } from '@mui/material/styles';

export const mainTheme = createTheme({
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
  },
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
    },
    subtitle2: {
      fontSize: 16,
    },
    body1: {
      fontSize: 16,
    },
    body2: {
      fontSize: 14,
    },
    button: {
      fontSize: 14,
    },
    caption: {
      fontSize: 12,
    },
    overline: {
      fontSize: 10,
    },
  },
});
