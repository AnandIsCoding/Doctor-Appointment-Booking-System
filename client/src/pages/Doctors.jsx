import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import sampleDoctors from "../utils/sampleDoctor";
import DoctorCard from "../components/DoctorCard";

function Doctors() {
  return (
    <div className="w-full  ">
      <Navbar />

      {/* categories options */}
      <div className="w-full  md:justify-center mb-3 mt-34  md:pl-[75vw]  py-2 text-white flex gap-2 overflow-x-scroll relative">
        {[
          "All",
          "General Physician",
          "Cardiologist",
          "Neurologist",
          "Orthopedic",
          "Pediatrician",
          "Dermatologist",
          "Gynecologist",
          "ENT Specialist",
          "Ophthalmologist",
          "Psychiatrist",
          "Dentist",
          "Urologist",
          "Oncologist",
          "Endocrinologist",
          "Nephrologist",
          "Pulmonologist",
          "Gastroenterologist",
          "Others",
        ].map((specialization) => (
          <button
            key={specialization}
            onClick={() => console.log(specialization)}
            className="px-4 bg-[#004D43] text-white active:scale-105 transition-all duration-300 py-2 rounded-lg text-xl flex-shrink-0 cursor-pointer  hover:bg-[#27DFB3] hover:text-black "
          >
            {specialization}
          </button>
        ))}
      </div>

      {/* all doctors crd visible for all users weather user registered or not */}

      <div className="w-full mt-8 mb-[5vw] flex flex-wrap flex-shrink-0 gap-4 px-2 md:px-4 z-[10] ">
        {sampleDoctors.map((item) => {
          return <DoctorCard key={item._id} doctor={item} />;
        })}
      </div>

      <Footer />
    </div>
  );
}

export default Doctors;
