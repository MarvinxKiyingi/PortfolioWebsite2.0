import { styled } from '@mui/material/styles';
import noise from '../../styles/images/noise.png';

export const Hero = styled('header')((theme) => ({
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
  '.Navbar, .HeroContainer': {
    zIndex: '10',
  },
}));
