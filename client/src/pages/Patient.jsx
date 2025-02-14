import React from 'react'
import PatientNavbar from '../components/PatientNavbar'
import Sidebar from '../components/Sidebar'
import sampleDoctors from '../utils/sampleDoctor'
import DoctorCard from '../components/DoctorCard'
import { useSelector } from 'react-redux'

function Patient() {
  const isOpen = useSelector(state => state.sidebar)
  return (
    <div className="overflow-x-hidden">
      <div className="w-full pt-10 flex  ">
        <PatientNavbar />
        <Sidebar />
      </div>

      
    
      <div className={`w-full mt-24 px-4 ${isOpen ? "md:pl-[18%]" : "md:pl-[5%]"} flex flex-wrap justify-center items-stretch gap-4`}>
       <h1>Guide And profile Edit section component for Profile</h1>

      
       </div>
       
    </div>
  )
}

export default Patient
