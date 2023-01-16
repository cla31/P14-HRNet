import React from 'react'
import '../style/pages/PageError.css'
import { Link } from 'react-router-dom'
import notFound from '../assets/notFound.svg'
/**
    @fileoverview PageError page component
     PageError  component
    @description This component displays an error page
 */
const PageError = () => {
  return (
    <div>
      <div className="message-erreur">
        <img className="img-pageError" src={notFound} alt="" />
        <span>
          Oups! La page que vous demandez n'existe pas ou le serveur est
          indisponible.
        </span>
        <Link to="/" className="message">
          Retourner sur la page d'accueil
        </Link>
      </div>
    </div>
  )
}

export default PageError
