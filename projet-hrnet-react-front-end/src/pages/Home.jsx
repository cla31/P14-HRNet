import React from 'react'
import Form from '../components/Form'
import '../style/pages/Home.css'
import logo from '../assets/logo.png'
import { useEffect, useState } from 'react'
import { employeesDatas } from '../services/employeesService'
import Loader from '../components/Loader'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getEmployees, setIsLoading } from '../redux/redux'
import { useSelector } from 'react-redux'

const Home = () => {
  const isLoading = useSelector((state) => state.table.isLoading)
  // console.log(
  //   'state',
  //   useSelector((state) => state.table[0].isLoading)
  // )
  const dispatch = useDispatch()
  // const [datas, setDatas] = useState([])
  // const [isLoading, setIsloading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      const getAllemployees = async () => {
        try {
          const allEmployees = await employeesDatas()
          // setDatas(allEmployees)
          // console.log('all employees', allEmployees)
          // dispatch(getEmployees(allEmployees))
          allEmployees.forEach((employee) => {
            // console.log('employee ds foreach', employee)
            //JSON.stringify:Pour convertir l'objet en une chaîne représentant ses valeurs
            //Pour ne pas avoir l'erreur comme quoi l'objet n'est pas sérialisable...
            // Cela permet de passer l'objet employee à la fonction dispatch en tant que
            // chaîne de caractères représentant ses valeurs.
            dispatch(getEmployees(JSON.stringify(employee)))
            dispatch(setIsLoading(false))
          })
        } catch (error) {
          console.log('=====error=====', error)
          navigate('/PageError')
        }
      }
      getAllemployees()
      // dispatch(setIsLoading(false))
      // console.log('isLoading ds useEffect Home', isLoading)
      // console.log('get all employees', getAllemployees())
      // console.log('datas ds Home', datas)
    }, 1000)
  }, [])

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
