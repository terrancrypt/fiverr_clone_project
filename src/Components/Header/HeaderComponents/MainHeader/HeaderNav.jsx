import React from "react";

const HeaderNav = () => {
  return (
    <div className="header__nav ml-8">
      <ul className="flex items-center">
        <li className="fiverr__business">
          <a href="#">Fiverr Business</a>
        </li>
        <li className="fiverr__explore">
          <a href="#">Explore</a>
        </li>
        <li className="header__nav-language flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
            />
          </svg>

          <a className="ml-1" href="#">
            English
          </a>
        </li>
        <li className="fiverr__become">
          <a href="#">Become a Seller</a>
        </li>
        <li>
          <a href="#">Sign In</a>
        </li>
        <a href="#" className="header__button py-1.5 px-4 rounded border">
          Join
        </a>
      </ul>
    </div>
  );
};

export default HeaderNav;
