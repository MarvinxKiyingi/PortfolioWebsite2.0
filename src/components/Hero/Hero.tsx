import { Box, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import bgImg from '../../styles/images/99-Roman.jpg';
import noise from '../../styles/images/noise.png';
import { HamburgerMenu } from './HamburgerMenu/HamburgerMenu';
import { HeroContent } from './HeroContent/HeroContent';
import { Logo } from '../Logo/Logo';
import { NavBar } from './Navbar/NavBar';
import { NavItems } from './Navbar/NavItems';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import resume from '../../files/resume.pdf';

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
  '.socialLinksContainer': {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      gridColumn: '11/-1',
      display: 'flex',
      justifyContent: 'space-around',
      gap: theme.spacing(2),
    },
    [theme.breakpoints.up('lg')]: {
      justifyContent: 'flex-end',
      gap: theme.spacing(2),
    },
    '.socaiLinks': {
      color: theme.palette.primary.main,
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
          <HamburgerMenu />

          <NavItems />
          <Box className="socialLinksContainer">
            <IconButton className="socaiLinks" href={resume} target="_blank">
              <AttachFileIcon />
            </IconButton>
            <IconButton
              className="socaiLinks"
              href="mailto: marvinxkiyingi@gmail.com"
            >
              <EmailIcon />
            </IconButton>
            <IconButton
              className="socaiLinks"
              href="https://github.com/MarvinxKiyingi"
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              className="socaiLinks"
              href="https://www.linkedin.com/in/marvin-kiyingi-371525184"
            >
              <LinkedInIcon />
            </IconButton>
          </Box>
        </NavBar>

        <HeroContent />
      </HeroContentWrapper>
    </HeroContainer>
  );
};
