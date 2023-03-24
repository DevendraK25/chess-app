import React from 'react';
import './App.scss'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LandingPage } from './modules/landing-page/landing-page';
import { LoginPage } from './modules/login-page/login-page';
import { SignupPage } from './modules/signup-page/signup-page';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
            <Routes>
             <Route path="/" element={<LandingPage/>}/>
             <Route path="/login" element={<LoginPage/>}/>
             <Route path="/signup" element={<SignupPage/>}/>
           </Routes>
        </div> 
      </BrowserRouter>

  );
}

export default App;
