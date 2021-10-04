import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Lottie from 'react-lottie';
import constructionImg from './Animations/construction.json';

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
    <div className="App">
      <header className="App-header">
        <div className="constructionAnimation">
          <Lottie
            options={constructionImgData}
            // height={400} width={400}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
