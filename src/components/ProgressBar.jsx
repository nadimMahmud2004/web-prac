import React from "react";

const ProgressBar = () => {
  return (
    <div className={`w-full`}>
      <div className="flex justify-between items-center m-2">
        <span className="text-sm font-medium text-gray-700">
          Question Current of total{" "}
        </span>
        <span className="text-sm font-medium text-gray-700">Percentage%</span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        {/* Progress bar */}
        <div className="bg-linear-to-r from-blue-50 to-purple-600 h-full rounded-full transition-all duration-500 ease-in-out shadow-sm" />
      </div>
    </div>
  );
};

export default ProgressBar;
