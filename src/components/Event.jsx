import React from 'react';

const Event = ({ id, title, description, date, location }) => {
    return (
      <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-md p-4 mb-5">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center mb-2">
          <svg
            className="w-4 h-4 fill-current text-gray-500 mr-2"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M1 2a1 1 0 011-1h5a1 1 0 010 2H2a1 1 0 01-1-1zM0 5a1 1 0 011-1h1a1 1 0 010 2H1a1 1 0 01-1-1zm0 3a1 1 0 011-1h1a1 1 0 010 2H1a1 1 0 01-1-1zm17-5a1 1 0 100 2h1a1 1 0 000-2h-1zM18 9a1 1 0 100 2h1a1 1 0 000-2h-1zm0 3a1 1 0 100 2h1a1 1 0 000-2h-1zM4 17a1 1 0 100 2h5a1 1 0 100-2H4zm6 0a1 1 0 100 2h5a1 1 0 100-2h-5z"
              clipRule="evenodd"
            />
          </svg>
          <p className="text-gray-700 text-sm">{date}</p>
        </div>
        <div className="flex items-center">
          <svg
            className="w-4 h-4 fill-current text-gray-500 mr-2"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 1a1 1 0 011 1v14a1 1 0 11-2 0V2a1 1 0 011-1zM5 4a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zM4 8a1 1 0 100 2h12a1 1 0 100-2H4zm0 4a1 1 0 011-1h8a1 1 0 110 2H5a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
          <p className="text-gray-700 text-sm">{location}</p>
        </div>
      </div>
    );
  };
  

export default Event;