import { styled } from '@mui/material/styles';
import bgImg from '../../styles/images/99-Roman.jpg';
import noise from '../../styles/images/noise.png';
import { HamburgerMenu } from '../HamburgerMenu/HamburgerMenu';
import { HeroContent } from '../HeroContent/HeroContent';
import { Logo } from '../Logo/Logo';
import { NavBar } from '../Navbar/NavBar';

const HeroContainer = styled('header')((theme) => ({
  position: 'relative',
  backgroundColor: '#000000',
  width: '100%',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
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
  },
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

      <NavBar className="Navbar">
        <Logo />
        <HamburgerMenu />
      </NavBar>

      <HeroContent />
    </HeroContainer>
  );
};
