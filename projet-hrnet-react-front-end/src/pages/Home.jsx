import React from 'react'
import Form from '../components/Form'
import '../style/pages/Home.css'
import logo from '../assets/logo.png'
import { useEffect, useState } from 'react'
import { employeesDatas } from '../services/employeesService'
import Loader from '../components/Loader'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const [datas, setDatas] = useState([])
  const [isLoading, setIsloading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      const getAllemployees = async () => {
        try {
          const allEmployees = await employeesDatas()
          setDatas(allEmployees)
        } catch (error) {
          console.log('=====error=====', error)
          navigate('/PageError')
        }
      }
      getAllemployees()
      // console.log('get all employees', getAllemployees())
      // console.log('datas ds Home', datas)
      setIsloading(false)
    }, 1000)
  }, [])

  return (
    <>
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
            {datas && datas.length > 0 && (
              <div className="datas">
                {datas[0].firstname}{' '}
                {/* {console.log('Firstname ds le form', datas[0].firstname)} */}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default Home
