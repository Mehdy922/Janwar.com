/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
// components

// import IndexDropdown from "components/Dropdowns/IndexDropdown.js";

const Navbar = () => {
  const navItems = [
    {title: "Pet Accessories", path:"/"},
    {title: "Dogs", path:"/"},
    {title: "Cats", path:"/"},
    {title: "Birds", path:"/"},
    {title: "Exotic Animals", path:"/"},
    {title: "About Us", path:"/"},
    {title: "Contact Us", path:"/"},
  ]

  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-black shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-1/4 relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link to="/home"
              className="text-blueGray-100 text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            >
              <i class="fa fa-paw" aria-hidden="true"></i>
              &nbsp;&nbsp;Janwar
            </Link>
          </div>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              {/* <li className="flex items-center">
                <IndexDropdown />
              </li> */}

              <li className="flex items-center">
              <i className="fas fa-search text-xl"></i>
              &nbsp;
                <input
                  type="text"
                  placeholder="Search... "
                />
                <button
                  className="bg-lightBlue-500 text-white active:bg-lightBlue-700 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button"
                >
                  <Link to="/auth/register">
                    Sign Up
                  </Link>
                </button>
                <button
                  className="bg-indigo-500 text-white active:bg-lightBlue-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button"
                >
                  <Link to="/auth/login">
                    Login
                  </Link>
                </button>
              </li>
            </ul>
        </div>
      </nav>
      <hr/>
      <div className="pt-4">
            <ul className="lg:flex items-center justify-between text-Black hidden">
                {
                    navItems.map(({ title, path }) => (
                        <li key={title} className="hover:text-orange-500">
                            <Link to="/">{title}</Link>
                        </li>
                  ))
                }
            </ul>
        </div>
    </>
  );
}
export default Navbar;
