import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from './slices/sidebarSlice'
import userReducer from './slices/userSlice'
import doctorReducer from './slices/doctorSlice'

const appStore = configureStore({
    reducer:{
        sidebar: sidebarReducer,
        user: userReducer,
        doctors: doctorReducer
    }
})

export default appStore