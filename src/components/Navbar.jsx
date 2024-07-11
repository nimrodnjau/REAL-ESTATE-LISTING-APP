import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { UserContext } from '../context/UserContext';

export default function Navbar() {
  const { currentUser, logout } = useContext(UserContext);

  return (
    <nav className="bg-white px-2 sm:px-4 py-2.5 rounded-lg border-gray-900 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-blue-600 text-2xl font-semibold whitespace-nowrap dark:text-white">Horizon Homes</span>
        </a>
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link to="/" className="block py-2 px-3 text-gray-950 bg-blue-700 rounded md:bg-transparent md:p-0 dark:text-white hover:underline md:dark:text-blue-500" aria-current="page">Home</Link>
            </li>
            {currentUser && currentUser.email ? (
              <>
                <li>
                  <Link to="/allproperties" className="block py-2 px-3 text-blue-600 rounded hover:bg-slate-600 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent hover:underline">All Properties</Link>
                </li>
                <li>
                  <Link to="/addproperty" className="block py-2 px-3 text-blue-600 rounded hover:bg-slate-600 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent hover:underline">Add Property</Link>
                </li>
                <li>
                  <Link to="/contact" className="block py-2 px-3 text-blue-600 rounded hover:bg-slate-600 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent hover:underline">Contact Us</Link>
                </li>
                <li>
                  <Link to="/profile" className="block py-2 px-3 text-blue-600 rounded hover:bg-slate-600 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent hover:underline">Profile</Link>
                </li>
                <li>
                  <p onClick={logout} className="block hover:cursor-pointer py-2 px-3 text-lg text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    Logout
                  </p>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/register" className="block py-2 px-3 text-blue-600 rounded hover:bg-slate-600 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent hover:underline">Register</Link>
                </li>
                <li>
                  <Link to="/login" className="block py-2 px-3 text-blue-600 rounded hover:bg-slate-600 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent hover:underline">Login</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

