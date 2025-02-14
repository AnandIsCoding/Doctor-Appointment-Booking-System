import React from 'react'
import PatientNavbar from '../components/PatientNavbar'
import Sidebar from '../components/Sidebar'
import sampleDoctors from '../utils/sampleDoctor'
import DoctorCard from '../components/DoctorCard'
import { useSelector } from 'react-redux'

function Patient() {
  const isOpen = useSelector(state => state.sidebar)
  return (
    <div className="overflow-x-hidden ">
      <div className="w-full pt-10 flex  ">
        <PatientNavbar />
        <Sidebar />
      </div>

      
    
      <div className={`w-full  mt-24 ${isOpen ? "pl-30 md:ml-[20%]" : "pl-12 ml-[10%]"} `}>
       <h1>Guide And profile Edit section component for Profile</h1>
       <div className='w-full px-5 py-2 rounded-2xl'>

       </div>

      
       </div>
       
    </div>
  )
}

export default Patient
