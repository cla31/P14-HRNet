import React from 'react'
import { useLocation } from 'react-router-dom'
import '../style/components/header.css'
import { Link } from 'react-router-dom'

/**
 * @fileoverview Header component of the application
 * Header component
 * @description This component displays the navigation bar of the application and allows the user to access the login page.
 */

const Header = () => {
  let page = useLocation()
  //   console.log('nom de la page', page)
  return (
    <nav className="main-nav">
      <div className="container-connexion">
        <Link
          to="/"
          className={
            page.pathname === '/Home'
              ? 'class-home'
              : 'class-login-current-employees'
          }
        >
          <div className="iconeUser">
            <i className="fa fa-user-circle"></i>
          </div>
          <div className="LogUser">
            <span>Cla</span>
          </div>
        </Link>
      </div>
    </nav>
  )
}

export default Header
