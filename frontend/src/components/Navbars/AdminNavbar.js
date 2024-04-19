import React from "react";

import UserDropdown from "components/Dropdowns/UserDropdown.js";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-10 bg-black md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
        <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
          {/* Brand */}
          
          <div className="w-1/4 relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              to="/user/dashboard"
              className="text-blueGray-100 text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            >
              AutoSim
            </Link>
            
          </div>
          
          {/* User */}
          <ul className="flex-col md:flex-row list-none items-center  md:flex">
            <UserDropdown />
          </ul>
        </div>
      </nav>
      {/* End Navbar */}
    </>
  );
}
