import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { NavLink, useNavigate } from 'react-router-dom'
import { RiCloseLargeFill } from "react-icons/ri";
import { FaWindowClose } from "react-icons/fa";
import { useSelector } from "react-redux";

function Navbar() {

  const navigate = useNavigate()
  const [openPanel, setOpenpanel] = useState(false)
  const user = useSelector(state => state.user)
  return (
    <div className='w-full flex justify-center z-[50]  '>
      <div className="w-[98%] rounded-lg bg-[#18cca2]  flex justify-between mt-8  px-5 fixed ">
      <div onClick={()=>navigate('/')} className=" w-[20%] md:w-[48%] h-full text-xl md:text-2xl font-semibold px-4 md:px-10 py-4 text-black cursor-pointer">
      सेवा
      </div>

      <div className=" h-full  justify-between gap-4  pt-4 hidden md:flex">
        <NavLink to="/doctors" duration={3000}  className="text-lg text-white font-semibold  cursor-pointer ">
          Doctors
        </NavLink>
       
        <NavLink to="/services" duration={2000} className="text-lg text-white font-semibold  cursor-pointer ">
          Services
        </NavLink>
        <NavLink to='/contact'  className="text-lg font-semibold text-white cursor-pointer   ">
          Contact
        </NavLink>
        
        <NavLink
  rel="noopener noreferrer"
  to={`${user  ? '/patient' : '/signup-login' }`}
  className="text-xl font-semibold cursor-pointer bg-white text-black px-5 py-2  animate-bounce duration-500 flex items-center rounded-lg"
>
 {user ? 'Dashboard' : ' Signup'}
</NavLink>
  <h1
          onClick={() => setOpenpanel(!openPanel)}
          className="md:hidden text-2xl font-semibold text-black cursor-pointer ml-20 "
        >
          {!openPanel ? <GiHamburgerMenu /> : <RiCloseLargeFill  />}
        </h1>

    </div>

    {!openPanel ? (
            <GiHamburgerMenu size={30} onClick={()=> setOpenpanel(prev => !prev)} className="mr-4 mt-4 text-black block md:hidden cursor-pointer" />
          ) : (
            <FaWindowClose size={30} onClick={()=> setOpenpanel(prev => !prev)} className="font-extrabold mt-4 mr-4 block md:hidden cursor-pointer text-black z-[999]" />
          )}

    </div>


          
          
          <div
          className={` sm:w-[45%] w-[45%]    py-7 text-white bg-[#17c9a0] ${
            !openPanel ? "hidden" : "fixed right-4 top-30 leading-1 px-6 flex flex-col gap-4 rounded-lg z-[999]"
          } `}
        >
           <NavLink onClick={()=> setOpenpanel(prev => !prev)} to="/" duration={3000}  className="text-xl text-white font-semibold  cursor-pointer ">
          Seva Home
        </NavLink>
           <NavLink to="/doctors" duration={3000}  className="text-xl font-semibold  cursor-pointer ">
          Doctors
        </NavLink>
        <NavLink to="/services" duration={2000} className="text-xl  font-semibold  cursor-pointer ">
          Services
        </NavLink>
        <NavLink to='/contact'  className="text-xl font-semibold  cursor-pointer   ">
          Contact
        </NavLink>
        <NavLink
  rel="noopener noreferrer"
  to={`${user  ? '/patient' : '/signup-login' }`}
  className="text-xl font-semibold cursor-pointer bg-white text-black w-full  px-5 py-2  animate-bounce duration-500 flex items-center rounded-lg"
>
  {user ? 'Dashboard' : ' Signup'}
</NavLink>
          
          
        </div>

    </div>
  )
}

export default Navbar
