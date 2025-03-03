import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";

function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/v1/user/allservices");
        setServices(response.data.data);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch services. Please try again.");
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <div>
      <Navbar />

      <div className="container mx-auto px-4 py-10 mt-36">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>

        {loading ? (
          <p className="text-center text-lg">Loading...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service._id}
                className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
              >
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-52 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold">{service.name}</h3>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default Services;
