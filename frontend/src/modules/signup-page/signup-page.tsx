import React from 'react';
import { Router } from 'react-router-dom';
import { SignupPageCredentials } from './components/signup-page-credentials-component/signup-page-credentials';
import './signup-page.scss';
import {FaUser} from 'react-icons/fa';

import {useState, useEffect} from 'react'

export const SignupPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirm_password: ''
  })

  const {username, password, confirm_password } = formData

  const onChange = (e : any) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e : any) => {
    e.preventDefault()
  }


  return(
    <div className="signupPage">
      <section className="heading">
        <h1>
          <FaUser/> Register
        </h1>
        <p>Please create an account</p>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
          <input 
            type="text" 
            className='form-control' 
            id='username' 
            name='username' 
            placeholder='Enter your username'
            onChange={onChange}/>
          </div>
          <div className="form-group">
          <input 
            type="password" 
            className='form-control' 
            id='password' 
            name='password' 
            placeholder='Enter your password'
            onChange={onChange}/>
          </div>
          <div className="form-group">
          <input 
            type="text" 
            className='form-control' 
            id='confirm_password' 
            name='confirm_password' 
            placeholder='Confirm password'
            onChange={onChange}/>
          </div>
          <div className="form-group">
            <button type="submit" className="register-button">
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  )
}