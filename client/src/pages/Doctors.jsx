import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import sampleDoctors from '../utils/sampleDoctor'
import DoctorCard from '../components/DoctorCard'



function Doctors() {
  
  return (
    <div className='w-full  '>
    <Navbar/>


      <div className="w-full mt-36 mb-[5vw] flex flex-wrap flex-shrink-0 gap-4 px-4 z-[10] " >
         {
          sampleDoctors.map((item)=>{
            return <DoctorCard key={item._id}  doctor={item} />
          })
         }
      </div>

      <Footer/>
    </div>
  )
}

export default Doctors
