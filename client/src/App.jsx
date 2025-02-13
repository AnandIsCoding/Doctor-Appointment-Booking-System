import React from "react"
import Strip from "./components/Strip"
import NotFound from "../src/pages/NotFound"
import { Routes, Route } from "react-router-dom"
import { Suspense } from "react"
import Home from "../src/pages/Home"
import Patient from "./pages/Patient"
import Doctors from "./pages/Doctors"
import Services from "./pages/Services"
import Contact from "./pages/Contact"
import Footer from "./components/Footer"
function App() {

  const disableContextMenu = (event) => {
    event.preventDefault();
  };

  return (
    <div onContextMenu={disableContextMenu} className="w-screen scroll-smooth ">
    <Strip/>
    <Suspense
      // Fallback loader while components are loading
        fallback={
          <div className="absolute top-0 left-0 bottom-0 right-0 bg-black flex justify-center items-center duration-[2s]">
            <img src='/loader.gif' alt="loader" className="" />
          </div>
        }
      >
      
        <Routes>
          <Route
            path="/"
            element={
              <Home/>
            }
          />

          <Route
            path="/patient"
            element={
              <Patient/>
            }
          />

<Route
            path="/doctors"
            element={
              <Doctors/>
            }
          />

<Route
            path="/services"
            element={
              <Services/>
            }
          />

          
<Route
            path="/contact"
            element={
              <Contact/>
            }
          />
          


          {/* Route for handling 404 - Not Found */}
          <Route path="*" element={ <NotFound/>} />
        </Routes>
      </Suspense>
       <Footer/>
    </div>
  )
}

export default App
