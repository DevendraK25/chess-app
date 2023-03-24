import React from 'react';
import { Router } from 'react-router-dom';
import { SignupPageCredentials } from './components/signup-page-credentials-component/signup-page-credentials';
import './signup-page.scss';

export const SignupPage = () => {
  return(
    <div className="signupPage">
      <SignupPageCredentials></SignupPageCredentials>
    </div>
  )
}