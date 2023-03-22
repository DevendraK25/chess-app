import React from 'react';
import './App.scss'
import { LandingPageChessBoard } from './modules/landing-page/components/landing-page-chessboard-component/landing-page-chessboard';
import { LandingPageFooter } from './modules/landing-page/components/landing-page-footer-component/landing-page-footer';
import { LandingPageHeader } from './modules/landing-page/components/landing-page-header-component/landing-page-header';

function App() {
  return (
    <div className="App">
      <LandingPageHeader></LandingPageHeader>
      <LandingPageChessBoard></LandingPageChessBoard>
      <LandingPageFooter></LandingPageFooter>
    </div>
  );
}

export default App;
