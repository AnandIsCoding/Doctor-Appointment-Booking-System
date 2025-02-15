import { multiStepData } from "../utils/multistepData";
import React, { useState } from "react";

function MultiStepDescription() {
  // State initialized with 1 to show the first content by default
  const [showText, setShowText] = useState(1);

  return (
    <div className="w-full mt-5 md:px-10">
      {/* Buttons for toggling content */}
      <div className="flex flex-wrap gap-5 md:gap-3 justify-between border-2  border-green-700 p-2 md:p-5 bg-green-50 rounded-lg shadow-md">
        {multiStepData.map((item) => (
          <button
            onClick={() => setShowText(item.id)}
            key={item.id}
            className={`text-lg md:text-xl font-semibold px-4 py-2 rounded-md transition-all duration-300 cursor-pointer ${
              showText === item.id
                ? "text-white bg-[#27DFB3] shadow-lg"
                : "text-black hover:bg-green-200"
            }`}
          >
            {`${item.title[0].toUpperCase()}${item.title.slice(1)}`}
          </button>
        ))}
      </div>

      {/* Text Content Section */}
      <div className="w-full p-5 md:px-20 md:py-10 flex flex-col bg-white text-black border-2 border-green-600 rounded-lg shadow-lg mt-5 items-center justify-center">
        <h1 className="text-2xl font-bold text-green-700 uppercase">
          {multiStepData.find((item) => item.id === showText)?.title}
        </h1>
        
        {/* Horizontal divider */}
        <span className="w-full h-[2px] bg-green-300 rounded-xl my-4"></span>

        <p className="text-lg font-medium text-center">
          {multiStepData.find((item) => item.id === showText)?.text}
        </p>
      </div>

      {/* Spacing for mobile view */}
      {Array(3)
        .fill(null)
        .map((_, index) => (
          <br key={index} className="block md:hidden"></br>
        ))}
    </div>
  );
}

export default MultiStepDescription;
