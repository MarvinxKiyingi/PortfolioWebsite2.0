import { ThemeProvider } from '@mui/material/styles';
import { AppWrapper } from './components/AppWrapper/AppWrapper';
import { Hero } from './components/Hero/Hero';
import { mainTheme } from './styles/theme/theme';

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <AppWrapper className="AppWrapper">
        <Hero />
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
