import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import bgImg from '../../styles/images/99-Roman.jpg';
import noise from '../../styles/images/noise.png';
import { HamburgerMenu } from './HamburgerMenu/HamburgerMenu';
import { HeroContent } from './HeroContent/HeroContent';
import { Logo } from '../Logo/Logo';
import { NavBar } from './Navbar/NavBar';
import { NavItems } from './Navbar/NavItems';
import { SocialLinks } from '../SocialLinks/SocialLinks';

const HeroContainer = styled('header')(({ theme }) => ({
  position: 'relative',
  backgroundColor: '#000000',
  width: '100%',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  zIndex: '0',

  '.heroImg': {
    position: 'absolute',
    width: '100%',
    height: '100vh',
    objectFit: 'cover',
    objectPosition: 'top left',
    backgroundRepeat: 'no-repeat',
    filter: 'opacity(80%)',
  },
  '.grain': {
    position: 'absolute',
    width: '100%',
    height: '100vh',
    backgroundImage: `url(${noise})`,
    backgroundRepeat: 'repeat',
    mixBlendMode: 'overlay',
    filter: 'opacity(12%)',
  },

  '.HeroContainer': {
    zIndex: '10',
  },
  '.Navbar': {
    zIndex: '11',
    '.BurgerMenuBtn': {
      zIndex: '1201',
    },
  },
  '.hamburgerNavigationBtn': {
    width: 'fit-content',
  },
  '.socialLinksContainer': {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      justifyContent: 'space-around',
      gap: theme.spacing(2),
    },
    [theme.breakpoints.up('lg')]: {
      gridColumn: '11/-1',

      justifyContent: 'flex-end',
      gap: theme.spacing(2),
    },
  },
}));
const HeroContentWrapper = styled(Box)(({ theme }) => ({
  maxWidth: 2520,
  margin: '0 auto',
  flex: 2,
  display: 'flex',
  flexDirection: 'column',
}));

export const Hero = () => {
  return (
    <HeroContainer className="hero">
      <img
        className="heroImg"
        src={bgImg}
        alt="background img"
        aria-hidden="true"
      />
      <div className="grain" aria-hidden="true"></div>

      <HeroContentWrapper className="heroContent">
        <NavBar className="Navbar">
          <Logo />
          <Box className="hamburgerNavigationBtn">
            <HamburgerMenu />
          </Box>

          <NavItems />
          <SocialLinks />
        </NavBar>

        <HeroContent />
      </HeroContentWrapper>
    </HeroContainer>
  );
};
