import React, { useState } from 'react'
import { FaWindowClose } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'

import { addUser } from '../redux/slices/userSlice';
import toast from 'react-hot-toast'
import axios from 'axios'

function PatientNavbar() {
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const location = useLocation()
    const [openPanel, setOpenpanel] = useState(false)
    const user = useSelector(state => state.user)

    
          const [isLoading, setIsloading] = useState(false);

    const handleLogout = async() =>{
      // Show loading toast
      const loadingToast = toast.loading("Please Wait .... ");
      setIsloading(true);
     
      try {
         const res = await axios.delete('https://dochealth.onrender.com/api/v1/user/logout',{withCredentials:true})
         if(res.data.success){
          toast.success("Logged out successfully!")
          navigate('/')
          dispatch(addUser(null))
         }else{
            toast.error(res.data.error || "Logout failed!");
         }
      } catch (error) {
        toast.error(
          error?.message || "An unexpected error occurred!"
        );
        console.log(error)
      }finally {
        setIsloading(false);
        toast.dismiss(loadingToast);
      }
    }
  return (
    
      <>
        <div className={` w-fit  z-[50] border-0  md:border-1 border-black bg-none md:bg-white  flex flex-wrap justify-center items-stretch gap-4  rounded-md mr-4 absolute right-0 md:fixed`}>
      <div className=" h-full  justify-between   hidden md:flex gap-14 px-2 py-2">

        <NavLink to="/patient/book-appointment" duration={3000}  className={`text-lg flex gap-2 text-black font-normal cursor-pointer ${location.pathname == '/patient/book-appointment' ? 'md:bg-[#FFDB52] border-black border-1 py-1 ' : 'md:bg-none'} px-3 py-1 rounded-md transition duration-300`}>
          Book Appointment 
        </NavLink>
        
        <NavLink to='/patient/my-appointments'  className={`text-lg flex gap-2 text-black font-normal cursor-pointer ${location.pathname == '/patient/my-appointments' ? 'md:bg-[#FFDB52] border-black border-1 py-1 ' : 'md:bg-none'} px-3 py-1 rounded-md transition duration-300 `}>
          My Appointments
        </NavLink>      

        

    </div>

    {!openPanel ? (
                    <GiHamburgerMenu size={32} onClick={()=> setOpenpanel(prev => !prev)} className="  text-black block md:hidden cursor-pointer" />
                  ) : (
                    <FaWindowClose size={32} onClick={()=> setOpenpanel(prev => !prev)} className="font-extrabold   block md:hidden cursor-pointer text-black z-[999]" />
                  )}

    </div>


       <div
              className={` sm:w-[45%] w-[65%]  z-[999]  py-7 mt-2 text-white bg-[#81f6db] ${
                !openPanel ? "hidden" : "fixed right-4 top-30  px-6 flex flex-col gap-4 rounded-lg"
              } `}
            >
                <NavLink to="/patient/book-appointment" onClick={()=> setOpenpanel(prev => !prev)} duration={3000}  className="text-xl text-[#004D43] bg-white py-3 px-3 rounded-lg font-semibold  cursor-pointer ">
          Book Appointment
        </NavLink>
        
        <NavLink to='/patient/my-appointments' onClick={()=> setOpenpanel(prev => !prev)}  className="text-xl font-semibold text-[#004D43] bg-white cursor-pointer  py-3 px-3 rounded-lg   ">
          My Appointments
        </NavLink>  

        <NavLink  onClick={handleLogout}  className="text-xl font-semibold text-[#004D43] bg-white cursor-pointer  py-3 px-3 rounded-lg   ">
          Logout
        </NavLink>      
              
              
            </div>
      </>


    

    
  )
}

export default PatientNavbar
