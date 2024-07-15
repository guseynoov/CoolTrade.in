import React, { useState } from 'react';

export const Contact = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [searches, setSearches] = useState(['John Doe', 'Jane Smith', 'Alice Johnson']);
  const [selectedSearch, setSelectedSearch] = useState('');

  const handleSearchClick = (search) => {
    setSelectedSearch(search);
  };

  const handleSearch = (event) => {
    if (event.key === 'Enter') {
      setSelectedSearch(event.target.value);
    }
  };

  return (
    <div className=''>
      <div className="relative p-5">
        <div className="relative">
          <input
            type="text"
            placeholder="Поиск..."
            className={`w-full px-4 py-2 bg-gray-200 rounded focus:outline-none ${isFocused ? 'border-2 border-cyan-700' : ''}`}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onKeyDown={handleSearch}
          />
          <svg
            className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m1.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="flex space-x-2 mb-4">
          {searches.map((search, index) => (
            <div
              key={index}
              className="bg-gray-300 rounded-full px-4 py-2 cursor-pointer"
              onClick={() => handleSearchClick(search)}
            >
              {search}
            </div>
          ))}
        </div>
        {selectedSearch && (
          <>
            <div className="font-bold text-xl mb-2">Результаты поиска: {selectedSearch}</div>
            <div className="flex justify-center">
              <div className="max-w-sm rounded-full overflow-hidden shadow-lg my-5 p-4 bg-gray-100 flex items-center h-full lg:h-[calc(100%-30px)] sm:h-[calc(100%-15px)]">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-gray-300"></div>
                <div className="ml-4">
                  <div className="text-lg font-medium text-black">{selectedSearch}</div>
                  <div className="text-gray-500">Profile</div>
                </div>
                <div className="ml-auto bg-green-500 h-8 w-8 rounded-full flex items-center justify-center">
                  <svg
                    className="h-4 w-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
