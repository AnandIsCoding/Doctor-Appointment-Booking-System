import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PatientNavbar from "../components/PatientNavbar";
import Sidebar from "../components/Sidebar";
import { useSelector } from "react-redux";
import axios from "axios";

function SingleDoctor() {
  const isOpen = useSelector((state) => state.sidebar);
  const { _id } = useParams();

  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDoctorById = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/api/v1/doctor/${_id}`);
      setDoctor(res.data.doctor);
    } catch (error) {
      console.error("Error fetching doctor details:", error);
      setError("Failed to fetch doctor details.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDoctorById();
  }, [_id]);

  return (
    <div className="z-[1]">
      {/* Navigation */}
      <div className="w-full pt-10 flex">
        <PatientNavbar />
        <Sidebar />
      </div>

      {/* Doctor Details */}
      <div
        className={`w-full mt-24 md:px-4 ${
          isOpen ? "md:pl-[18%] pl-28" : "pl-8 md:pl-[5%]"
        } flex flex-wrap justify-center items-center gap-6`}
      >
        {loading ? (
          <p className="text-lg text-gray-500">Loading doctor details...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          doctor && (
            <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6">
              <h1 className="text-2xl font-bold text-gray-800">
                Dr. {doctor.name}
              </h1>
              <p className="text-gray-600">Specialization: {doctor.specialization}</p>
              <p className="text-gray-600">Experience: {doctor.experience} years</p>
              <p className="text-gray-600">Email: {doctor.email}</p>
              <p className="text-gray-600">Phone: {doctor.phone}</p>
              <p className="text-gray-600">Location: {doctor.location}</p>

              {/* Doctor's Image */}
              {doctor.image && (
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="mt-4 w-full md:w-110 h-80 object-cover rounded-sm "
                />
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default SingleDoctor;
