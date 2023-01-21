import React from 'react'
import { Link } from 'react-router-dom'
import '../style/pages/CurrentEmployees.css'
import logo from '../assets/logo.png'
import Table from '../components/Table'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getEmployees } from '../redux/employees.slice.js'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Loader from '../components/Loader'

/**
 * Current Employees Page Component
 * CurrentEmployees component
 * @description The page displays current employees in a table
 * @returns {JSX.Element} CurrentEmployees component
 */

const CurrentEmployee = () => {
  const isLoading = useSelector((state) => state.employees.isLoading)
  const employees = useSelector((state) => state.employees.employees)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    const getAllemployees = async () => {
      try {
        dispatch(getEmployees())
      } catch (error) {
        console.log('=====error=====', error)
        navigate('/PageError')
      }
    }
    if (employees.length === 0) {
      getAllemployees()
    }
  }, [dispatch, navigate, employees])
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="body-table">
          <div className="header-table">
            <div className="logo-table-employee">
              <img className="img-logo" src={logo} alt="Logo-HRnet" />
            </div>
            <div className="title-table">
              <h1>Current Employees</h1>
            </div>
            <div className="link-home">
              <Link to="/Home">-Employee registration form-</Link>
            </div>
          </div>
          <Table />
        </div>
      )}
    </>
  )
}

export default CurrentEmployee
