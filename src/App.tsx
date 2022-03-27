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
        <div className="content">
          <h1>Great things in the works</h1>

          <div className="constructionAnimation">
            <Lottie options={constructionImgData} />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
