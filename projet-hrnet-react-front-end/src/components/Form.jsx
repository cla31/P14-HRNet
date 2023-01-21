import React from 'react'
import DatePicker from 'react-datepicker'
import { useState } from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import { states } from '../datas/states'
import { departments } from '../datas/departments'
import Dropdown from '../components/Dropdown'
import { Modal } from 'modal-lib-claire-marie'
import { useDispatch } from 'react-redux'
import { addEmployees } from '../redux/employees.slice'
import { Link } from 'react-router-dom'
import '../style/components/form.css'

import {
  checkInputName,
  validateSelectionState,
  validateSelectionDepartment,
  checkCity,
  checkStreet,
  checkZipCode,
  checkDate,
} from '../utils/checkInput'
import iconeValidation from '../assets/validation.svg'
/**
 * @fileoverview Renders a form to add new employee
 * Form component
 * @function
 * Handle the form to create a new employee
 */

const Form = () => {
  const dispatch = useDispatch()
  //Gestion du dropdow "states"
  let arrayStatesFilter = []

  const statesFilter = (states) => {
    states.map((state) => arrayStatesFilter.push(state.name))
    return arrayStatesFilter
  }

  const statesName = statesFilter(states)

  const closeModal = () => {
    setShowModal(false)
  }

  //gestion de l'état du formulaire
  const [showModal, setShowModal] = useState(false)
  const [birthDate, setBirthDate] = useState('')
  const [startDate, setStartDate] = useState('')
  const [firstname, setFirstname] = useState('')
  const [department, setDepartment] = useState('')
  const [lastname, setLastname] = useState('')
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zipcod, setZipcod] = useState('')
  const [errorMessageFirst, setErrorMessageFirst] = useState('')
  const [errorMessageLast, setErrorMessageLast] = useState('')
  const [errorMessageSelectionState, setErrorMessageSelectionState] =
    useState('')
  const [errorMessageSelectionDepartment, setErrorMessageSelectionDepartment] =
    useState('')
  const [errorMessageStreet, setErrorMessageStreet] = useState('')
  const [errorMessageCity, setErrorMessageCity] = useState('')
  const [errorMessageZipCode, setErrorMessageZipCode] = useState('')
  const [errorMessageBirthDate, setErrorMessageBirthDate] = useState('')
  const [errorMessageStartDate, setErrorMessageStartDate] = useState('')

  const newEmployeeDatas = {
    firstName: firstname,
    lastName: lastname,
    birthDate: new Date(birthDate),
    department: department,
    startDate: new Date(startDate),
    street: street,
    city: city,
    state: state,
    zipcod: zipcod,
  }

  const save = (e) => {
    e.preventDefault()

    const birthDateFormated = () => {
      if (birthDate) {
        return birthDate.toISOString().replace(/\.\d{3}Z$/, 'Z')
      }
    }
    // console.log('birth foooorm', birthDateFormated())
    newEmployeeDatas.birthDate = birthDateFormated()
    const startDateFormated = () => {
      if (startDate) {
        return startDate.toISOString().replace(/\.\d{3}Z$/, 'Z')
      }
    }

    newEmployeeDatas.startDate = startDateFormated()

    checkInputName(newEmployeeDatas.firstName, setErrorMessageFirst)
    checkInputName(newEmployeeDatas.lastName, setErrorMessageLast)
    checkDate(birthDateFormated(), setErrorMessageBirthDate)
    checkDate(startDateFormated(), setErrorMessageStartDate)
    validateSelectionState(
      newEmployeeDatas.state,
      states,
      setErrorMessageSelectionState
    )
    validateSelectionDepartment(
      newEmployeeDatas.department,
      departments,
      setErrorMessageSelectionDepartment
    )
    checkCity(newEmployeeDatas.city, setErrorMessageCity)
    checkStreet(newEmployeeDatas.street, setErrorMessageStreet)
    checkZipCode(newEmployeeDatas.zipcod, setErrorMessageZipCode)
    if (
      checkInputName(newEmployeeDatas.firstName, setErrorMessageFirst) &&
      checkInputName(newEmployeeDatas.lastName, setErrorMessageLast) &&
      validateSelectionState(
        newEmployeeDatas.state,
        states,
        setErrorMessageSelectionState
      ) &&
      validateSelectionDepartment(
        newEmployeeDatas.department,
        departments,
        setErrorMessageSelectionDepartment
      ) &&
      checkCity(newEmployeeDatas.city, setErrorMessageCity) &&
      checkStreet(newEmployeeDatas.street, setErrorMessageStreet) &&
      checkDate(birthDateFormated(), setErrorMessageBirthDate) &&
      checkDate(startDateFormated(), setErrorMessageStartDate) &&
      checkZipCode(newEmployeeDatas.zipcod, setErrorMessageZipCode) === true
    ) {
      // console.log('New Employee State1', newEmployeeDatas.state)
      const acronymeState = states.find(
        (obj) => obj.name === newEmployeeDatas.state
      ).abbreviation
      // console.log('Acronyme State', acronymeState)
      newEmployeeDatas.state = acronymeState
      // console.log('New Employee State2', newEmployeeDatas.state)
      if (newEmployeeDatas.state === acronymeState)
        dispatch(addEmployees(newEmployeeDatas))
      setShowModal(true)
      document.getElementById('create-employee').reset()
      setBirthDate('')
      setStartDate('')
    }
  }

  const handleChangeDepartment = (event) => {
    const selectedValue = event.target.value
    setDepartment(selectedValue)
    // console.log('Valeur selectionnée', selectedValue)
  }

  //evènements du formulaire
  const handleChangeState = (event) => {
    const selectedValue = event.target.value
    setState(selectedValue)
  }

  const handleChangeBirthDate = (date) => {
    return setBirthDate(date)
  }
  const handleChangeStartDate = (date) => {
    return setStartDate(date)
  }

  return (
    <div className="container-form">
      <div className="link-table">
        <Link to="/CurrentEmployee">-View Current Employees-</Link>
      </div>
      <div className="title-form">
        <h2>Create Employee</h2>
      </div>
      <form action="#" id="create-employee" autoComplete="off">
        <div className="input-fn">
          <input
            type="text"
            id="first-name"
            name="first"
            placeholder="First Name"
            onChange={(e) => setFirstname(e.target.value)}
            required="required"
          />
        </div>
        {errorMessageFirst && (
          <div className="error-message">{errorMessageFirst}</div>
        )}
        <div className="input-ln">
          <input
            type="text"
            id="last-name"
            name="last"
            placeholder="Last Name"
            onChange={(e) => setLastname(e.target.value)}
            required="required"
          />
        </div>
        {errorMessageLast && (
          <div className="error-message">{errorMessageLast}</div>
        )}
        <div className="dates">
          <div className="datepicker-birth">
            <div className="handle-error">
              <DatePicker
                id="date-of-birth"
                allowInput={true}
                selected={birthDate}
                placeholderText="Birth Date"
                onChange={handleChangeBirthDate}
                dateFormat="dd/MM/yyyy"
                required="required"
              />
            </div>
            {errorMessageBirthDate && (
              <div className="error-message">{errorMessageBirthDate}</div>
            )}
          </div>
          <div className="datepicker-start">
            <div className="handle-error">
              <DatePicker
                id="start-date"
                allowInput={true}
                selected={startDate}
                placeholderText="Start Date"
                onChange={handleChangeStartDate}
                dateFormat="dd/MM/yyyy"
                required="required"
              />
            </div>
            {errorMessageStartDate && (
              <div className="error-message">{errorMessageStartDate}</div>
            )}
          </div>
        </div>
        <fieldset className="address">
          <div className="legend-address">
            <legend>Address</legend>
          </div>
          <div className="input-street">
            <input
              id="street"
              type="text"
              placeholder="Street"
              onChange={(e) => setStreet(e.target.value)}
              required="required"
            />
          </div>
          {errorMessageStreet && (
            <div className="error-message">{errorMessageStreet}</div>
          )}
          <div className="input-city">
            <input
              id="city"
              type="text"
              placeholder="City"
              onChange={(e) => setCity(e.target.value)}
              required="required"
            />
          </div>
          {errorMessageCity && (
            <div className="error-message">{errorMessageCity}</div>
          )}
          <div className="state-zipcode">
            <div className="select-state">
              <Dropdown
                className="state"
                datas={statesName}
                listenOption={handleChangeState}
                colorDropdownSelect="white"
              />
              {errorMessageSelectionState && (
                <div className="error-message">
                  {errorMessageSelectionState}
                </div>
              )}
            </div>

            <div className="zipcode">
              <input
                id="zip-code"
                type="number"
                placeholder="Zipcode"
                onChange={(e) => setZipcod(e.target.value)}
                required="required"
              />
              {errorMessageZipCode && (
                <div className="error-message">{errorMessageZipCode}</div>
              )}
            </div>
          </div>
        </fieldset>
        <div className="select-department">
          <Dropdown
            datas={departments}
            listenOption={handleChangeDepartment}
            colorDropdownSelect="white"
          />
        </div>
        {errorMessageSelectionDepartment && (
          <div className="error-message">{errorMessageSelectionDepartment}</div>
        )}
      </form>
      <div className="save-button">
        <button type="submit" onClick={save}>
          Save
        </button>
      </div>
      {showModal && (
        <Modal
          messageModal={'Employee created!'}
          messageBouton={'Close'}
          functionButton={closeModal}
          image={iconeValidation}
          ContentModalStyle={{ color: '#001730', background: '#e2d4ca' }}
          buttonStyle={{ backgroundColor: '#001730' }}
          ContainerModalStyle={{ height: '90%' }}
          ImageModalStyle={{ width: '100px', height: '100px' }}
        />
      )}

      {/* <Modal
        messageModal={'Employee created!'}
        messageBouton={'Close'}
        functionButton={closeModal}
        image={iconeValidation}
        ContentModalStyle={{ color: '#001730', background: '#e2d4ca' }}
        buttonStyle={{ backgroundColor: '#001730' }}
        ContainerModalStyle={{ height: '90%' }}
        ImageModalStyle={{ width: '100px', height: '100px' }}
      /> */}
    </div>
  )
}

export default Form
