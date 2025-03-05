import { createSlice } from '@reduxjs/toolkit'; // Importing createSlice from Redux Toolkit

// Creating a Redux slice for managing doctor-related state
const doctorSlice = createSlice({
    name:'doctors', // Slice name
    initialState:{
        doctors:[] // Initial state with an empty array for doctors
    },
    reducers:{
        // Reducer function to update the doctors list in the state
        setDoctors:(state, action) =>{
            state.doctors = action.payload // Setting the doctors state with the provided payload
        }
    }
})

// Exporting the action creator for setting doctors
export const { setDoctors } = doctorSlice.actions;


// Exporting the reducer function to be used in the Redux store
export default doctorSlice.reducer;