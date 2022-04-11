import { styled } from '@mui/material';

export const NavBar = styled('nav')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  margin: 20,
  backgroundColor: 'transparent',

  '.BurgerMenuBtn': {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  '.navItems': {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      width: '65%',
      height: 'auto',
    },
  },
}));
