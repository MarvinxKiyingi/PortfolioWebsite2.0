import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Lottie from 'react-lottie';
import constructionImg from './Animations/construction.json';
import { ThemeProvider } from '@mui/material/styles';
import { mainTheme } from './styles/theme/theme';
import { Typography } from '@mui/material';

function App() {
  const constructionImgData = {
    loop: true,
    autoplay: true,
    animationData: constructionImg,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <ThemeProvider theme={mainTheme}>
      <div className="App">
        <header className="App-header">
          <div className="content">
            <Typography variant={'h1'}>Great things in the works</Typography>

            <div className="constructionAnimation">
              <Lottie options={constructionImgData} />
            </div>
          </div>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
