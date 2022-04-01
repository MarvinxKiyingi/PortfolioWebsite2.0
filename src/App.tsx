import { ThemeProvider } from '@mui/material/styles';
import { Logo } from './components/Logo/Logo';
import { AppWrapper } from './components/AppWrapper/AppWrapper';
import { Hero } from './components/Hero/Hero';
import { NavBar } from './components/Navbar/NavBar';
import { mainTheme } from './styles/theme/theme';
import { HamburgerMenu } from './components/HamburgerMenu/HamburgerMenu';
import { HeroContent } from './components/HeroContent/HeroContent';

import bgImg from './styles/images/99-Roman.jpg';

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <AppWrapper className="AppWrapper">
        <Hero className="Hero">
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
          <HeroContent />
        </Hero>
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
