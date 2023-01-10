import React from 'react'
import '../style/pages/Login.css'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="body-login">
      <div className="title-logo">
        <img className="img-logo" src={logo} alt="Logo-HRnet" />
        <h1 className="title">HRnet</h1>
      </div>
      <div className="main-login">
        <input type="checkbox" id="chk" aria-hidden="true" defaultChecked />
        <div className="signup">
          <form>
            <label className="login-label" htmlFor="chk" aria-hidden="true">
              Sign up
            </label>
            <input
              className="login-input"
              type="text"
              name="txt"
              placeholder="User name"
              required=""
            />
            <input
              className="login-input"
              type="email"
              name="email"
              placeholder="Email"
              required=""
            />
            <input
              className="login-input"
              type="password"
              name="pswd"
              placeholder="Password"
              required=""
            />
            <button className="login-button">Sign up</button>
          </form>
        </div>
        <div className="login">
          <form>
            <label className="login-label" htmlFor="chk" aria-hidden="true">
              Login
            </label>
            <input
              className="login-input"
              type="email"
              name="email"
              placeholder="Email"
              required=""
            />
            <input
              className="login-input"
              type="password"
              name="pswd"
              placeholder="Password"
              required=""
            />
          </form>
          {/* <button className="login-button"></button> */}
          <Link to="/" style={{ textDecoration: 'none' }}>
            <button className="login-button">Login</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login
