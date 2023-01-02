// import { states } from "../datas/states";

const { configureStore } = require("@reduxjs/toolkit");
const { createSlice } = require("@reduxjs/toolkit");


const tableSlice = createSlice({
    name: "table",
    initialState: [{
        firstName: "",
        lastName: "",
        birthDate: "",
        department: "",
        startDate: "",
        street: "",
        city: "",
        state: "",
        zipcode: ""

    }],
    reducers: {
        addEployees: (state, action) => {
            // const acronymeState = states.find(obj => obj.name === action.payload.state).abbreviation
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
        }
    }
})
export const { addEployees } = tableSlice.actions;
export const store = configureStore({
    reducer: {
        table: tableSlice.reducer,
    }
})