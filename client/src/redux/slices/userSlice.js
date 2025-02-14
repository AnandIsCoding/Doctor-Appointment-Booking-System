import { createSlice } from '@reduxjs/toolkit';
//null
const userSlice = createSlice({
  name: 'user',
  initialState: true, // Initial state is set to null
  reducers: {
    addUser: (state, action) => {
      return action.payload; // Replace state with the new user data
    },
    removeUser: (state, action) => {
      return null; // Reset state to null
    },
  },
});

export const { addUser, removeUser } = userSlice.actions; // Export actions
export default userSlice.reducer; // Export reducer





//(state) refers to surrent initialState