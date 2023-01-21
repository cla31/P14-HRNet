import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'

/**
 * @file root folder of the application.
 * @description Entry point of the application
 * @see <a href="https://github.com/cla31/P14-HRNet/tree/main/projet-hrnet-react-front-end" target="_blank"> repo Git </a>
 */

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
