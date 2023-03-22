import React from 'react';
import './App.scss'
import { LandingPageChessBoard } from './modules/landing-page/components/landing-page-chessboard-component/landing-page-chessboard';
import { LandingPageFooter } from './modules/landing-page/components/landing-page-footer-component/landing-page-footer';
import { LandingPageHeader } from './modules/landing-page/components/landing-page-header-component/landing-page-header';
import { LandingPageHowToPlay } from './modules/landing-page/components/landing-page-howtoplay-component/landing-page-howtoplay';

function App() {
  return (
    <div className="App">
      <LandingPageHeader></LandingPageHeader>
      <LandingPageChessBoard></LandingPageChessBoard>
      <LandingPageHowToPlay></LandingPageHowToPlay>
      <LandingPageFooter></LandingPageFooter>
    </div>
  );
}

export default App;
