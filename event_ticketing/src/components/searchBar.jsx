import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch(term); // Pass the search term to the parent component
  };

  return (
    <div className="relative w-3/4 mx-auto"> {/* Adjust the width and add mx-auto for centering */}
      <input
        type="text"
        placeholder="Search events..."
        value={searchTerm}
        onChange={handleSearch}
        data-testid="search-input"
        className="w-full border-2 border-tropical-blue-200 bg-tropical-blue-100 h-10 px-5 pr-10 rounded-full text-sm focus:outline-none focus:border-tropical-blue-700"
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-3">
        <svg
          className="h-4 w-4 fill-current text-black"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M15.703 14.297c-1.83 1.829-4.22 2.834-6.782 2.834C3.7 17.131 0 13.431 0 8.566S3.7 0 8.566 0s8.566 3.7 8.566 8.566c0 2.562-1.005 4.952-2.834 6.781l6.849 6.848c.1.1.226.15.352.15s.253-.05.352-.15c.195-.195.195-.511 0-.707L15.703 14.297zm-6.137-1.271c2.487 0 4.5-2.013 4.5-4.5s-2.013-4.5-4.5-4.5s-4.5 2.013-4.5 4.5s2.013 4.5 4.5 4.5z" />
        </svg>
      </div>
    </div>
  );
};

export default SearchBar;