import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate()
  return (
    <div className='w-full flex justify-center'>
      <div className="w-[92%] rounded-lg bg-[#004D43] flex justify-between mt-14  px-5 fixed ">
      <div onClick={()=>navigate('/')} className=" w-[20%] md:w-[48%] h-full text-xl md:text-2xl font-semibold px-4 md:px-10 py-4 text-white cursor-pointer">
      सेवा
      </div>

      <div className="w-[35%] h-full  justify-between  pt-4 hidden md:flex">
        <NavLink to="/doctors" duration={3000}  className="text-xl text-white font-semibold  cursor-pointer ">
          Doctors
        </NavLink>
        <NavLink to="/services" duration={2000} className="text-xl text-white font-semibold  cursor-pointer ">
          Services
        </NavLink>
        <NavLink to='/contact'  className="text-xl font-semibold text-white cursor-pointer   ">
          Contact
        </NavLink>
        <NavLink
  target="_blank"
  rel="noopener noreferrer"
  className="text-xl font-semibold cursor-pointer bg-white text-black px-5 py-2  animate-bounce duration-500 flex items-center rounded-lg"
>
  Signup
</NavLink>

    </div>

    </div>

    </div>
  )
}

export default Navbar
