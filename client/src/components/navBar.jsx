import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../App.css';

function NavBar({ selectedPage, setSelectedPage }) {
  const currentPageCss = `selected-text-size block py-2 pl-3 pr-4 text-color bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 " aria-current="page"`;
  const otherPageCss = `unselected-text-size block py-2 pl-3 pr-4 text-color rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`;

  const [isVerticalNavVisible, setIsVerticalNavVisible] = useState(false);

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 nav-bar nav-bar-top">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 custom-navbar-height">
          <Link to="https://institute-site.vercel.app/" className="flex items-center">
            <img src="/photos/logo.jpg" className=" logo-height mr-5 custom-rounded-box" />
            <span className=" font-link hide-full-text text-color ">Institute of <br className="hidden-ss"></br>Community Services</span>
            <span className="font-link show-ics">I C S</span>
          </Link>
          <button
            onClick={() => setIsVerticalNavVisible(!isVerticalNavVisible)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5 text-color " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className={`w-full md:block md:w-auto ${isVerticalNavVisible ? "block" : "hidden"}`} id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border ${} border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:border-gray-700">
              <li>
                <Link to="/home" className={selectedPage === 1 ? currentPageCss : otherPageCss} onClick={() => { setSelectedPage(1) }}>Home</Link>
              </li>
              <li>
                <Link to="/about" className={selectedPage === 2 ? currentPageCss : otherPageCss} onClick={() => setSelectedPage(2)}>About</Link>
              </li>
              <li>
                <Link to="/programs" className={selectedPage === 3 ? currentPageCss : otherPageCss} onClick={() => setSelectedPage(3)}>Programs</Link>
              </li>
              <li>
                <Link to="/news-events" className={selectedPage === 4 ? currentPageCss : otherPageCss} onClick={() => setSelectedPage(4)}>News and Events</Link>
              </li>
              <li>
                <a href="#footer" className={selectedPage === 5 ? currentPageCss : otherPageCss} onClick={() => setSelectedPage(5)}>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
