import React, { useState } from 'react'
import { FaWindowClose } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useSelector } from 'react-redux'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'

function PatientNavbar() {
   const navigate = useNavigate()
   const location = useLocation()
    const [openPanel, setOpenpanel] = useState(false)
    const isOpen = useSelector(state => state.sidebar)
  return (
    
      <>
        <div className={` w-fit pr-6 z-[50] md:bg-black    px-4  flex flex-wrap justify-center items-stretch gap-4 py-3 rounded-md mr-4 absolute right-0 md:fixed`}>
      <div className=" h-full  justify-between   hidden md:flex gap-14">
        <NavLink to="/patient/book-appointment" duration={3000}  className="text-lg flex gap-2 text-white font-semibold  cursor-pointer ">
          Book Appointment {location.pathname == '/patient/book-appointment' && <h1>💡</h1>}
        </NavLink>
        
        <NavLink to='/patient/my-appointments'  className="text-lg font-semibold flex gap-2 text-white cursor-pointer   ">
          My Appointments {location.pathname == '/patient/my-appointments' && <h1>💊</h1>}
        </NavLink>      

        

    </div>

    {!openPanel ? (
                    <GiHamburgerMenu size={32} onClick={()=> setOpenpanel(prev => !prev)} className="  text-black block md:hidden cursor-pointer" />
                  ) : (
                    <FaWindowClose size={32} onClick={()=> setOpenpanel(prev => !prev)} className="font-extrabold   block md:hidden cursor-pointer text-black z-[999]" />
                  )}

    </div>


       <div
              className={` sm:w-[45%] w-[65%]  z-[999]  py-7 mt-2 text-white bg-black ${
                !openPanel ? "hidden" : "fixed right-4 top-30  px-6 flex flex-col gap-4 rounded-lg"
              } `}
            >
                <NavLink to="/patient/book-appointment" onClick={()=> setOpenpanel(prev => !prev)} duration={3000}  className="text-xl text-[#004D43] bg-white py-3 px-3 rounded-lg font-semibold  cursor-pointer ">
          Book Appointment
        </NavLink>
        
        <NavLink to='/patient/my-appointments' onClick={()=> setOpenpanel(prev => !prev)}  className="text-xl font-semibold text-[#004D43] bg-white cursor-pointer  py-3 px-3 rounded-lg   ">
          My Appointments
        </NavLink>      
              
              
            </div>
      </>


    

    
  )
}

export default PatientNavbar
