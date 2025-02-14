import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PatientNavbar from '../components/PatientNavbar'
import Sidebar from '../components/Sidebar'
import { useSelector } from 'react-redux'

function SingleDoctor() {
  const isOpen = useSelector(state => state.sidebar)
 const params = useParams()
 const {_id} = params
 console.log(_id)
  return (
    <div className="z-[1]">
    <div className="w-full pt-10 flex">
      <PatientNavbar />
      <Sidebar />
    </div>
    <div className={`w-full mt-24 px-4 ${isOpen ? "md:pl-[18%]" : "md:pl-[5%]"} flex flex-wrap justify-center items-stretch gap-4`}> 
          <h1>Doctor Details {_id} </h1>
     </div>
  </div>
  )
}

export default SingleDoctor
