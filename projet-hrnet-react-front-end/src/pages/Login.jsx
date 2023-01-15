import React from 'react'
import FormLogin from '../components/FormLogin'
import logo from '../assets/logo.png'
import '../style/pages/login.css'

const Login = () => {
  return (
    <div className="body-login">
      <div className="title-logo">
        <img className="img-logo" src={logo} alt="Logo-HRnet" />
        <h1 className="title">HRnet</h1>
      </div>
      <div className="container-form-login">
        <FormLogin />
      </div>
    </div>
  )
}

export default Login
