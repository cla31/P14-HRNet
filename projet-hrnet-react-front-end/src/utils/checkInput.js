export const checkInputName = (value, setError) => {
    // console.log("Valeur dans check first",value)
    if (!value) {
        return setError('The field must be filled')
    } else if (value.length > 0 && (value.length < 3 || value.length > 20)) {
        return setError('Please enter 2 or more characters')
    } else if (!value.match(/^[\p{L}0-9_.-]*$/u)) {
        return setError('Firstname must not contain special characters')
    } else {
        setError('')
        return true
    }
}

export const checkDate = (value, setError) => {
    // console.log('valeur de la date', value)
    let dateInput = new Date(value)
    let timestampInput = dateInput.getTime()
    let dateNow = Date.now()
        // console.log('valeur de date now()', dateNow)
        // console.log('valeur de la date input', timestampInput)
    if (timestampInput < dateNow) {
        setError('')
        return true
    } else {
        return setError('this date is not possible')
    }
}
export const validateSelectionState = (selection, validValues, setError) => {
    // console.log("valeur de la selection",selection)
    // console.log("valides values",validValues)
    const found = validValues.find((obj) => obj.name === selection)
    if (found) {
        setError('')
        return true
    } else {
        return setError('Choose a state')
    }
}

export const validateSelectionDepartment = (selection, validValues, setError) => {
    // console.log("valeur de la selection",selection)
    // console.log("valides values",validValues)
    if (validValues.includes(selection)) {
        setError('')
        return true
    } else {
        return setError('Choose a department')
    }
}

export const checkCity = (value, setError) => {
    // console.log("Valeur dans check last",value)
    if (!value) {
        return setError('The field must be filled')
    } else if (value.length > 0 && (value.length < 3 || value.length > 20)) {
        return setError('Please enter 2 or more characters')
    } else if (!value.match(/^[\p{L}0-9_.-]*$/u)) {
        return setError(
            'City name must not contain special characters'
        )
    } else {
        setError('')
        return true
    }
}
export const checkStreet = (value, setError) => {
    // console.log("Valeur dans check last",value)
    if (!value) {
        return setError('The field must be filled')
    } else if (value.length > 0 && (value.length < 3 || value.length > 20)) {
        return setError('Please enter 2 or more characters')
    } else if (!value.match(/^[\p{L}0-9_.-]*$/u)) {
        return setError(
            'Street name must not contain special characters'
        )
    } else {
        setError('')
        return true
    }
}
export const checkZipCode = (value, setError) => {
    if (value === '') {
        return setError('The field must be filled')
    } else if (!value.match(/^[0-9]+$/)) {
        return setError('Please enter a number')
    } else {
        setError('', true)
        return true
    }
}