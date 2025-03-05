import React, { useState } from "react";
import PatientNavbar from "../components/PatientNavbar";
import Sidebar from "../components/Sidebar";
import DoctorCard from "../components/DoctorCard";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import toast from "react-hot-toast";
import { addUser } from "../redux/slices/userSlice";
import MobileOption from "../components/MobileOption";

function Patient() {
  const dispatch = useDispatch()
  const isOpen = useSelector((state) => state.sidebar);
  const [editMode, setEditmode] = useState(false);
  
    const [isLoading, setIsloading] = useState(false);
  
  const user = useSelector(state => state.user)
  // // Form data state for all details to be updated
  const [userDetails, setUserdetails] = useState({
    name: "",
    age: "",
    contact: "",
    address: "",
    gender: "",
    dob: "",
    bloodGroup: "",
  });

   // Single onChange handler to handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserdetails((prev) => ({
      ...prev,
      [name]: value, // Dynamically update the corresponding field
    }));
  };

  // edit btn handler
  const handleEditBtn = async() => {
    setEditmode((prev) => !prev);
    
  };

  // save btn handler
  const handleSaveBtn = async() => {
     // Show loading toast
     const loadingToast = toast.loading("Please Wait .... ");
     setIsloading(true);
    
    // save to database api call
    try {
      const res = await axios.patch('https://dochealth.onrender.com/api/v1/user/profile/update', userDetails , {withCredentials:true})
      if(res.data.success){
        dispatch(addUser(res?.data?.user));
        toast.success(res?.data?.message);
        setEditmode((prev) => !prev);
      }else{
        toast.error(res?.data?.message || res?.data?.error || 'An unexpected error occured')
      }
    } catch (error) {
      toast.error(
        error.response?.data.message || "An unexpected error occurred!"
      );
      console.log(error)
    }finally {
      setIsloading(false);
      toast.dismiss(loadingToast);
    }
  };

  return (
    <div className="overflow-x-hidden ">

    {/* display mobile navigation option that will be displayed */}
    <MobileOption/>
    {/* display navbar that will be displayed to logged in user/patient and sidebar */}
      <div className="w-full pt-10 flex mb-14 ">
        <PatientNavbar />
        <Sidebar />
      </div>

      <div
        className={`w-full  mt-24 pb-34 ${
          isOpen ? "md:pl-30 md:ml-[20%]" : "md:pl-12 md:ml-[9%]"
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
              Name : <span className="text-green-700">{user?.name}</span>
            </p>
          )}

          {/* gender */}
          {editMode ? (
            <select value={userDetails?.gender || ""} onChange={(event)=> setUserdetails(
              prev => ({...prev, gender:event.target.value})
            )} className="md:w-[40%] py-3 border-2 border-green-700 rounded-lg px-5 bg-inherit">
            <option value="" disabled>
                      Select Gender
                    </option>
               <option value='male'>Male</option>
               <option value='female'>Female</option>
               <option value='others'>Others</option>
            </select>
          ) : (
            <p className="text-lg">
              Gender :{" "}
              <span className="text-green-700">{user?.gender}</span>
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
              Age : <span className="text-green-700">{user?.age}</span>
            </p>
          )}

          {/* Email */}
          {editMode ? (
           ''
          ) : (
            <p className="text-lg">
              Email id :{" "}
              <span className="text-green-700">{user?.email}</span>
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
              <span className="text-green-700">{user?.contact}</span>
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
              <span className="text-green-700">{user?.bloodGroup}</span>
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
              <span className="text-green-700">{user?.dob}</span>
            </p>
          )}

          {/* Address */}
          {editMode ? (
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={userDetails?.address}
              onChange={handleChange} // ✅ Added onChange
              className="border-2 border-green-700 bg-transparent outline-none rounded-lg px-5 py-3 w-full"
            />
          ) : (
            <p className="text-lg">
              Address :{" "}
              <span className="text-green-700">{user?.address}</span>
            </p>
          )}


            {/* if user is in edit mode display save and cancel button otherwise display Edit button , when user clist on Edit btn form will be displayed and save and cancel btn */}
          {editMode ? (
           <>
           <button
              onClick={handleSaveBtn}
              className="w-full text-center rounded-lg py-2 bg-[#27DFB3] text-black text-xl font-bold cursor-pointer hover:bg-[#88e1eb] transition duration-300"
            >
              Save
            </button>
            <button
              onClick={()=>setEditmode(prev => !prev)}
              className="w-full text-center rounded-lg py-2  text-xl font-bold cursor-pointer bg-[#27DFB3] text-black hover:bg-[#88e1eb] transition duration-300"
            >
              Cancel
            </button>
           </>
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
