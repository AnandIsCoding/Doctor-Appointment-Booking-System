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
      <div className={`w-full mt-24 px-4 ${isOpen ? "md:pl-[18%]" : "md:pl-[5%]"} flex flex-wrap justify-center items-stretch gap-4`}> 
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
