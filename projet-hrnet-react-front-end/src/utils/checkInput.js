/**
@file Form validation functions
@function checkInputName
@function validateSelectionState
@function validateSelectionDepartment
@function checkCity
@function checkStreet
@function checkZipCode
@function emailChecker
@function passwordChecker
*/



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

export const emailChecker = (value, setError) => {
    if (value === '') {
        setError("The field must be filled");

    } else if (!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
        setError("email is not valid");

    } else {
        setError("", true);
        return true;
    }
};

export const passwordChecker = (value, setError) => {
    if (value === '') {
        setError("The field must be filled");
    } else if (value.length < 8) {
        setError("password must be at least 8 characters");
    } else if (!value.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)) {
        setError("password must contain at least one letter and one number");
    } else {
        setError("", true);
        return true;
    }
};

export const checkDate = (value, setError) => {
    // console.log('valeur de la date', value)
    if (value === undefined) {
        setError("The field must be filled");

    } else {
        setError("", true);
        return true;
    }
}