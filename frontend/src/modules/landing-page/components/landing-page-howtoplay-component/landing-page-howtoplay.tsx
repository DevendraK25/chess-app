import React from 'react';
import './landing-page-howtoplay.scss';

export const LandingPageHowToPlay: React.FC = () => {
  return(
    <div className="landingPageHowToPlay">
        <b>How to Play:</b> <br></br>
        Chess is a 2 player turn based game that starts with white to move. You have six distinct
        pieces. The pawns are on a2-h2 and a7-h7, the knights are on b1, g1, b8 and g8, the bishops
        are on c1, f1, c8 and f8, the rooks are on a1, h1, a8, h8, the queen is on d1 and d8, and
        the king is on e1, e8.
        <br></br>
        Pawns are able to move 1 square forward and take pieces opponent pieces diagonally. However,
        if the pawn hasn't moved yet they have the option to move forward two squares!
        <br></br>
        Knights move in L shapes and are the only pieces that are able to jump over other pieces!
        <br></br>
        Bishops can only move along the diagonals it sits on.
        <br></br>
        Rooks can move forward, backward or side to side as much as they want, as long as no pieces
        are in the way!
        <br></br>
        The Queen is your most powerful piece, it has the power of a rook and bishop combined.
        All these pieces work together to take down the opponents King while also protecting your own!
        <br></br>
        The King can move in any direction as well however they can only move one square at a time.
        <br></br>
        To win the game you must "checkmate" the opponents King, which means you have to Attack the 
        King such that it has no escape (no pieces can block the Attack or the King can't run away.)
        <br></br>
        There are some more advanced rules like castling and en passant however you can play with the 
        rules here!
        <br></br>
        Goodluck! You can try playing against the bot on this page. 
        <b> Caution: your opponent may be wonky!</b>
    </div>
  )
}