/*eslint-disable*/
import React from "react";
import { Link, useLocation } from "react-router-dom";

// components
// import PagesDropdown from "components/Dropdowns/PagesDropdown.js";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const location = useLocation();
  const isRegisterPage = location.pathname === "/auth/register";

  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-black shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-1/2 relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-blueGray-100 text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
              to="/home"
            >
              Janwar
            </Link>
 
          </div>
          
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              {/* <li className="flex items-center">
                <PagesDropdown />
              </li> */}
              <li className="flex items-center">
                {isRegisterPage ? (
                  <button
                    className="bg-indigo-500 text-white active:bg-lightBlue-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                    type="button"
                  >
                    <Link to="/auth/login">Login</Link>
                  </button>
                ) : (
                  <button
                    className="bg-lightBlue-500 text-white active:bg-lightBlue-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                    type="button"
                  >
                    <Link to="/auth/register">Register</Link>
                  </button>
                )}
              </li>
            </ul>
        </div>
      </nav>
    </>
  );
}
