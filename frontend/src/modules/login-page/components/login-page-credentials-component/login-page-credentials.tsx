import React from 'react';
import './login-page-credentials.scss';

export const LoginPageCredentials: React.FC = () => {
  return(
    <div className="loginPageCredentials">
      <form>
       <div className="input-container">
         <label>Username </label>
         <input type="text" name="uname" required/>
       </div>
       <div className="input-container">
         <label>Password </label>
         <input type="password" name="pass" required/>
       </div>
       <div className="button-container">
         <input type="submit" />
       </div>
     </form>
    </div>
  )
}