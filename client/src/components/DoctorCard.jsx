import React from "react"; // Imported React library
import { FaStar } from "react-icons/fa"; // Imported star icon from react-icons
import { useSelector } from "react-redux"; // Imported useSelector to access Redux state
import { useNavigate } from "react-router-dom"; // Imported useNavigate for navigation
import toast from "react-hot-toast"; // Imported toast for displaying notifications


const DoctorCard = ({ doctor }) => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  // Function to handle book doctor button click
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
    <div className="bg-[#fefefe56] rounded-lg  md:p-2 w-[47.5%]  lg:w-70 md:w-60 group relative z-[10] ">
      {/* Doctor Image */}
      <div className="w-full min-h-[5vw] max-h-[30vw] md:max-h-[10vw]  rounded-2xl overflow-hidden group bg-green-700 ">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-full h-full object-cover rounded-lg transform group-hover:scale-110 transition duration-300"
        />
      </div>

      {/* Doctor Details */}
      <h3 className="text-sm font-semibold text-center mt-3">{doctor.name}</h3>
      <p className="text-gray-500 text-center">{doctor.specialization}</p>

      {/* Experience & Fee */}
      <div className="flex justify-between mt-3 text-sm">
        <p className="text-gray-600">Experience: {doctor.experience}</p>
        <p className="font-semibold text-[#004D43]">₹ {doctor.consultationFee}</p>
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
        className="mt-4 bg-[#27DFB3] text-black px-4 py-2 rounded-lg w-full  hover:bg-[#8EC5FF]  transition cursor-pointer"
      >
        Book Appointment
      </button>
    </div>
  );
};

export default DoctorCard;
