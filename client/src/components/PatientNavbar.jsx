import React, { useState } from 'react'
import { FaWindowClose } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { NavLink, useNavigate } from 'react-router-dom'

function PatientNavbar() {
   const navigate = useNavigate()
    const [openPanel, setOpenpanel] = useState(false)
  return (
    <div className='w-full flex justify-end pr-6  z-[50]'>
      <div className="w-[72%] rounded-lg bg-[#004D43] flex justify-end mt-2  px-5 py-4 fixed ">
      <div className=" h-full  justify-between   hidden md:flex gap-14">
        <NavLink to="/patient/book-appointment" duration={3000}  className="text-xl text-white font-semibold  cursor-pointer ">
          Book Appointment
        </NavLink>
        
        <NavLink to='/patient/my-appointments'  className="text-xl font-semibold text-white cursor-pointer   ">
          My Appointments
        </NavLink>      

        

    </div>

    {!openPanel ? (
                    <GiHamburgerMenu size={30} onClick={()=> setOpenpanel(prev => !prev)} className="mr-4  text-white block md:hidden cursor-pointer" />
                  ) : (
                    <FaWindowClose size={30} onClick={()=> setOpenpanel(prev => !prev)} className="font-extrabold  mr-4 block md:hidden cursor-pointer text-white z-[999]" />
                  )}

    </div>


       <div
              className={` sm:w-[45%] w-[65%]    py-7 mt-2 text-white bg-[#004D43] ${
                !openPanel ? "hidden" : "absolute right-4 top-30  px-6 flex flex-col gap-4 rounded-lg"
              } `}
            >
                <NavLink to="/patient/book-appointment" duration={3000}  className="text-xl text-[#004D43] bg-white py-3 px-3 rounded-lg font-semibold  cursor-pointer ">
          Book Appointment
        </NavLink>
        
        <NavLink to='/patient/my-appointments'  className="text-xl font-semibold text-[#004D43] bg-white cursor-pointer  py-3 px-3 rounded-lg   ">
          My Appointments
        </NavLink>      
              
              
            </div>


    

    </div>
  )
}

export default PatientNavbar
