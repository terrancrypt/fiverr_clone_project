import React from "react";

const HeaderSearch = () => {
  return (
    <div className="header__search relative flex-grow">
      <input
        type="search"
        id="search-dropdown"
        className="block w-full z-20 border rounded"
        placeholder="What service are you looking for today?"
        required
      />
      <button type="submit" className="absolute top-0 right-0 px-4 py-3">
        <svg
          aria-hidden="true"
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <span className="sr-only">Search</span>
      </button>
    </div>
  );
};

export default HeaderSearch;
