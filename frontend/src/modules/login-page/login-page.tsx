import React from 'react';
import { LoginPageCredentials } from './components/login-page-credentials-component/login-page-credentials';
import './login-page.scss';

export const LoginPage = () => {
  return(
    <div className="loginPage">
      <LoginPageCredentials></LoginPageCredentials>
    </div>
  )
}