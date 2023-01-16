import React from 'react'
import { Link } from 'react-router-dom'
import '../style/pages/CurrentEmployees.css'
import logo from '../assets/logo.png'
import Table from '../components/Table'

/** 
    @fileoverview  Current Employees Page Component
    CurrentEmployees component
    @description The page displays current employees in a table
*/

const CurrentEmployee = () => {
  return (
    <div className="body-table">
      <div className="header-table">
        <div className="logo-table-employee">
          <img className="img-logo" src={logo} alt="Logo-HRnet" />
        </div>
        <div className="title-table">
          <h1>Current Employees</h1>
        </div>
        <div className="link-home">
          <Link to="/">-Home-</Link>
        </div>
      </div>
      <Table />
    </div>
  )
}

export default CurrentEmployee
