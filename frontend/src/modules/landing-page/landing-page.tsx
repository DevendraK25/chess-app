import React from 'react';
import { LandingPageChessBoard } from './components/landing-page-chessboard-component/landing-page-chessboard';
import { LandingPageHeader } from './components/landing-page-header-component/landing-page-header';
import { LandingPageHowToPlay } from './components/landing-page-howtoplay-component/landing-page-howtoplay';
import { LandingPageLoginButton } from './components/landing-page-loginbutton-component/landing-page-loginbutton';
import { LandingPageResetButton } from './components/landing-page-resetbutton-component/landing-page-resetbutton';
import { LandingPageSignupButton } from './components/landing-page-signupbutton-component/landing-page-signupbutton';
import './landing-page.scss';

export const LandingPage = () => {
  return(
    <div className="landingPage">
      <div className="header">
        <LandingPageHeader></LandingPageHeader>
        <LandingPageLoginButton></LandingPageLoginButton>
        <LandingPageSignupButton></LandingPageSignupButton>
      </div>
      <div className="float-container">
        <LandingPageChessBoard></LandingPageChessBoard>
        <LandingPageResetButton></LandingPageResetButton>
      </div>
      <LandingPageHowToPlay></LandingPageHowToPlay>
    </div>
  )
}