import React, { useEffect, lazy, Suspense, useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios'

// Lazy-loaded components
const Strip = lazy(() => import("./components/Strip"));
const NotFound = lazy(() => import("../src/pages/NotFound"));
const Home = lazy(() => import("../src/pages/Home"));
const Patient = lazy(() => import("./pages/Patient"));
const Doctors = lazy(() => import("./pages/Doctors"));
const Services = lazy(() => import("./pages/Services"));
const Contact = lazy(() => import("./pages/Contact"));
const Footer = lazy(() => import("./components/Footer"));
const BookAppointment = lazy(() => import("./pages/BookAppointment"));
const MyAppointments = lazy(() => import("./pages/MyAppointments"));
const Signup = lazy(() => import("./pages/Signup"));
const DoctorDetails = lazy(() => import("./pages/DoctorDetails"));

import {setDoctors} from '../src/redux/slices/doctorSlice'
import toast from "react-hot-toast";
import { addUser } from "./redux/slices/userSlice";

function App() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const location = useLocation();
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true);

  // fetch profile information and save user in user slice store, this will make sure to suthenticate user and allow to go to dashboard
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`https://dochealth.onrender.com/api/v1/user/profile/view`, {
          withCredentials: true,
        });
        if (res.data.success) {
          dispatch(addUser(res?.data?.user));
        }else{
          // toast.error(res?.data?.message)
          toast((t) => (
            <span>
              {res?.data?.message}
              <button className="px-3 py-1 rounded-md bg-zinc-200 ml-1" onClick={() => toast.dismiss(t.id)}>
                Dismiss
              </button>
            </span>
          ));
        }
      } catch (error) {
        //toast.error(error?.response?.data?.message);
        console.log(error);
      }
    };

    fetchUser();
  }, [dispatch, navigate]);


  // authenticate user, instead of creating a HOF for redirect authentication
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500); // Assume  fetch user data within 500ms

    if (!loading && !user && location.pathname.startsWith("/patient")) {
      navigate("/"); // Redirect unauthorized users
    }
  }, [user, navigate, location,loading]);

  
  const disableContextMenu = (event) => {
    event.preventDefault();
  };

  const fetchAllDoctors = async() =>{
    // Fetch all doctors from API
    try {
      const res = await axios.get('https://dochealth.onrender.com/api/v1/doctor/alldoctors')
      if(res.data.success){
        dispatch(setDoctors(res.data.data))
      }else{
        console.log('Error in fetching all doctors api in APP.jsx ==> ',res.data.message)
        return toast((t) => (
          <span className="w-fit max-w-screen px-2 inline-flex items-center gap-2">
            {res.data.message}.🚫
            <button 
              className="px-3 py-1 rounded-md bg-zinc-200 cursor-pointer" 
              onClick={() => toast.dismiss(t.id)}
            >
              Dismiss
            </button>
          </span>
        ));
        
      }
    } catch (error) {
      console.log('Error in fetching all doctors api in APP.jsx ==> ',error)
      return toast((t) => (
        <span className="w-fit max-w-screen px-2 inline-flex items-center gap-2">
          {error.message}.🚫
          <button 
            className="px-3 py-1 rounded-md bg-zinc-200 cursor-pointer" 
            onClick={() => toast.dismiss(t.id)}
          >
            Dismiss
          </button>
        </span>
      ));
    }
  }

  useEffect(()=>{
    fetchAllDoctors()
  },[])

  return (
    <div onContextMenu={disableContextMenu} className="w-screen scroll-smooth  ">
      <Strip />
      <Suspense
        // Fallback loader while components are loading
        fallback={
          <div className="absolute top-0 left-0 bottom-0 right-0 bg-black flex justify-center items-center duration-[5s]">
            <img src="/loader.gif" alt="loader" className="" />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/patient" element={<Patient />} />

          <Route path="/doctors" element={<Doctors />} />

          <Route path="/services" element={<Services />} />

          <Route path="/contact" element={<Contact />} />

          <Route
            path="/patient/book-appointment"
            element={<BookAppointment />}
          />

          <Route path="/patient/my-appointments" element={<MyAppointments />} />

          {/* /book-appointment/${doctor._id} */}
          <Route
            path="/patient/book-appointment/:_id"
            element={<DoctorDetails />}
          />

          <Route path="/signup-login" element={<Signup />} />

          {/* Route for handling 404 - Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
