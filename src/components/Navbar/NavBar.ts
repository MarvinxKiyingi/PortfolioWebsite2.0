import { styled } from '@mui/material';

export const NavBar = styled('nav')(({ theme }) => ({
  padding: theme.spacing(2, 2),
  backgroundColor: 'transparent',
  display: 'flex',
  justifyContent: 'space-between',
}));
