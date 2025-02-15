import React, { useState } from "react";
import PatientNavbar from "../components/PatientNavbar";
import Sidebar from "../components/Sidebar";
import { useSelector } from "react-redux";
import MyAppointmentCard from "../components/myAppointmentCard";
import sampleDoctors from "../utils/sampleDoctor";
import { FaWindowClose } from "react-icons/fa";
import toast from "react-hot-toast";

function MyAppointments() {
  const isOpen = useSelector((state) => state.sidebar);

  const [showFeedbackform, setShowFeedbackform] = useState(false);
  return (
    <div className="">
      <div className="w-full pt-10 flex">
        <PatientNavbar />
        <Sidebar />
      </div>

      <div
        className={`w-full mt-24 pl-4 ${
          isOpen ? "md:pl-[18%]" : "md:pl-[5%]"
        } flex flex-wrap justify-center items-stretch gap-4`}
      >
        {sampleDoctors.map((item, _) => {
          return (
            <MyAppointmentCard
              doctor={item}
              setShowFeedbackform={setShowFeedbackform}
              key={item._id}
            />
          );
        })}



          {/* feedback form */}
        {showFeedbackform && (
          <div className="fixed z-[999] w-[90vw] md:w-[40vw] flex flex-col gap-4 px-6 py-3 pb-5 bg-[#2DF8C5] rounded-2xl  text-black  items-center justify-between shadow-lg">
            <div className="w-full flex justify-between">
              <h1 className="text-lg font-semibold">Type your message here</h1>
              <button
                onClick={() => setShowFeedbackform(false)}
                className="text-2xl font-semibold text-black cursor-pointer transition-all duration-300 hover:scale-105"
              >
                {" "}
                <FaWindowClose size={32} />{" "}
              </button>
            </div>
            {/* Input Field */}
            <input
              type="text"
              placeholder="Write your feedback..."
              className="mt-4 px-4 h-[25vw] md:h-[15vw] bg-white py-2 w-full border-2 border-black rounded-lg focus:outline-none focus:border-gray-700"
            />

            {/* Submit Button with Hover Animation */}
            <button onClick={()=> toast.error('Will be start accepting soon')} className="mt-4 w-full text-lg cursor-pointer px-6 py-2 bg-gray-900 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:bg-black">
              Submit
            </button>
          </div>
        )}



      </div>
    </div>
  );
}

export default MyAppointments;
