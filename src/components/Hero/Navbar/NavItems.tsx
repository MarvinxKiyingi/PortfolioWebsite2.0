import { Link, Box, styled } from '@mui/material';

const NavItemsWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  padding: theme.spacing(2, 2, 0),
  display: 'flex',
  flexDirection: 'column',
  a: {
    lineHeight: 3,
  },

  [theme.breakpoints.up('md')]: {
    padding: 'unset',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    a: {
      lineHeight: 0,
    },
  },
}));
export const NavItems = () => {
  return (
    <NavItemsWrapper className="navItems">
      <Link href="/" underline="hover">
        Home
      </Link>
      <Link href="/#About" underline="hover">
        About
      </Link>
      <Link href="/#Portfolio" underline="hover">
        Portfolio
      </Link>

      <Link href="/#Contact" underline="hover">
        Contact
      </Link>
    </NavItemsWrapper>
  );
};
