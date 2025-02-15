import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Home() {
  return (
    <div >
      <Navbar/>
      <div className="mt-36 mb-[100vw]" >
    <h1 className='mt-14'>Homeeeeeeeeeee</h1>
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
        </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Home
