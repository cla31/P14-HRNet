import { getDatasEmployees } from '../services/service'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { configureStore } from "@reduxjs/toolkit"

/**
 * @file Redux store for employees management
 * @see {@link getDatasEmployees}
 * @see {@link createAsyncThunk}
 * @see {@link createSlice}
 * @see {@link configureStore}
 */


export const getEmployees = createAsyncThunk('employees/getEmployees', async(thunkAPI) => {
    try {
        const employees = await getDatasEmployees()
            // console.log('employés ds fichier Redux', employees)
        if (!employees) { return thunkAPI.rejectWithValue('error ') }
        return employees
    } catch (error) {
        //console.log('request failed 404 error ',error )        
        return thunkAPI.rejectWithValue(error)
    }
})

const initialState = {
    employees: [],
    isLoading: false,
}

export const employeesSlice = createSlice({
    name: "employees",
    initialState,

    reducers: {
        addEmployees: (state, action) => {
            // console.log("Test addEmployees");
            const newEmployee = {
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                birthDate: action.payload.birthDate,
                department: action.payload.department,
                startDate: action.payload.startDate,
                street: action.payload.street,
                city: action.payload.city,
                state: action.payload.state,
                zipcod: action.payload.zipcod

            }

            state.employees.push(newEmployee)
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getEmployees.pending, (state) => {
                state.isLoading = true
                    // console.log("state.loading", state.isLoading)
            })
            .addCase(getEmployees.rejected, (state, action) => {
                state.error = action.error
                state.isLoading = false
            })
            .addCase(getEmployees.fulfilled, (state, action) => {
                state.isLoading = false
                state.employees = action.payload
                    // console.log("payload objets", action.payload)
                    // console.log("state employees", state.employees)
            })
    }



})

export const { addEmployees } = employeesSlice.actions;
export const store = configureStore({
    reducer: {
        employees: employeesSlice.reducer,
    }
})