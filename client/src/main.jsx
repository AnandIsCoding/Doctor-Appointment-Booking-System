import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import appStore from './redux/appStrore.js'
import {Provider} from 'react-redux'
import {Toaster} from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
   <Provider store={appStore}>
   <BrowserRouter>
   {/* Toaster to show notifications */}
   <Toaster position="top-center" reverseOrder={false} />
    {/* Main App component */}
   <App />
 </BrowserRouter>
 </Provider>
)
