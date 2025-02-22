import React, { useState } from "react";
import { FAQdata } from "../utils/faqData";

function FAQs() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleOpen = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="w-full mt-10 py-4 flex flex-col md:flex-row items-center gap-10">
      {/* Left Section: Video */}
      <div className="md:w-[40%] ml-0 h-full md:h-[35vw] w-full md:rounded-sm overflow-hidden shadow-sm">
        <video
          src="/videoplayback.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto md:h-full object-cover"
        >
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Right Section: FAQ */}
      <div className="w-full md:w-[55%] px-4 md:px-8">
        <h1 className="text-[12vw] md:text-[2vw] font-extrabold text-[#056608] leading-tight">
          Frequently
        </h1>
        <h1 className="text-3xl md:text-3xl font-extrabold text-[#056608] mb-6">
          &nbsp; Asked Questions
        </h1>

        {/* FAQ List */}
        <div className="space-y-4">
          {FAQdata.map((item, index) => (
            <div
              key={index}
              onClick={() => handleOpen(index)}
              className=" border border-green-100 bg-white rounded-lg p-4 w-full cursor-pointer transition-all duration-300 shadow-md hover:shadow-lg"
            >
              {/* FAQ Title */}
              <div className="flex justify-between items-center">
                <h1 className="text-sm md:text-lg font-semibold text-gray-800">
                  {item.title}
                </h1>
                <span className="text-2xl font-bold text-[#056608]">
                  {openIndex === index ? "–" : "+"}
                </span>
              </div>

              {/* FAQ Description */}
              {openIndex === index && (
                <p className="mt-2 text-gray-700 text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQs;
