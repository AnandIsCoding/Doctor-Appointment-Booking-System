import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DoctorCard from "../components/DoctorCard";
import { useSelector } from "react-redux";

function Doctors() {
  const doctors = useSelector((state) => state.doctors.doctors);
  const [selectedSpecialization, setSelectedSpecialization] = useState("All");

  // Filter doctors based on the selected specialization
  const filteredDoctors =
    selectedSpecialization === "All"
      ? doctors
      : doctors.filter((doc) => doc.specialization === selectedSpecialization);

  return (
    <div className="w-full">
    {/* Display Navbar */}
      <Navbar />

      {/* Categories Selection */}
      <div className="w-full md:justify-center mb-3 mt-28  py-2 text-white flex gap-2 overflow-x-scroll relative">
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
            className={`px-4 text-black border-1 border-[grey] hover:scale-105  transition-all duration-300 py-2 rounded-lg text-xl flex-shrink-0 cursor-pointer ${
              selectedSpecialization === specialization ? "bg-[#FFDB52]" : "hover:bg-blue-300"
            }`}
          >
            {specialization}
          </button>
        ))}
      </div>

      {/* Display Doctors */}
      <div className="w-full mt-8 mb-[5vw] flex flex-wrap flex-shrink-0 gap-4 px-2 md:px-4 z-[10]">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doctor) => <DoctorCard key={doctor._id} doctor={doctor} />)
        ) : (
          <h1 className="text-center w-full text-xl font-bold">No Doctors Found 🥹</h1>
        )}
      </div>

{/* display Footer */}
      <Footer />
    </div>
  );
}

// export Doctors component
export default Doctors;
