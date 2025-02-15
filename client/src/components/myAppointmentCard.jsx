import React, { useState } from "react";
import toast from "react-hot-toast";

const MyAppointmentCard = ({ doctor, setShowFeedbackform}) => {
  return (
    <div className="md:w-[70%] flex items-center justify-between bg-white shadow-lg rounded-lg p-4 border border-gray-300">
      
      {/* Left Side - Doctor's Image & Details */}
      <div className="flex items-center gap-4">
        <img 
          src={doctor.image} 
          alt={doctor.name} 
          className="w-24 h-24 rounded-lg object-cover border-2 border-gray-400" 
        />
        <div>
          <h2 className="text-lg font-semibold">{doctor.name}</h2>
          <p className="text-gray-600">{doctor.specialization}</p>
          <p className="text-gray-500">{doctor.experience} Experience</p>
          <p className="text-gray-500">{doctor.qualification}</p>
          <p className="text-gray-500">{doctor.location}</p>
          <p className="text-green-600 font-semibold">₹{doctor.consultationFee}</p>
        </div>
      </div>

      {/* Right Side - Feedback btn Button */}
      <button 
        // onClick={() => onFeedback(doctor._id)}
        onClick={()=>setShowFeedbackform(prev => !prev)}
        className="px-4 py-2 bg-[#27DFB3] text-black font-medium rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer"
      >
        Feedback
      </button>


   

    </div>
  );
};

export default MyAppointmentCard;