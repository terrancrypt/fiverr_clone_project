import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HeaderSearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const searchSubmit = (event) => {
    event.preventDefault();
    navigate(`/search/${searchValue}`);
  };

  return (
    <form className="header__search relative flex-grow" onSubmit={searchSubmit}>
      <input
        type="search"
        id="search-dropdown"
        className="block w-full z-20 border rounded"
        placeholder="What service are you looking for today?"
        required
        onChange={(event) => setSearchValue(event.target.value)}
      />
      <button type="submit" className="absolute top-0 right-0 px-4 py-[12px]">
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
    </form>
  );
};

export default HeaderSearch;
