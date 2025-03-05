import React, { useEffect, useState } from "react"; // Imported React and necessary hooks
import { useNavigate } from "react-router-dom"; // Imported useNavigate for navigation
import { useSelector } from "react-redux"; // Importing useSelector to access Redux state
import { FaUserDoctor } from "react-icons/fa6"; // Imported doctor icon from react-icons
import { FaStethoscope } from "react-icons/fa"; // Imported stethoscope icon from react-icons

function MobileOption() {
  const navigate = useNavigate(); // Initializing navigation function
  const user = useSelector((state) => state.user); // Accessing user data from Redux store


  return (
    <nav
      aria-label="Mobile Navigation"
      className="w-screen fixed bottom-0 left-0 right-0 md:hidden px-2 pt-1 pb-1 text-white bg-[#27DFB3] z-[9999] flex justify-between"
    >
      {/* Account Button */}
      <button aria-label="Account" onClick={() => navigate("/patient")}>
        <div
          className={` w-[13vw] h-[13vw]  bg-violet-100 ml-auto mr-auto rounded-full`}
        >
          <img
            src={
              user
                ? user.image
                : "https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369988.png"
            }
            alt="user_image"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </button>

      {/* Book Appointment Button */}
      <button
        aria-label="Book Appointment"
        onClick={() => navigate("/patient/book-appointment")}
        className="text-black"
      >
        <FaUserDoctor size={32} aria-hidden="true" className="ml-10" />
        <p>Book Appointment</p>
      </button>

      {/* My Appointments Button */}
      <button
        aria-label="My Appointments"
        onClick={() => navigate("/patient/my-appointments")}
        className="text-black"
      >
        <FaStethoscope size={32} aria-hidden="true" className="ml-10" />
        <p>All Appointments</p>
      </button>
    </nav>
  );
}

export default MobileOption;
