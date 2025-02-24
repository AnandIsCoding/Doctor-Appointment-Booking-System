import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { toggle } from '../redux/slices/sidebarSlice';
import { LuSquareArrowLeft, LuSquareArrowRight } from "react-icons/lu";
import { AiOutlineLogout } from "react-icons/ai";
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

function Sidebar() {

  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useDispatch()
  const isOpen = useSelector(state => state.sidebar)

  const handleSidebarToggle = () => {
    dispatch(toggle())
  }

  return (
    <div className={`fixed  ${isOpen ? "w-[28%]  md:w-[15%]  px-3" : " w-[13%] md:w-[5%] px-0.5 md:px-2 "} min-h-screen bg-black ml-0 md:ml-4  mt-2 rounded-md z-[999]  py-5 flex flex-col gap-2 transition-all duration-300 ease-in-out`}>
      
      {/* open close arrow */}
      <div className={`flex ${isOpen ? "justify-end" : "justify-center"} `}>
        {
          isOpen ? <LuSquareArrowLeft
            size={30}
            className="text-white cursor-pointer"
            onClick={() => handleSidebarToggle()}
          /> : <LuSquareArrowRight
            size={30}
            className="text-white cursor-pointer"
            onClick={() => handleSidebarToggle()}
          />
        }
      </div>

      {/* image icon */}
      <div className="w-[10vw] h-[10vw] md:w-[2.5vw] md:h-[2.5vw] bg-violet-100 ml-auto mr-auto rounded-full">
        <img
          src="https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369988.png"
          alt="user_image"
          className="w-full h-full object-cover"
        />
      </div>

      <button onClick={() => navigate('/patient')} className={`w-full ${location.pathname === "/patient" ? "bg-[#27DFB3] text-black" : "bg-white text-black"} cursor-pointer py-2 rounded-lg `}>Patient</button>

      <NavLink to="/patient/book-appointment" duration={3000} className={`w-full  ${location.pathname === "/patient/book-appointment" ? "bg-[#27DFB3] text-black" : "bg-white text-black"} text-center py-2 rounded-lg cursor-pointer `}>
        New
      </NavLink>

      <NavLink to='/patient/my-appointments' className={`w-full ${location.pathname === "/patient/my-appointments" ? "bg-[#27DFB3] text-black" : "bg-white text-black"} py-2 text-center rounded-lg cursor-pointer`}>
        All
      </NavLink>

      {/* Logout button at the bottom */}
      <div className="mt-auto mb-28 md:mb-14">
        {
          isOpen ? 
            <button className="w-full bg-white px-2 py-2 rounded-lg cursor-pointer">Logout</button> 
          : 
            <AiOutlineLogout
              size={30}
              className="text-white cursor-pointer w-full"
            />
        }
      </div>
      
    </div>
  )
}

export default Sidebar
