import Image from "next/image";
import React, { useState } from "react";

export default function Test() {

  const [isSearchVisible, setSearchVisible] = useState(false);

  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible);
  };
  
  return (
    <div className="bg-white">
        <nav className="bg-blue-500 p-4">
      <div className="flex items-center justify-between">
        <div className="text-white font-bold text-xl">
          My NavBar
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-white">Home</a>
          <a href="#" className="text-white">Work</a>
          <a href="#" className="text-white">About</a>
          <button
            className="text-white hover:text-gray-200 focus:outline-none"
            onClick={toggleSearch}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isSearchVisible ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4a8 8 0 100 16 8 8 0 000-16z"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isSearchVisible && (
        <div className="mt-4">
          <input
            type="text"
            placeholder="Search..."
            className="border p-2 rounded-md w-full"
          />
        </div>
      )}
    </nav>
    </div>
  );
}
