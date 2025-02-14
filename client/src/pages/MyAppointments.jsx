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

      <div className={`w-full  mt-24 ${isOpen ? "pl-30 md:ml-[20%]" : "pl-12 ml-[10%]"} `}> My Appoinment </div>
    </div>
  )
}

export default MyAppointments
