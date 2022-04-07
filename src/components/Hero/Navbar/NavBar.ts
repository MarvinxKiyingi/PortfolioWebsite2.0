import { styled } from '@mui/material';

export const NavBar = styled('nav')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(4,1fr)',
  gridGap: '20px',
  margin: '20px 20px',
  backgroundColor: 'transparent',
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(12,1fr)',
    margin: '20px 20px 0px',
  },

  '.BurgerMenuBtn': {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  '.navItems': {
    display: 'none',

    [theme.breakpoints.up('md')]: {
      display: 'flex',
      gridColumn: '3/-3',
    },
  },
}));
