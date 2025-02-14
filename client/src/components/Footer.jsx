import React from "react";

function Footer() {
  return (
    <div className="w-screen flex flex-col md:flex-row min-h-[10vw]  md:pb-0 ">
      {/* Main footer container divided into 2 sections */}
      <div className="w-full flex md:flex-row bg-white">
        {/* Left section: About the hospital */}
        <div className="w-[50%] bg-[#004D43] text-white p-8 relative">
          {/* <h2 className="text-xl font-bold mb-4">About Us</h2> */}
          <p className="text-sm">
            We are a multi-specialty hospital committed to providing world-class healthcare services.
          </p>
          {/* Contact information */}
          {/* <div className="flex gap-4 mt-4">
            <h1 className="flex gap-2 border-2 border-zinc-200 px-5 py-3">
              Call: +91 98765 43210
            </h1>
          </div> */}
          {/* Copyright notice */}
          <h1 className="absolute bottom-2 right-0 left-0 text-white bg-[#004D43] px-5 py-2 text-lg w-fit rounded-lg">
            Copyright &copy; 2025 सेवा भाव  Hospital.
          </h1>
        </div>

        {/* Right section: Quick links */}
        <div className="w-[50%] bg-[#004D43] flex flex-col justify-center items-center" id="quicklinks">
          <h3 className="text-xl mb-4 text-white font-bold">Quick Links</h3>
          <ul className="space-y-2 text-white text-sm">
            {/* <li><a href="#" className="hover:underline">Home</a></li> */}
            <li><a href="#" className="hover:underline">Departments</a></li>
            <li><a href="#" className="hover:underline">Doctors</a></li>
            <li><a href="#" className="hover:underline">Book an Appointment</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom section divided into two columns */}
      <div className="w-full flex md:flex-row">
        {/* Patient Services */}
        <div className="w-[50%] bg-[#004D43] flex flex-col justify-center items-center">
          <h3 className="text-xl mb-4 text-white font-bold">Patient Services</h3>
          <ul className="space-y-2 text-white text-sm">
            <li><a href="#" className="hover:underline">Emergency Care</a></li>
            <li><a href="#" className="hover:underline">Health Checkups</a></li>
            <li><a href="#" className="hover:underline">Insurance & Billing</a></li>
            <li><a href="#" className="hover:underline">Medical Records</a></li>
            <li><a href="#" className="hover:underline">Visitor Information</a></li>
          </ul>
        </div>

        {/* Contact & Social Media */}
        <div className="w-[50%] bg-[#004D43] text-white flex flex-col justify-center items-center">
          <h3 className="text-xl mb-4 font-bold mt-2">Stay Connected</h3>
          <ul className="space-y-2">
            {/* <li>Email: contact@lifecarehospital.com</li> */}
            {/* <li>Phone: +91 98765 43210</li> */}
            <li>Address: 123 Health Street, City, India</li>
          </ul>
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <ul className="flex gap-4 mt-2">
              <li><a href="#" className="hover:text-blue-400">Facebook</a></li>
              <li><a href="#" className="hover:text-blue-400">Twitter</a></li>
              <li><a href="#" className="hover:text-blue-400">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
