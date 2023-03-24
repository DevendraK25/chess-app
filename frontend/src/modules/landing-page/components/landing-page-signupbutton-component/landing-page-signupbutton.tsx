import React from 'react';
import { useNavigate } from 'react-router-dom';
import './landing-page-signupbutton.scss';

export const LandingPageSignupButton: React.FC = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = '/signup';
    navigate(path);
  }
  return(
    <div className="landingPageSignupButton">
      <button className="signupButton" onClick={routeChange}>
        Sign up
      </button>
    </div>
  )
}