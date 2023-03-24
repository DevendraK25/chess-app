import React from 'react';
import './signup-page-credentials.scss';

export const SignupPageCredentials: React.FC = (props) => {

  async function testInput() {
    try {
      const res = await fetch("http://localhost:8080/", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application.json",
        },
      });
      return await res.json();
    } catch (err) {}
  }

  return(
    <div className="signupPageCredentials">
      <form>
       <div className="input-container">
         <label>Username </label>
         <input type="text" id="defaultLoginFormUsername" placeholder="Username"/>
       </div>
       <div className="input-container">
         <label>Password </label>
         <input type="text" id="defaultLoginFormPassword" placeholder="Password"/>
       </div>
       <div className="input-container">
         <label> Confirm Password </label>
         <input type="text" id="defaultLoginFormConfirmPassword" placeholder="Password"/>
       </div>
       <div className="button-container">
         <input type="submit" onClick={testInput}/>
       </div>
     </form>
    </div>
  )
}