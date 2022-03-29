import { styled } from '@mui/material/styles';
import noise from '../../styles/images/noise.png';

export const Hero = styled('header')((theme) => ({
  position: 'relative',
  backgroundColor: '#d7e3e0',
  width: '100%',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  '.heroImg': {
    position: 'absolute',
    width: '100%',
    height: '100vh',
    objectFit: 'cover',
    objectPosition: 'top left',
    backgroundRepeat: 'no-repeat',
  },
  '.grain': {
    position: 'absolute',
    width: '100%',
    height: '100vh',
    backgroundImage: `url(${noise})`,
    backgroundRepeat: 'repeat',
    mixBlendMode: 'overlay',
    backgroundColor: 'saddlebrown',
    opacity: '.1',
  },
  '.Navbar, .HeroContant': {
    zIndex: '10',
  },
}));
