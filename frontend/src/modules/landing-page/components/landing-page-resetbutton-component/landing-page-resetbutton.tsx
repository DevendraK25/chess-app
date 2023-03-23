import React from 'react';
import './landing-page-resetbutton.scss';

export const LandingPageResetButton: React.FC = () => {

  return(
    <div className="landingPageResetButton">
       <button type="button" onClick={function() {window.location.reload()}}>Reset</button>
    </div>
  )
}