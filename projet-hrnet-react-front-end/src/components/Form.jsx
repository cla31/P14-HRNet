import React from 'react'
import DatePicker from 'react-datepicker'
import { useState } from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import { states } from '../datas/states'
import { departments } from '../datas/departments'
import Dropdown from '../components/Dropdown'
import Modale from '../components/Modale'
import { useDispatch } from 'react-redux'
import { addEployees } from '../redux/redux'
import { Link } from 'react-router-dom'
import '../style/components/form.css'

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
  const [birthDate, setBirthDate] = useState(new Date())
  const [startDate, setStartDate] = useState(new Date())
  const [firstname, setFirstname] = useState('')
  const [department, setDepartment] = useState('')
  const [lastname, setLastname] = useState('')
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zipcode, setZipcode] = useState('')
  const [errorMessageFirst, setErrorMessageFirst] = useState('')
  const [errorMessageLast, setErrorMessageLast] = useState('')
  const [errorMessageBirthDate, setErrorMessageBirthDate] = useState('')
  const [errorMessageStartDate, setErrorMessageStartDate] = useState('')
  const [errorMessageSelectionState, setErrorMessageSelectionState] =
    useState('')
  const [errorMessageSelectionDepartment, setErrorMessageSelectionDepartment] =
    useState('')
  const [errorMessageStreet, setErrorMessageStreet] = useState('')
  const [errorMessageCity, setErrorMessageCity] = useState('')
  const [errorMessageZipCode, setErrorMessageZipCode] = useState('')

  //Contrôle des champs du formulaire:::::::
  const checkFirst = (value) => {
    // console.log("Valeur dans check first",value)
    if (!value) {
      return setErrorMessageFirst('The field must be filled')
    } else if (value.length > 0 && (value.length < 3 || value.length > 20)) {
      return setErrorMessageFirst('Please enter 2 or more characters')
    } else if (!value.match(/^[\p{L}0-9_.-]*$/u)) {
      return setErrorMessageFirst(
        'Firstname must not contain special characters'
      )
    } else {
      setErrorMessageFirst('')
      return true
    }
  }

  const checkLast = (value) => {
    // console.log("Valeur dans check last",value)
    if (!value) {
      return setErrorMessageLast('The field must be filled')
    } else if (value.length > 0 && (value.length < 3 || value.length > 20)) {
      return setErrorMessageLast('Please enter 2 or more characters')
    } else if (!value.match(/^[\p{L}0-9_.-]*$/u)) {
      return setErrorMessageLast('Lastname must not contain special characters')
    } else {
      setErrorMessageLast('')
      return true
    }
  }

  const checkBirthDate = (value) => {
    // console.log("valeur de la date",value)
    let dateNow = Date.now()
    // console.log("valeur de date now()", dateNow)
    if (value < dateNow) {
      setErrorMessageBirthDate('')
      return true
    } else {
      return setErrorMessageBirthDate('this date of birth is not possible')
    }
  }

  const checkStartDate = (value) => {
    // console.log("valeur de la date",value)
    let dateNow = Date.now()
    if (value < dateNow) {
      setErrorMessageStartDate('')
      return true
    } else {
      return setErrorMessageStartDate('this date of start is not possible')
    }
  }

  const validateSelectionState = (selection, validValues) => {
    // console.log("valeur de la selection",selection)
    // console.log("valides values",validValues)
    const found = validValues.find((obj) => obj.name === selection)
    if (found) {
      setErrorMessageSelectionState('')
      return true
    } else {
      return setErrorMessageSelectionState('Choose a state')
    }
  }

  const validateSelectionDepartment = (selection, validValues) => {
    // console.log("valeur de la selection",selection)
    // console.log("valides values",validValues)
    if (validValues.includes(selection)) {
      setErrorMessageSelectionDepartment('')
      return true
    } else {
      return setErrorMessageSelectionDepartment('Choose a department')
    }
  }
  const checkStreet = (value) => {
    // console.log("Valeur dans check last",value)
    if (!value) {
      return setErrorMessageStreet('The field must be filled')
    } else if (value.length > 0 && (value.length < 3 || value.length > 20)) {
      return setErrorMessageStreet('Please enter 2 or more characters')
    } else if (!value.match(/^[\p{L}0-9_.-]*$/u)) {
      return setErrorMessageStreet(
        'Street name must not contain special characters'
      )
    } else {
      setErrorMessageStreet('')
      return true
    }
  }

  const checkCity = (value) => {
    // console.log("Valeur dans check last",value)
    if (!value) {
      return setErrorMessageCity('The field must be filled')
    } else if (value.length > 0 && (value.length < 3 || value.length > 20)) {
      return setErrorMessageCity('Please enter 2 or more characters')
    } else if (!value.match(/^[\p{L}0-9_.-]*$/u)) {
      return setErrorMessageCity(
        'City name must not contain special characters'
      )
    } else {
      setErrorMessageCity('')
      return true
    }
  }

  const checkZipCode = (value) => {
    if (value === '') {
      return setErrorMessageZipCode('The field must be filled')
    } else if (!value.match(/^[0-9]+$/)) {
      return setErrorMessageZipCode('Please enter a number')
    } else {
      setErrorMessageZipCode('', true)
      return true
    }
  }

  const options = { day: '2-digit', month: '2-digit', year: 'numeric' }

  const newEmployeeDatas = {
    firstName: firstname,
    lastName: lastname,
    birthDate: birthDate.toLocaleDateString('fr-FR', options),
    department: department,
    startDate: startDate.toLocaleDateString('fr-FR', options),
    street: street,
    city: city,
    state: state,
    zipcode: zipcode,
  }
  // console.log("new employee datas",newEmployeeDatas);

  // const save= (e) => {
  //     e.preventDefault();
  //     console.log("new employee datas",newEmployeeDatas);
  //     dispatch(addEployees(newEmployeeDatas))
  //     setShowModal(true);
  // }

  const save = (e) => {
    e.preventDefault()
    // console.log("new employee datas",newEmployeeDatas.firstName);
    // console.log("new employee datas",newEmployeeDatas.lastName);
    checkFirst(newEmployeeDatas.firstName)
    checkLast(newEmployeeDatas.lastName)
    checkBirthDate(birthDate)
    checkStartDate(startDate)
    validateSelectionState(newEmployeeDatas.state, states)
    validateSelectionDepartment(newEmployeeDatas.department, departments)
    checkCity(newEmployeeDatas.city)
    checkStreet(newEmployeeDatas.street)
    checkZipCode(newEmployeeDatas.zipcode)
    if (
      newEmployeeDatas.firstName &&
      checkLast(newEmployeeDatas.lastName) &&
      checkBirthDate(birthDate) &&
      checkStartDate(startDate) &&
      validateSelectionState(newEmployeeDatas.state, states) &&
      validateSelectionDepartment(newEmployeeDatas.department, departments) &&
      checkCity(newEmployeeDatas.city) &&
      checkStreet(newEmployeeDatas.street) &&
      checkZipCode(newEmployeeDatas.zipcode) === true
    )
      dispatch(addEployees(newEmployeeDatas)) && setShowModal(true)
  }

  const handleChangeDepartment = (event) => {
    const selectedValue = event.target.value
    setDepartment(selectedValue)
    // console.log('Valeur selectionnée', selectedValue)
  }

  const handleChangeState = (event) => {
    const selectedValue = event.target.value
    setState(selectedValue)
  }

  return (
    <div>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <Link to="/CurrentEmployee">View Current Employees</Link>
        <h2>Create Employee</h2>
        <form>
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            name="first"
            onChange={(e) => setFirstname(e.target.value)}
            required="required"
          />
          {errorMessageFirst && (
            <div className="error-message">{errorMessageFirst}</div>
          )}

          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            name="last"
            onChange={(e) => setLastname(e.target.value)}
            required="required"
          />
          {errorMessageLast && (
            <div className="error-message">{errorMessageLast}</div>
          )}

          <label htmlFor="date-of-birth">Date of Birth</label>
          <DatePicker
            selected={birthDate}
            onChange={(date) => setBirthDate(date)}
            dateFormat="dd/MM/yyyy"
            required="required"
          />
          {errorMessageBirthDate && (
            <div className="error-message">{errorMessageBirthDate}</div>
          )}

          <label htmlFor="start-date">Start Date</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="dd/MM/yyyy"
            required="required"
          />
          {errorMessageStartDate && (
            <div className="error-message">{errorMessageStartDate}</div>
          )}

          <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input
              id="street"
              type="text"
              onChange={(e) => setStreet(e.target.value)}
              required="required"
            />
            {errorMessageStreet && (
              <div className="error-message">{errorMessageStreet}</div>
            )}

            <label htmlFor="city">City</label>
            <input
              id="city"
              type="text"
              onChange={(e) => setCity(e.target.value)}
              required="required"
            />
            {errorMessageCity && (
              <div className="error-message">{errorMessageCity}</div>
            )}

            <label htmlFor="state">State</label>
            <Dropdown datas={statesName} listenOption={handleChangeState} />
            {errorMessageSelectionState && (
              <div className="error-message">{errorMessageSelectionState}</div>
            )}

            <label htmlFor="zip-code">Zip Code</label>
            <input
              id="zip-code"
              type="number"
              onChange={(e) => setZipcode(e.target.value)}
              required="required"
            />
            {errorMessageZipCode && (
              <div className="error-message">{errorMessageZipCode}</div>
            )}
          </fieldset>

          <label htmlFor="department">Department</label>
          <Dropdown datas={departments} listenOption={handleChangeDepartment} />
          {errorMessageSelectionDepartment && (
            <div className="error-message">
              {errorMessageSelectionDepartment}
            </div>
          )}
        </form>

        <button type="submit" onClick={save}>
          Save
        </button>
      </div>
      {showModal && (
        <Modale message={'Employee created'} closeModal={closeModal} />
      )}
    </div>
  )
}

export default Form
