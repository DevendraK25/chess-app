import { useState } from "react";
import React from 'react';
import { Chessboard } from "react-chessboard";
import './landing-page-chessboard.scss';
import { Chess } from 'chess.js';


export const LandingPageChessBoard: React.FC = () => {
  let [game, setGame] = useState(new Chess());

  function onDrop(sourceSquare: any, targetSquare: any) {
    const gameCopy = new Chess(game.fen());
    const result = gameCopy.move(sourceSquare + "" + targetSquare);
    setGame(gameCopy);
    if (result === null) {
      return false;
    } else {
        const possibleMoves = gameCopy.moves();
        if (gameCopy.isGameOver() || gameCopy.isStalemate() || possibleMoves.length === 0) return false;
        const randomIndex = Math.floor(Math.random() * possibleMoves.length);
        gameCopy.move(possibleMoves[randomIndex]);
        setGame(gameCopy);
      return true;
    }
  }

  return(
    <div className="chessBoard">
      <Chessboard position={game.fen()} onPieceDrop={onDrop}/>
    </div>
  )
}