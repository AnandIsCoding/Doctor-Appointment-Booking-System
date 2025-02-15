import React from "react";
import PatientNavbar from "../components/PatientNavbar";
import Sidebar from "../components/Sidebar";
import { useSelector } from "react-redux";
import sampleDoctors from "../utils/sampleDoctor";
import DoctorCard from "../components/DoctorCard";

function BookAppointment() {
  const isOpen = useSelector(state => state.sidebar)
  return (
    <div className="z-[1]">
      <div className="w-full pt-10 flex">
        <PatientNavbar />
        
        <Sidebar />
        
      </div>
      
      <div className={`w-full mt-20  ${isOpen ? "md:pl-[18%] pl-3" : "pl-4 md:pl-[5%]"} `}> 

          {/* filter doctors */}
           {/* categories specialization options */}
        <div
          className={`w-full md:px-2 md:justify-center ${isOpen ? "md:pl-[18%] pl-32" : "pl-24 md:pl-[5%]"} mb-3 pl-14  py-2 text-white flex gap-2 overflow-x-scroll relative`}
        >
          {[
  "All",
  "General Physician",
  "Cardiologist",
  "Neurologist",
  "Orthopedic",
  "Pediatrician",
  "Dermatologist",
  "Gynecologist",
  "Dentist",
  "Gastroenterologist",
]
.map((specialization) => (
            <button
              key={specialization}
              onClick={() => console.log(specialization)}
              className="px-4 bg-[#004D43] text-white active:scale-105 transition-all duration-300 py-2 rounded-lg text-xl flex-shrink-0 cursor-pointer hover:bg-[#27DFB3] hover:text-black font-normal  "
            >
              {specialization}
            </button>
          ))}
          
        </div>
      </div>



            {/* all doctors card */}
         <div className={`w-full flex flex-wrap justify-center items-stretch gap-4 ${isOpen ? "md:pl-[18%]" : "md:pl-[5%]"}`}>
         {
          sampleDoctors.map((item)=>{
            return <DoctorCard key={item._id}  doctor={item} />
          })
         } 
         </div>
       </div>
    
  );
}

export default BookAppointment;
