import React from 'react';
import { FaAmbulance, FaUserMd, FaBriefcaseMedical, FaClock } from "react-icons/fa";

// Array to store details of the hospital services with uniform length
const hospitalServices = [
  {
    icon: <FaAmbulance size={38} aria-label="Emergency Services Icon" className="text-[#27DFB3] mt-3" />,
    title: "24/7 Emergency Care",
    description: "Quick ambulance service, always on call",
  },
  {
    icon: <FaUserMd size={38} aria-label="Specialist Doctors Icon" className="text-[#27DFB3] mt-3" />,
    title: "Expert Medical Team",
    description: "Top doctors providing trusted healthcare",
  },
  {
    icon: <FaBriefcaseMedical size={38} aria-label="Advanced Treatment Icon" className="text-[#27DFB3] mt-3" />,
    title: "Modern Treatments",
    description: "Latest technology & advanced procedures",
  },
  {
    icon: <FaClock size={38} aria-label="24/7 Support Icon" className="text-[#27DFB3] mt-3" />,
    title: "24/7 Patient Support",
    description: "Round-the-clock care for every patient",
  },
];

// Functional Component for the "Hospital Services" section
function HospitalServicesStrip() {
  return (
    <div className="w-full px-5 py-6 flex flex-col mt-0 gap-6  duration-200">
      {/* Section Title */}
      <h1 className="text-center text-green-900 font-bold text-xl">Our Medical Services</h1>

      {/* Grid layout to display the hospital services */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {hospitalServices.map((service, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center text-center space-y-2"
          >
            {/* Display the icon */}
            {service.icon}

            {/* Display the title and description */}
            <h1 className="text-lg text-green-950 font-bold">{service.title}</h1>
            <p className="text-sm text-green-950">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HospitalServicesStrip;
