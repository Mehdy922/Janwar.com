import React, { useState } from 'react';

const AdminPage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [accessoryData, setAccessoryData] = useState({
    title: '',
    category: '',
    // Add more fields as needed
  });

  const handleInputChange = (e) => {
    setAccessoryData({ ...accessoryData, [e.target.name]: e.target.value });
  };

  const handleAddAccessory = () => {
    // Add logic to handle adding accessory data
    console.log('Adding accessory:', accessoryData);
    // You can also add a form submission logic here if required
    // Reset accessory data and close popup
    setAccessoryData({
      title: '',
      category: '',
    });
    setShowPopup(false);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative">
        {/* Add button */}
        <button
          className="absolute left-0 top-0 bg-blue-500 text-white px-4 py-2 rounded-l-lg hover:bg-blue-600 focus:outline-none"
          onClick={() => setShowPopup(true)}
        >
          Add
        </button>
        {/* Horizontal card */}
        <div className="bg-gray-200 p-4 rounded-lg shadow-md flex justify-between items-center">
          <h3 className="text-lg font-semibold">Post Accessories</h3>
          {/* Add more content here as needed */}
        </div>
        {/* Popup */}
        {showPopup && (
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold mb-4">Add Accessory</h3>
              {/* Form for accessory details */}
              <div className="mb-4">
                <label htmlFor="title" className="block font-medium mb-1">Title</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none"
                  value={accessoryData.title}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="category" className="block font-medium mb-1">Product Category</label>
                <input
                  type="text"
                  id="category"
                  name="category"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none"
                  value={accessoryData.category}
                  onChange={handleInputChange}
                />
              </div>
              {/* Add more input fields as needed */}
              <div className="text-right">
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
                  onClick={handleAddAccessory}
                >
                  Add
                </button>
                <button
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded ml-2 hover:bg-gray-400 focus:outline-none"
                  onClick={() => setShowPopup(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPage;
