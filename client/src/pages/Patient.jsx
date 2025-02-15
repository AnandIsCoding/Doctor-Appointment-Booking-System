import React, { useState } from "react";
import PatientNavbar from "../components/PatientNavbar";
import Sidebar from "../components/Sidebar";
import sampleDoctors from "../utils/sampleDoctor";
import DoctorCard from "../components/DoctorCard";
import { useSelector } from "react-redux";

function Patient() {
  const isOpen = useSelector((state) => state.sidebar);
  const [editMode, setEditmode] = useState(false);
  const [userDetails, setUserdetails] = useState({
    name: "Anand Jha",
    age: 21,
    email: "anand@example.com",
    contact: "9876543210",
    address: "123 Main St, City, State, Zip",
    gender: "male",
    dob: "18/01/2004",
    bloodGroup: "A+",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserdetails((prev) => ({
      ...prev,
      [name]: value, // Dynamically update the corresponding field
    }));
  };

  const handleEditBtn = () => {
    setEditmode((prev) => !prev);
  };

  const handleSaveBtn = () => {
    setEditmode((prev) => !prev);
    // save to database api call
  };

  return (
    <div className="overflow-x-hidden ">
      <div className="w-full pt-10 flex  ">
        <PatientNavbar />
        <Sidebar />
      </div>

      <div
        className={`w-full  mt-24 ${
          isOpen ? "pl-30 md:ml-[20%]" : "pl-12 ml-[9%]"
        } `}
      >
        <div className="w-full md:w-1/2 p-4 rounded-2xl flex flex-col gap-4 bg-white shadow-md">
          <h1 className="text-2xl font-bold">
            {editMode ? "Edit Profile" : "Your Profile"}
          </h1>

          <div className="w-full h-[2px] rounded-full bg-[#004D43]"></div>

          {/* Name */}
          {editMode ? (
            <input
              type="text"
              name="name"
              value={userDetails?.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="border-2 border-green-700 bg-transparent outline-none rounded-lg px-5 py-3 w-full"
            />
          ) : (
            <p className="text-lg">
              Name : <span className="text-green-700">{userDetails.name}</span>
            </p>
          )}

          {/* gender */}
          {editMode ? (
            <select onChange={(event)=> setUserdetails(
              prev => ({...prev, gender:event.target.value})
            )} className="md:w-[40%] py-3 border-2 border-green-700 rounded-lg px-5 bg-inherit">
               <option value='male'>Male</option>
               <option value='female'>Female</option>
               <option value='others'>Others</option>
            </select>
          ) : (
            <p className="text-lg">
              Gender :{" "}
              <span className="text-green-700">{userDetails?.gender}</span>
            </p>
          )}

          {/* Age */}
          {editMode ? (
            <input
              type="number"
              name="age"
              placeholder="Your Age"
              value={userDetails?.age}
              onChange={handleChange} // ✅ Added onChange
              className="border-2 border-green-700 bg-transparent outline-none rounded-lg px-5 py-3 w-full"
            />
          ) : (
            <p className="text-lg">
              Age : <span className="text-green-700">{userDetails.age}</span>
            </p>
          )}

          {/* Email */}
          {editMode ? (
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={userDetails?.email}
              onChange={handleChange} // ✅ Added onChange
              className="border-2 border-green-700 bg-transparent outline-none rounded-lg px-5 py-3 w-full"
            />
          ) : (
            <p className="text-lg">
              Email id :{" "}
              <span className="text-green-700">{userDetails.email}</span>
            </p>
          )}

          {/* Contact */}
          {editMode ? (
            <input
              type="tel"
              name="contact"
              placeholder="Your Mobile No"
              value={userDetails?.contact}
              onChange={handleChange} // ✅ Added onChange
              className="border-2 border-green-700 bg-transparent outline-none rounded-lg px-5 py-3 w-full"
            />
          ) : (
            <p className="text-lg">
              Phone no :{" "}
              <span className="text-green-700">{userDetails.contact}</span>
            </p>
          )}

          {/* Blood Group */}
          {editMode ? (
            <input
              type="text"
              name="bloodGroup"
              placeholder="Your Blood Group"
              value={userDetails?.bloodGroup}
              onChange={handleChange} // ✅ Added onChange
              className="border-2 border-green-700 bg-transparent outline-none rounded-lg px-5 py-3 w-full"
            />
          ) : (
            <p className="text-lg">
              Blood Group :{" "}
              <span className="text-green-700">{userDetails.bloodGroup}</span>
            </p>
          )}

          {/* DOB */}
          {editMode ? (
            <input
              type="date"
              name="dob"
              value={userDetails?.dob.split("/").reverse().join("-")} // Converts "01/01/1999" to "1999-01-01"
              onChange={handleChange} // ✅ Added onChange
              className="border-2 border-green-700 bg-transparent outline-none rounded-lg px-5 py-3 w-full"
            />
          ) : (
            <p className="text-lg">
              Date of Birth :{" "}
              <span className="text-green-700">{userDetails.dob}</span>
            </p>
          )}

          {/* Address */}
          {editMode ? (
            <input
              type="text"
              name="address"
              value={userDetails?.address}
              onChange={handleChange} // ✅ Added onChange
              className="border-2 border-green-700 bg-transparent outline-none rounded-lg px-5 py-3 w-full"
            />
          ) : (
            <p className="text-lg">
              Address :{" "}
              <span className="text-green-700">{userDetails.address}</span>
            </p>
          )}

          {editMode ? (
            <button
              onClick={handleSaveBtn}
              className="w-full text-center rounded-lg py-2 bg-[#27DFB3] text-black text-xl font-bold cursor-pointer hover:bg-[#88e1eb] transition duration-300"
            >
              Save
            </button>
          ) : (
            <button
              onClick={handleEditBtn}
              className="w-full text-center rounded-lg py-2  text-xl font-bold cursor-pointer bg-[#27DFB3] text-black hover:bg-[#88e1eb] transition duration-300"
            >
              Edit
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Patient;
