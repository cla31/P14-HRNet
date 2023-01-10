import React from 'react'
import { useLocation } from 'react-router-dom'
import '../style/components/header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  let page = useLocation()
  //   console.log('nom de la page', page)
  return (
    <nav className="main-nav">
      <div className="container-connexion">
        <Link
          to="/Login"
          className={
            page.pathname === '/'
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
