import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './landing-page-loginbutton.scss';

export const LandingPageLoginButton: React.FC = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = '/login';
    navigate(path);
  }
  return(
    <div className="landingPageLoginButton">
      <button className="loginButton" onClick={routeChange}>
        Login
      </button>
    </div>
  )
}