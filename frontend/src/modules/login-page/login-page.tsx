import React, { useState } from 'react';
import { FaSignInAlt } from 'react-icons/fa';
import { LoginPageCredentials } from './components/login-page-credentials-component/login-page-credentials';
import './login-page.scss';

export const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  const {username, password } = formData

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
    <div className="loginPage">
      <section className="heading">
        <h1>
          <FaSignInAlt/> Login
        </h1>
        <p className="login-credentials-text">Please enter your account credentials</p>
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
            <button type="submit" className="login-button">
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  )
}