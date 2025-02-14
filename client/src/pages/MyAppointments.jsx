import React from 'react'
import PatientNavbar from '../components/PatientNavbar'
import Sidebar from '../components/Sidebar'
import { useSelector } from 'react-redux'

function MyAppointments() {
  const isOpen = useSelector(state => state.sidebar)
  return (
    <div className="">
      <div className="w-full pt-10 flex">
        <PatientNavbar />
        <Sidebar />
      </div>

      <div className={`w-full  mt-24 ${isOpen ? "ml-[50%] md:ml-[20%]" : " ml-[10%]"} `}> My Appoinment </div>
    </div>
  )
}

export default MyAppointments
