import React from 'react'
import Form from '../components/Form'
import '../style/pages/Home.css'
import logo from '../assets/logo.png'
import { useEffect } from 'react'
import Loader from '../components/Loader'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getEmployees } from '../redux/employees.slice.js'
import { useSelector } from 'react-redux'

/**
    @fileoverview Home page component
    Home component
    @description This component displays a form and calls a list of employees
 */

const Home = () => {
  const isLoading = useSelector((state) => state.employees.isLoading)
  // console.log(
  //   'state',
  //   useSelector((state) => state.employees.isLoading)
  // )
  // setTimeout(() => {}, 2000)
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
    getAllemployees()
  }, [dispatch, navigate])

  return (
    <>
      {/* {console.log('isLoading ds Home', isLoading)} */}

      {isLoading ? (
        <Loader />
      ) : (
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
          <div className="datas">
            {/* {datas && datas.length > 0 && (
              <div className="datas">
                {datas[0].firstname}{' '}
                {console.log('Firstname ds le form', datas[0].firstname)}
              </div>
            )} */}
          </div>
        </div>
      )}
    </>
  )
}

export default Home
