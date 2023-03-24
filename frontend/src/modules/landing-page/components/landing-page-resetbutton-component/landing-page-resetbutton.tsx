import React from 'react';
import './landing-page-resetbutton.scss';

export const LandingPageResetButton: React.FC = () => {

  return(
    <div>
       <button className="resetButton"type="button" onClick={function() {window.location.reload()}}>Reset</button>
    </div>
  )
}