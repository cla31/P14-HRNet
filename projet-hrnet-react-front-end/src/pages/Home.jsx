import React from 'react'
import Form from '../components/Form'
import '../style/pages/Home.css'
import logo from '../assets/logo.png'

const Home = () => {
  return (
    <div className="main">
      <div className="square"></div>
      <div className="container">
        <div className="logo">
          <img className="img-logo" src={logo} alt="Logo-HRnet" />
        </div>
        <div className="hight-title">
          <h1>HRnet</h1>
        </div>
        <Form />
      </div>
    </div>
  )
}

export default Home
