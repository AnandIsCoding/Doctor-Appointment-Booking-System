import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PatientNavbar from "../components/PatientNavbar";
import Sidebar from "../components/Sidebar";
import { useSelector } from "react-redux";
import axios from "axios";
import toast from "react-hot-toast";

function SingleDoctor() {
  const navigate = useNavigate();
  const isOpen = useSelector((state) => state.sidebar);
  const { _id } = useParams();

  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [weekDays, setWeekdays] = useState([
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
  ]);
  const timeSlots = [
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
    "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
    "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM",
    "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM",
    "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM",
    "07:00 PM", "07:30 PM", "08:00 PM", "08:30 PM",
  ];

  const [formData, setFormData] = useState({ weekdays: "", timeSlot: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const fetchDoctorById = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/api/v1/doctor/${_id}`);
      setDoctor(res.data.doctor);
    } catch (error) {
      setError("Failed to fetch doctor details.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDoctorById();
  }, [_id]);

  const handleBookAppointment = async () => {
    try {
      if (!formData.timeSlot || !formData.weekdays) {
        return toast.error("Please select a valid day and time slot.");
      }
      const dateObj = new Date();
      const formattedDate = dateObj.toISOString().split("T")[0];
      const response = await axios.post(
        `http://localhost:3000/api/v1/appointment/book-appointment`,
        {
          doctorId: _id,
          timeSlot: formData.timeSlot,
          dateSlot: formattedDate,
        },
        { withCredentials: true }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        navigate("/patient/my-appointments");
      } else {
        toast.error(response.data.data.message);
      }
    } catch (error) {
      console.log(error)
      toast.error(error.response.data.message || "Failed to book appointment. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="w-full pt-10 flex">
        <PatientNavbar />
        <Sidebar />
      </div>

      <div className={`w-full mt-24 px-4 flex flex-wrap justify-center items-center gap-6 ${isOpen ? "md:pl-[18%]" : "md:pl-[5%]"}`}>
        {loading ? (
          <p className="text-lg text-gray-500">Loading doctor details...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          doctor && (
            <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6 space-y-4">
              <h1 className="text-2xl font-bold text-gray-800">Dr. {doctor?.name}</h1>
              <p className="text-gray-600">Specialization: {doctor?.specialization}</p>
              <p className="text-gray-600">Experience: {doctor?.experience} years</p>
              <p className="text-gray-600">Email: {doctor?.email}</p>
              <p className="text-gray-600">Phone: {doctor?.phone}</p>
              <p className="text-gray-600">Location: {doctor?.location}</p>

              {doctor?.image && (
                <img src={doctor?.image} alt={doctor?.name} className="w-full md:w-96 h-60 object-cover rounded-md shadow-md" />
              )}

              <div className="w-full py-2 flex flex-col gap-4">
                <label className="text-gray-800 font-semibold">Select a Day</label>
                <select
                  name="weekdays"
                  value={formData.weekdays}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md text-lg px-4 py-2 bg-white focus:ring focus:ring-green-200"
                >
                  <option value="" disabled>Select a Day</option>
                  {weekDays.map((day, index) => (
                    <option key={index} value={day}>{day}</option>
                  ))}
                </select>

                <label className="text-gray-800 font-semibold">Select Time Slot</label>
                <select
                  name="timeSlot"
                  value={formData.timeSlot}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md text-lg px-4 py-2 bg-white focus:ring focus:ring-green-200"
                >
                  <option value="" disabled>Select Time Slot</option>
                  {timeSlots.map((time, index) => (
                    <option key={index} value={time}>{time}</option>
                  ))}
                </select>
              </div>

              <button
                onClick={handleBookAppointment}
                className="mt-4 bg-[#27DFB3] text-white px-6 py-2 rounded-md w-full hover:bg-[#92e8f0] hover:text-black cursor-pointer transition-all duration-300"
              >
                Book Now
              </button>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default SingleDoctor;