import { createSlice } from '@reduxjs/toolkit';// Importing createSlice from Redux Toolkit

// Creating a Redux slice to manage sidebar state
const sidebarSlice = createSlice({
    name: 'sidebar', // Slice name
    initialState: true, // Initial state: Sidebar is visible by default (true)
    reducers:{
        // Reducer function to toggle the sidebar state (show/hide)
        toggle(state) {
            return !state; // Flips the boolean value (true → false, false → true)
        }
    }
})


// Exporting the action creator for toggling the sidebar
export const { toggle } = sidebarSlice.actions;

// Exporting the reducer function to be used in the Redux store
export default sidebarSlice.reducer;