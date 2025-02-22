import React, { useEffect, useRef, useState } from "react";
import { IoIosLogIn } from "react-icons/io";
import { FaAnglesLeft } from "react-icons/fa6";
import { FaAnglesRight } from "react-icons/fa6";
import data from '../utils/CarouselData.json'  // a json file of array of objects, each object contain image and it's index

function AnnouncementSection() {
  const scrollRef = useRef(null);

  const [index, setIndex] = useState(0)  // State to keep track of the current image index
    // Increment index to show the next image, wrap around if at the end
    const handleIncrement = () =>{
      setIndex((prev => prev >= data.length-1 ? 0 : prev+1))
    }
  
     //decrement
    const handleDecrement = () =>{
      setIndex((prev => prev <= 0 ? data.length-1 : prev-1))
    }
  

  useEffect(() => {
    const interval = setInterval(() => {
      handleIncrement();
    }, 3000);  
    // Cleanup the interval on unmount or before re-creating
    return () => clearInterval(interval);
  }, [handleIncrement]);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;

    const scrollInterval = setInterval(() => {
      if (scrollContainer) {
        scrollAmount += 1; // Adjust the speed here
        scrollContainer.scrollTop = scrollAmount;

        // Reset scroll position when reaching the end
        if (scrollContainer.scrollTop + scrollContainer.clientHeight >= scrollContainer.scrollHeight) {
          scrollAmount = 0;
        }
      }
    }, 100); // Adjust the speed by changing the interval time

    return () => clearInterval(scrollInterval); // Cleanup on unmount
  }, []);

  return (
    <div
      style={{
       backgroundImage: `url(${data[index].url})` ,
        backgroundSize: "cover",
        justifyContent: "center"
      }}
      className="w-full flex flex-col md:flex-row items-start gap-6 p-1 md:p-6 bg-gray-100"
    >
      {/* First Div - Hospital Information */}
      <div className="w-[70%]  p-2  md:h-[70vh]">
          
            {/* Button to navigate/show to the previous image */}
      <button onClick={()=>handleDecrement()} className='absolute top-82 md:top-1/2 left-1 text-white cursor-pointer  px-4 py-2 rounded-md'> <FaAnglesLeft size={32} className='text-black' id='next' /> </button>

{/* Button to navigate/show to the next image */}
<button onClick={()=>handleIncrement()} className='absolute top-82 md:top-1/2 right-1 text-white cursor-pointer px-4 py-2 rounded-md'><FaAnglesRight size={32} className='text-black'/></button>
      </div>

      {/* Second Div - Announcement Box with Auto Scrolling */}
      <div
        ref={scrollRef}
        className="w-[40%] md:w-1/2  md:p-6 mr-10 bg-[#cdf5ec]  text-black shadow-lg rounded-lg h-32 md:h-64 overflow-y-auto "
      >
        <h3 className="text-xl font-bold"> Announcements</h3>
        <ul className="mt-4 space-y-2">
          {[
  "Robotic surgery unit launched",
  "24/7 emergency services",
  "Advanced cancer treatment",
  "New pediatric care center.",
  "Free heart check-ups ",
  "AI-powered diagnostics ",
  "Telemedicine now available ",
  "Kidney transplant program ",
  "Discounts on health check-ups.",
  "Medical tourism ",
  "Wellness programs for seniors.",
  "COVID-19 booster shots available.",
  "Global healthcare ",
  "New maternity care"
].map((announcement, index) => (
            <li key={index} className="py-1 border-b border-white">
              📢 {announcement}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AnnouncementSection;
