// import { states } from "../datas/states";

const { configureStore } = require("@reduxjs/toolkit");
const { createSlice } = require("@reduxjs/toolkit");

const initialState = [{
    id: null,
    firstName: "",
    lastName: "",
    birthDate: "",
    department: "",
    startDate: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    isLoading: true,

}]
const tableSlice = createSlice({
    name: "table",
    initialState,

    reducers: {
        addEmployees: (state, action) => {
            const newEmployee = {
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                birthDate: action.payload.birthDate,
                department: action.payload.department,
                startDate: action.payload.startDate,
                street: action.payload.street,
                city: action.payload.city,
                state: action.payload.state,
                zipcode: action.payload.zipcode

            }
            state.push(newEmployee)
        },
        setIsLoading: (state, action) => {
            // console.log("action.payload", action.payload)
            // state.isLoading = action.payload
            const loading = {
                    isLoading: action.payload
                }
                // console.log("loading.isLoading", loading.isLoading);
            state.push(loading)
        },
        getEmployees: (state, action) => {
            // const employee = {
            //     id: action.payload,
            //     firstName: action.payload,
            //     lastName: action.payload
            // }
            // state.push(employee)


            // Mise à jour de la fonction getEmployees pour 
            // qu'elle puisse traiter correctement l'objet employee 
            // lorsqu'il est passé en tant que chaîne de caractères.
            const employee = JSON.parse(action.payload)
                // console.log("employee dans le state", employee)
            state.push(employee)
                // console.log('isLoading', state[0].isLoading)
        }

    }

})
export const { addEmployees, getEmployees, setIsLoading } = tableSlice.actions;
export const store = configureStore({
    reducer: {
        table: tableSlice.reducer,
    }
})