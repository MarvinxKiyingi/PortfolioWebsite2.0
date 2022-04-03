import { styled } from '@mui/material';

export const NavBar = styled('nav')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(4,1fr)',
  gridGap: '20px',
  margin: '20px 20px',
  backgroundColor: 'transparent',
  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: 'repeat(12,1fr)',
  },

  '.BurgerMenuBtn': {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
}));
