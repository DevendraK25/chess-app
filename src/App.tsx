import React from 'react';
import { Chessboard } from "react-chessboard";
import './App.scss'
import { LandingPageChessBoard } from './modules/landing-page/components/landing-page-chessboard-component/landing-page-chessboard';

function App() {
  return (
    <div className="App">
      <LandingPageChessBoard></LandingPageChessBoard>
    </div>
  );
}

export default App;
