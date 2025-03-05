import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AnnouncementSection from '../components/AnnouncementSection'
import HospitalServicesStrip from '../components/HospitalServicesStrip'
import FAQs from '../components/FAQs'
import MultiStepDescription from '../components/MultiStepDescription'

function Home() {
  return (
    <div className="">
    {/* Display Navbar */}
      <Navbar/>
      {/* sticker */}
      <div
          className={`fixed w-[10vw] md:w-[2.2vw] bg-[red] right-0 top-32 flex flex-col items-center pt-2 pb-2 rounded-l-md`}
        >
          <h1 className='text-white bg-[red] text-xl font-medium'>E</h1>
          <h1 className='text-white bg-[red] text-xl font-medium'>M</h1>
          <h1 className='text-white bg-[red] text-xl font-medium'>E</h1>
          <h1 className='text-white bg-[red] text-xl font-medium'>R</h1>
          <h1 className='text-white bg-[red] text-xl font-medium'>G</h1>
          <h1 className='text-white bg-[red] text-xl font-medium'>E</h1>
          <h1 className='text-white bg-[red] text-xl font-medium'>N</h1>
          <h1 className='text-white bg-[red] text-xl font-medium'>C</h1>
          <h1 className='text-white bg-[red] text-xl font-medium'>Y</h1>
          <h1 className='text-white bg-[red] text-xl font-medium'>🚑</h1>
        </div>



      <div className="mt-28 mb-10 " >

      {/* Display Announcement Section or Carousel */}
               <AnnouncementSection/>
               {/* Hospital Services strip  */}
               <HospitalServicesStrip/>

               {/* Display FAQs */}

               <FAQs/>

               {/* Display Desciption MultiStepDescription */}
               <MultiStepDescription/>         
         
      </div>

      {/* display footer */}
    <Footer/>
    </div>
  )
}

// export Home component
export default Home
