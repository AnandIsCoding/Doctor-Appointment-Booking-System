import React, { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import { TbTableOptions } from "react-icons/tb";
import { BiSolidUserAccount } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaUserDoctor } from "react-icons/fa6";
import { FaStethoscope } from "react-icons/fa";

function MobileOption() {
  const navigate = useNavigate()
  const user = useSelector(state => state.user)


  return (
    <nav
      aria-label="Mobile Navigation"
      className="w-screen fixed bottom-0 left-0 right-0 md:hidden px-2 pt-1 pb-1 text-white bg-[#27DFB3] z-[9999] flex justify-between"
    >

   {/* Account Button */}
      <button aria-label="Account" onClick={()=>navigate('/patient')}>
      <div className={` w-[13vw] h-[13vw]  bg-violet-100 ml-auto mr-auto rounded-full`}>
        <img
          src={user ? user.image : "https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369988.png"}
          alt="user_image"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      
      </button>



      




      <button aria-label="Book Appointment" onClick={()=>navigate('/patient/book-appointment')} className="text-black">
      <FaUserDoctor size={32} aria-hidden="true" className="ml-10"/>
      <p>Book Appointment</p>
      
      </button>



      <button aria-label="My Appointments" onClick={()=>navigate('/patient/my-appointments')} className="text-black">
      <FaStethoscope size={32} aria-hidden="true" className="ml-10"/>
      <p>All Appointments</p>
      
      </button>

      


      
    </nav>
  );
}

export default MobileOption;