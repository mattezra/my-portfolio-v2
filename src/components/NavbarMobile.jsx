import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  const activeStyle = {
    color: "rgb(20 184 166)",
  };

  return (
    <nav className="flex items-end flex-col px-5 py-5 bg-black/[.5] fixed w-full md:hidden text-white text-sm nav-bar z-50">
      <div className="flex flex-col items-center">
        <button className="hover:text-teal-500 w-min outline-none" onClick={() => setToggle(!toggle)}>
          <svg
            className="w-6 h-6"
            x-show="!showMenu"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
          <path d="M6 6h18M6 12h18M6 18h18"></path>
          </svg>
        </button>
      </div>
      {toggle && (
        <div className="flex flex-col items-end">
          <NavLink 
            style={({ isActive }) => isActive ? activeStyle : undefined } 
            to="/" className="my-1 w-max block hover:text-teal-500" onClick={() => setActive(false)}>
            Home
          </NavLink>
          <NavLink 
            style={({ isActive }) => isActive ? activeStyle : undefined } 
            to="/about" className="my-1 w-max block hover:text-teal-500" onClick={() => setActive(false)}>
            About
          </NavLink>
          <NavLink 
            style={({ isActive }) => isActive ? activeStyle : undefined } 
            to="/portfolio" className="my-1 w-max block hover:text-teal-500" onClick={() => setActive(false)}>
            Portfolio
          </NavLink>
          <a 
            href="https://drive.google.com/file/d/12LuHEpymfVCj0ELCKhkrSMKc-jDEsnqy/view?usp=sharing" className="my-1 w-max block hover:text-teal-500" target="_blank">
            Resume
          </a>
        </div>
      )}
    </nav>
  )
}

export default Navbar
