import React from 'react'
import DatePicker from 'react-datepicker'
import { useState } from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import { states } from '../datas/states'
import { departments } from '../datas/departments'
import Dropdown from '../components/Dropdown'
// import Modale from '../components/Modale'
import { Modal } from 'modal-lib-claire-marie'
import { useDispatch } from 'react-redux'
import { addEmployees } from '../redux/redux'
import { Link } from 'react-router-dom'
import '../style/components/form.css'
import 'react-datepicker/dist/react-datepicker.css'
import { checkInputName } from '../utils/checkInput'
import { checkDate } from '../utils/checkInput'
import { validateSelectionState } from '../utils/checkInput'
import { validateSelectionDepartment } from '../utils/checkInput'
import { checkCity } from '../utils/checkInput'
import { checkStreet } from '../utils/checkInput'
import { checkZipCode } from '../utils/checkInput'
import iconeValidation from '../assets/validation.svg'

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

  const options = { day: '2-digit', month: '2-digit', year: 'numeric' }

  const newEmployeeDatas = {
    firstName: firstname,
    lastName: lastname,
    birthDate: birthDate,
    department: department,
    startDate: startDate,
    street: street,
    city: city,
    state: state,
    zipcode: zipcode,
  }

  const save = (e) => {
    e.preventDefault()
    // console.log("new employee datas",newEmployeeDatas.firstName);
    // console.log("new employee datas",newEmployeeDatas.lastName);
    const birthDateFormated = birthDate.toLocaleDateString('fr-FR', options)
    // console.log('Birthdate in save function', newEmployeeDatas.birthDate)
    // console.log('Date formatée?????', birthDateFormated)
    newEmployeeDatas.birthDate = birthDateFormated
    const startDateFormated = startDate.toLocaleDateString('fr-FR', options)
    newEmployeeDatas.startDate = startDateFormated

    checkInputName(newEmployeeDatas.firstName, setErrorMessageFirst)
    checkInputName(newEmployeeDatas.lastName, setErrorMessageLast)
    checkDate(
      birthDate.toLocaleDateString('fr-FR', options),
      setErrorMessageBirthDate
    )
    checkDate(
      startDate.toLocaleDateString('fr-FR', options),
      setErrorMessageStartDate
    )
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
    checkZipCode(newEmployeeDatas.zipcode, setErrorMessageZipCode)
    if (
      checkInputName(newEmployeeDatas.firstName, setErrorMessageFirst) &&
      checkInputName(newEmployeeDatas.lastName, setErrorMessageLast) &&
      checkDate(
        birthDate.toLocaleDateString('fr-FR', options),
        setErrorMessageBirthDate
      ) &&
      checkDate(
        startDate.toLocaleDateString('fr-FR', options),
        setErrorMessageStartDate
      ) &&
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
      checkZipCode(newEmployeeDatas.zipcode, setErrorMessageZipCode) === true
    ) {
      // console.log('New Employee State1', newEmployeeDatas.state)
      const acronymeState = states.find(
        (obj) => obj.name === newEmployeeDatas.state
      ).abbreviation
      // console.log('Acronyme State', acronymeState)
      newEmployeeDatas.state = acronymeState
      // console.log('New Employee State2', newEmployeeDatas.state)
      if (newEmployeeDatas.state === acronymeState)
        dispatch(addEmployees(newEmployeeDatas)) && setShowModal(true)
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
            <DatePicker
              id="date-of-birth"
              allowInput={true}
              selected={birthDate}
              placeholderText="Birth date"
              onChange={handleChangeBirthDate}
              dateFormat="dd/MM/yyyy"
              required="required"
            />
          </div>
          {errorMessageBirthDate && (
            <div className="error-message">{errorMessageBirthDate}</div>
          )}
          <div className="datepicker-start">
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
                onChange={(e) => setZipcode(e.target.value)}
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
      {/* {showModal && (
        <Modale message={'Employee created'} closeModal={closeModal} />
      )} */}

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
    </div>
  )
}

export default Form
