import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

function Navbar() {
  const activeStyle = {
    color: "rgb(20 184 166)",
  };

  return (
    <nav className="md:flex items-center justify-between flex-wrap px-8 py-1 bg-black/[.5] fixed w-full hidden nav-bar z-50">
      <HashLink to="/#home" className="flex items-center flex-shrink-0 mr-6">
        <img src="/logo.png" className="w-12" alt="Logo" loading="lazy" />
      </HashLink> 
      <div className="w-full block flex-grow flex items-center w-auto">
        <div className="text-sm flex-grow text-white nav-menu">
          <NavLink 
            style={({ isActive }) => isActive ? activeStyle : undefined } 
            to="/" className="p-1.5 relative hover:text-teal-500 inline-block mt-0 text-white mr-7">
            Home
          </NavLink>
          <NavLink
            style={({ isActive }) => isActive ? activeStyle : undefined }
            to="/about" className="p-1.5 relative hover:text-teal-500 inline-block mt-0 text-white mr-7">
            About
          </NavLink>
          <NavLink 
            style={({ isActive }) => isActive ? activeStyle : undefined }
            to="/portfolio" className="p-1.5 relative hover:text-teal-500 inline-block mt-0 text-white mr-7">
            Portfolio
          </NavLink>
        </div>
        <div>
          <a href="https://drive.google.com/file/d/12LuHEpymfVCj0ELCKhkrSMKc-jDEsnqy/view?usp=sharing" className="mx-2 inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-teal-500 hover:text-teal-500 mt-0" target="_blank">Resume</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar