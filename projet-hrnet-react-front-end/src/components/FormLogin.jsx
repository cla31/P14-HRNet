import React from 'react'
import '../style/components/formLogin.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import {
  checkInputName,
  emailChecker,
  passwordChecker,
} from '../utils/checkInput'
import { Modal } from 'modal-lib-claire-marie'
import iconeValidation from '../assets/validationSignUp.svg'

/**
 * @fileoverview Renders a form to login and sign up
 * FormLogin component
 * @function
 * Handle the form to login and sign up
 */

const FormLogin = () => {
  const navigate = useNavigate()
  const [userName, setUserName] = useState('')
  const [errorMessageUserName, setErrorMessageUserName] = useState('')
  const [email, setEmail] = useState('')
  const [errorEmail, setErrorEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorPassword, setErrorPassword] = useState('')
  const [showModal, setShowModal] = useState(false)

  const closeModal = () => {
    setShowModal(false)
    window.location.reload(true)
  }

  const login = (e) => {
    e.preventDefault()
    navigate('/CurrentEmployee')
  }
  const signUp = (e) => {
    e.preventDefault()
    checkInputName(userName, setErrorMessageUserName)
    emailChecker(email, setErrorEmail)
    passwordChecker(password, setErrorPassword)
    if (
      checkInputName(userName, setErrorMessageUserName) &&
      emailChecker(email, setErrorEmail) &&
      passwordChecker(password, setErrorPassword)
    ) {
      setShowModal(true)
    }
  }

  return (
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
            onChange={(e) => setUserName(e.target.value)}
          />
          {errorMessageUserName && (
            <div className="error-message">{errorMessageUserName}</div>
          )}
          <input
            className="login-input"
            type="email"
            name="email"
            placeholder="Email"
            required=""
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="error-message">{errorEmail}</div>

          <input
            className="login-input"
            type="password"
            name="pswd"
            placeholder="Password"
            required=""
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="error-message">{errorPassword}</div>
          <button className="login-button" onClick={signUp}>
            Sign up
          </button>
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
        <button className="login-button" onClick={login}>
          Login
        </button>
      </div>
      {showModal && (
        <Modal
          messageModal={'Employee created!'}
          messageBouton={'Close'}
          functionButton={closeModal}
          image={iconeValidation}
          ContentModalStyle={{
            color: '#001730',
            background: '#001730',
            width: '90%',
          }}
          buttonStyle={{ backgroundColor: '#001730' }}
          ContainerModalStyle={{
            height: '90%',
          }}
          ImageModalStyle={{ width: '200px', height: '200px' }}
        />
      )}
    </div>
  )
}

export default FormLogin
