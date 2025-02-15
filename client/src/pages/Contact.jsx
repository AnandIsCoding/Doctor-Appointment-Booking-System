import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Contact() {
  return (
    <div className='w-full'>
    <Navbar/>

    <div className="flex mt-14 flex-col md:flex-row items-center justify-center min-h-screen bg-green-50 p-5">
      {/* Left Side - Image */}
      <div className="w-full md:w-1/2 p-5">
        <img
          src="https://img.freepik.com/free-photo/woman-working-as-doctor_23-2148827843.jpg?ga=GA1.1.1433738625.1739525901&semt=ais_hybrid" // Replace with hospital image URL
          alt="Hospital"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Right Side - Contact Info */}
      <div className="w-full md:w-1/2 p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-green-700 mb-4">Contact Us</h1>
        <p className="text-lg font-semibold text-gray-700">🏥 Seva Hospital</p>
        <p className="text-gray-600 mb-2">Haflaganj, Katihar, Bihar</p>

        <p className="text-lg font-semibold text-gray-700 mt-4">📞 Phone:</p>
        <p className="text-gray-600">+91 98765 43210</p>

        <p className="text-lg font-semibold text-gray-700 mt-4">📧 Email:</p>
        <p className="text-gray-600">contact@sevahospital.com</p>

        <p className="text-lg font-semibold text-gray-700 mt-4">🕒 Working Hours:</p>
        <p className="text-gray-600">Mon - Sat: 9 AM - 8 PM</p>
        <p className="text-gray-600">Sunday: Closed</p>
      </div>
    </div>

<Footer/>

      
    </div>
  )
}

export default Contact
