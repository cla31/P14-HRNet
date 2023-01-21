import React from 'react'
import Form from '../components/Form'
import '../style/pages/Home.css'
import logo from '../assets/logo.png'

/**
    @fileoverview Home page component
    Home component
    @description This component displays a form and calls a list of employees
 */

const Home = () => {
  return (
    <>
      {/* {console.log('isLoading ds Home', isLoading)} */}
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
        <div className="datas"></div>
      </div>
    </>
  )
}

export default Home
