import { ThemeProvider } from '@mui/material/styles';
import { About } from './components/About/About';
import { AppWrapper } from './components/AppWrapper/AppWrapper';
import { BackToToButton } from './components/BackToTopButton/BackToToButton';
import { Footer } from './components/Footer/Footer';
import { Hero } from './components/Hero/Hero';
import { Projects } from './components/Projects/Projects';
import { mainTheme } from './styles/theme/theme';

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <AppWrapper className="AppWrapper">
        <Hero />
        <About />
        <Projects />
        <Footer />
        <BackToToButton />
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
