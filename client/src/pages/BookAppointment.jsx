import React, { useEffect, useState } from "react";
import PatientNavbar from "../components/PatientNavbar";
import Sidebar from "../components/Sidebar";
import { useSelector } from "react-redux";
import DoctorCard from "../components/DoctorCard";
import MobileOption from "../components/MobileOption";

function BookAppointment() {
  // access global states 
  const isOpen = useSelector((state) => state.sidebar);
  const doctors = useSelector((state) => state.doctors.doctors);
  const [selectedSpecialization, setSelectedSpecialization] = useState("All");

  // Filter doctors based on the selected specialization
  const filteredDoctors =
    selectedSpecialization === "All"
      ? doctors
      : doctors.filter((doc) => doc.specialization === selectedSpecialization);

  return (
    <div className="z-[1]">
      {/* show MobileOption, will only be displayed in mobile screens not in laptop screen */}
      <MobileOption />
      <div className="w-full pt-10 flex">
        {/*  */}
        <PatientNavbar />

{/* display sidebar */}

        <Sidebar />
      </div>

      <div
        className={`w-full mt-14 pl-0  ${
          isOpen ? "pl-0 md:pl-[11%] " : "pl-0 md:pl-[6%]"
        } `}
      >
        {/* filter doctors */}
        {/* categories specialization options */}
        <div
          className={`w-full md:px-2 md:justify-center ${
            isOpen ? " pl-0 md:pl-[18%] " : "pl-0 md:pl-[5%]"
          } mb-3 pl-0  py-2 text-white flex gap-2 overflow-x-scroll relative`}
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
          ].map((specialization) => (
            <button
              key={specialization}
              onClick={() => setSelectedSpecialization(specialization)}
              className={`px-4 border-1 border-[grey]  text-black active:scale-105 transition-all duration-300 py-2 rounded-lg text-xl flex-shrink-0 cursor-pointer  hover:text-black font-xs ${
                selectedSpecialization === specialization
                  ? "bg-[#FFDB52] text-black"
                  : "hover:bg-blue-300"
              } `}
            >
              {specialization}
            </button>
          ))}
        </div>
      </div>

      {/* all doctors card */}
      <div
        className={`w-full pb-34 md:pb-8  flex flex-wrap justify-center items-stretch gap-4 px-2 ${
          isOpen ? "md:pl-[18%] pl-0" : "md:pl-[5%]"
        }`}
      >
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doctor) => (
            <DoctorCard key={doctor._id} doctor={doctor} />
          ))
        ) : (
          <h1 className="text-center w-full text-xl font-bold">
            No Doctors Found 🥹
          </h1>
        )}
      </div>
    </div>
  );
}

// export component
export default BookAppointment;
