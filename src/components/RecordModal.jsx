import { X } from "lucide-react";
import React from "react";

const RecordModal = () => {
  return (
    <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-2xl max-w-md w-full ">
        {/*    Header      */}

        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800">
            Register New Records
          </h2>
          <button className="text-gray-400 hover:text-gray-600 transition-all">
            <X size={24} />
          </button>
        </div>
        {/* Form Fields */}
        <div className="p-6 space-y-4">
          {/* Name */}

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Name *
            </label>
            <input
              type="text"
              placeholder="Enter Full Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Email */}

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email *
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Phone */}

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Phone *
            </label>
            <input
              type="tel"
              placeholder="Enter Phone Number"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Position */}

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Position *
            </label>
            <input
              type="text"
              placeholder="Enter Position"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="flex gap-3 border-t border-gray-200 p-2">
          <button className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all font-medium ">
            Cancel
          </button>
          <button className="flex-1 px-4 py-2 border bg-blue-500 border-gray-300 text-white rounded-lg hover:bg-blue-600 transition-all font-medium scale-105">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecordModal;
