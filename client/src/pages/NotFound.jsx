import React from 'react'
import { useNavigate } from 'react-router-dom'

// Component to render a custom 404 Not Found page
function NotFound() {
  const navigate = useNavigate()
  return (
    // Full-screen container for the Not Found page
    <div className='fixed w-screen h-screen bg-black z-[999]'>

    {/* Display a 404 GIF as the background */}
      <img src='./404.gif' alt='404' className='w-full h-full object-cover' />

       {/* Button to redirect the user back to the home page */}
      <button onClick={() => navigate('/')} className='absolute top-2 right-2 text-white text-xl rounded-md px-3 py-1 border-2 border-zinc-200 md:text-2xl'>Go Home</button>
    </div>
  )
}

export default NotFound