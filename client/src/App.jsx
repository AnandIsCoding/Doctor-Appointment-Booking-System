import React, { useEffect, lazy, Suspense } from "react";
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

function App() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const location = useLocation();
  const dispatch = useDispatch()

  useEffect(() => {
    if (!user && location.pathname.startsWith("/patient")) {
      navigate("/"); // Redirect unauthorized users
    }
  }, [user, navigate, location]);

  const disableContextMenu = (event) => {
    event.preventDefault();
  };

  const fetchAllDoctors = async() =>{
    // Fetch all doctors from API
    try {
      const res = await axios.get('http://localhost:3000/api/v1/doctor/alldoctors')
      if(res.data.success){
        dispatch(setDoctors(res.data.data))
      }else{
        toast.error(res.data.message)
        console.log('Error in fetching all doctors api in APP.jsx ==> ',res.data.message)
      }
    } catch (error) {
      toast.error(error.message)
      console.log('Error in fetching all doctors api in APP.jsx ==> ',error)
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
