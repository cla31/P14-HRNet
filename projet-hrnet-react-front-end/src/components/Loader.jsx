import React from 'react'
import '../style/components/loader.css'

/**
 * Loader component of the application
 * Loader component
 * @component
 * @description This component displays a loading animation while data is being retrieved or processed.
 * @returns {JSX.Element} Loader component
 */

const Loader = () => {
  return (
    <div className="container-loader">
      <div className="loadingio-spinner-bars-1eztlvewhl1h">
        <div className="ldio-uowht7upd8l">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  )
}
export default Loader
