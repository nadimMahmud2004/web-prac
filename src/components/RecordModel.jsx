import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateRecords, addRecord } from "../store/recordSlice";

const RecordModel = ({ isOpen, onClose, currentRecord }) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
  });

  useEffect(() => {
    if (currentRecord) {
      setFormData(currentRecord);
    } else {
      setFormData({
        name: "",
        email: "",
        phone: "",
        position: "",
      });
    }
  }, [currentRecord]);

  const handleSubmit = () => {
    if (!formData.name.trim() || !formData.email.trim()) {
      alert("Name and Email is required !");
      return;
    }
    if (currentRecord) {
      dispatch(
        updateRecords({
          id: currentRecord.id,
          data: formData,
        }),
      );
    } else {
      dispatch(addRecord(formData));
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-2xl max-w-md w-full">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800">
            Register New Record
          </h2>
          <button
            className="text-gray-400 hover:text-gray-600 transition-all cursor-pointer"
            onClick={onClose}
          >
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
              placeholder="Enter Your Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* email */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email *
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="Enter Your Email"
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
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              placeholder="Enter Your Phone"
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
              placeholder="Enter Your Position"
              value={formData.position}
              onChange={(e) =>
                setFormData({ ...formData, position: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        {/* Footer Button */}
        <div className="flex gap-3 p-6 border-t border-gray-200">
          <button
            className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all font-medium hover:scale-105"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="flex-1 px-4 py-2 bg-blue-500 border border-gray-300 text-white rounded-lg hover:bg-blue-600 transition-all font-medium hover:scale-105"
            onClick={handleSubmit}
          >
            {currentRecord ? "Update" : "Register"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecordModel;
