import React from "react";
import { FaStar } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const DoctorCard = ({ doctor }) => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const handleBookDoctorBtnClick = () => {
    if (!user) {
      navigate("/signup-login");
      toast.error("Please Signup to Book Appointment!", {
        duration: 4000, // Toast disappears after 4s
      });
    } else {
      navigate(`/patient/book-appointment/${doctor._id}`);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-5 sm:w-full md:w-72 group relative z-[10] ">
      {/* Doctor Image */}
      <div className="w-full min-h-[5vw] rounded-2xl overflow-hidden group">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-full h-full object-cover rounded-2xl transform group-hover:scale-110 transition duration-300"
        />
      </div>

      {/* Doctor Details */}
      <h2 className="text-lg font-bold text-center mt-3">{doctor.name}</h2>
      <p className="text-gray-500 text-center">{doctor.specialization}</p>

      {/* Experience & Fee */}
      <div className="flex justify-between mt-3 text-sm">
        <p className="text-gray-600">Experience: {doctor.experience}</p>
        <p className="font-semibold text-[#004D43]">{doctor.consultationFee}</p>
      </div>

      {/* Rating */}
      <div className="flex items-center justify-center gap-1 mt-2">
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            className={`text-lg ${
              i < Math.floor(doctor.rating) ? "text-yellow-500" : "text-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Book Appointment Button */}
      <button
        onClick={handleBookDoctorBtnClick}
        className="mt-4 bg-[#004D43] text-white px-4 py-2 rounded-lg w-full hover:bg-[#026A55] transition cursor-pointer"
      >
        Book Appointment
      </button>
    </div>
  );
};

export default DoctorCard;
