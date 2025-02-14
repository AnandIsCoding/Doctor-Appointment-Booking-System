import { createSlice } from '@reduxjs/toolkit';

const sidebarSlice = createSlice({
    name:'sidebar',
    initialState:true,
    reducers:{
        toggle(state){
            return !state;
        }
    }
})


export const {toggle} = sidebarSlice.actions;
export default sidebarSlice.reducer