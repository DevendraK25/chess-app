import React from 'react';
import './landing-page-chessboard.scss';
import { Chessboard } from "react-chessboard";

export const LandingPageChessBoard: React.FC = () => {
  return(
    <div className="chessboard">
      <Chessboard/>
    </div>
  )
}