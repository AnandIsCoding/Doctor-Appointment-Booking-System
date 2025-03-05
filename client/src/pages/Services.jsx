import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";

function Services() {
// State to store the list of services
const [services, setServices] = useState([]);
// State to manage loading status
const [loading, setLoading] = useState(true);
// State to handle errors
const [error, setError] = useState(null);

// useEffect hook to fetch services when the component mounts
  useEffect(() => {
    // Fetching services from the API
    const fetchServices = async () => {
      try {
        const response = await axios.get("https://dochealth.onrender.com/api/v1/user/allservices");
        setServices(response.data.data); // Updating state with fetched services
        setLoading(false); // Setting loading to false after data is fetched
      } catch (error) {
        setError("Failed to fetch services. Please try again.");
        setLoading(false);
      }
    };

    fetchServices();  // Calling the function to fetch services
  }, []);

  return (
    <div>
    {/* Navbar Component */}
      <Navbar />

{/* display all services */}
      <div className="container mx-auto px-4 py-10 mt-36">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>

     {/* Display loading message while fetching data */}
        {loading ? (
          <p className="text-center text-lg">Loading...</p>
        ) : error ? (
          // Display error message if data fetching fails
          <p className="text-center text-red-500">{error}</p>
        ) : (
           // Display services in a responsive grid layout
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service._id}
                className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
              >
               {/* Service Image */}
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-52 object-cover"
                />
                {/* Service Name */}
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold">{service.name}</h3>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

           {/* Footer Component */}
      <Footer />
    </div>
  );
}

export default Services;
