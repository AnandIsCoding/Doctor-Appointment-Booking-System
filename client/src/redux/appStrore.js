import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from './slices/sidebarSlice'
import userReducer from './slices/userSlice'

const appStore = configureStore({
    reducer:{
        sidebar: sidebarReducer,
        user: userReducer
    }
})

export default appStore