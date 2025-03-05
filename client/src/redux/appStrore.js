import { configureStore } from "@reduxjs/toolkit"; // Importing configureStore from Redux Toolkit

// Importing reducers from different slices
import sidebarReducer from './slices/sidebarSlice'; // Sidebar state management
import userReducer from './slices/userSlice'; // User authentication and data management
import doctorReducer from './slices/doctorSlice'; // Doctors list and related data management

// Configuring the Redux store
const appStore = configureStore({
    reducer: {
        sidebar: sidebarReducer, // Managing sidebar visibility state
        user: userReducer, // Managing user-related state (authentication, profile, etc.)
        doctors: doctorReducer // Managing doctors-related state
    }
});

// Exporting the configured store to be used in the application
export default appStore;
