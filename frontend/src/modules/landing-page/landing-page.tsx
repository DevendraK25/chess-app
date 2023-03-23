import React from 'react';
import { LandingPageChessBoard } from './components/landing-page-chessboard-component/landing-page-chessboard';
import { LandingPageHeader } from './components/landing-page-header-component/landing-page-header';
import { LandingPageHowToPlay } from './components/landing-page-howtoplay-component/landing-page-howtoplay';
import { LandingPageResetButton } from './components/landing-page-resetbutton-component/landing-page-resetbutton';
import './landing-page.scss';

export const LandingPage: React.FC = () => {
  return(
    <div className="landingPage">
      <LandingPageHeader></LandingPageHeader>
      <div className="float-container">
        <LandingPageChessBoard></LandingPageChessBoard>
        <LandingPageResetButton></LandingPageResetButton>
      </div>
      <LandingPageHowToPlay></LandingPageHowToPlay>
    </div>
  )
}