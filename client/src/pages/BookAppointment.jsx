import React, { useEffect, useState } from "react";
import PatientNavbar from "../components/PatientNavbar";
import Sidebar from "../components/Sidebar";
import { useSelector } from "react-redux";
import DoctorCard from "../components/DoctorCard";

function BookAppointment() {
  const isOpen = useSelector(state => state.sidebar)
    const doctors = useSelector(state => state.doctors.doctors)    
    const [selectedSpecialization, setSelectedSpecialization] = useState("All");
    
    // Filter doctors based on the selected specialization
  const filteredDoctors =
  selectedSpecialization === "All"
    ? doctors
    : doctors.filter((doc) => doc.specialization === selectedSpecialization);

  
  
  return (
    <div className="z-[1]">
      <div className="w-full pt-10 flex">
        <PatientNavbar />
        
        <Sidebar />
        
      </div>
      
      <div className={`w-full mt-14  ${isOpen ? "md:pl-[11%] pl-3" : "pl-4 md:pl-[6%]"} `}> 

          {/* filter doctors */}
           {/* categories specialization options */}
        <div
          className={`w-full md:px-2 md:justify-center ${isOpen ? "md:pl-[18%] pl-32" : "pl-24 md:pl-[5%]"} mb-3 pl-14  py-2 text-white flex gap-2 overflow-x-scroll relative`}
        >
          {[
  "All",
  "General Physician",
  "Cardiologist",
  "Gynecologist",
  "Neurologist",
  "Orthopedic",
  "Dermatologist",
  "Dentist",
  "Gastroenterologist",
]
.map((specialization) => (
            <button
              key={specialization}
              onClick={() => setSelectedSpecialization(specialization)}
              className={`px-4 border-1 border-[grey]  text-black active:scale-105 transition-all duration-300 py-2 rounded-lg text-xl flex-shrink-0 cursor-pointer  hover:text-black font-xs ${selectedSpecialization === specialization ? "bg-[#FFDB52] text-black" : "hover:bg-blue-300"} `}
            >
              {specialization}
            </button>
          ))}
          
        </div>
      </div>



            {/* all doctors card */}
         <div className={`w-full flex flex-wrap justify-center items-stretch gap-4 ${isOpen ? "md:pl-[18%] pl-14" : "md:pl-[5%]"}`}>
         {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doctor) => <DoctorCard key={doctor._id} doctor={doctor} />)
        ) : (
          <h1 className="text-center w-full text-xl font-bold">No Doctors Found 🥹</h1>
        )}
         </div>
       </div>
    
  );
}

export default BookAppointment;
