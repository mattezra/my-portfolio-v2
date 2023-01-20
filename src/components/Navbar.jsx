import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

function Navbar() {
  const activeStyle = {
    color: "rgb(20 184 166)",
  };

  return (
    <nav className="md:flex items-center justify-between flex-wrap px-8 bg-black/[.5] fixed w-full hidden nav-bar z-50">
      <div className="block flex-grow flex items-center w-auto h-max ">
        <div>
          <HashLink to="/#home" className="items-center block h-max mr-7">
            <img src="/logo2.png" alt="Logo" className="h-8 hover:scale-125" loading="lazy" />
          </HashLink> 
        </div>
        <div className="text-sm flex-grow text-white nav-menu">
          <NavLink 
            style={({ isActive }) => isActive ? activeStyle : undefined } 
            to="/" className="p-1.5 relative hover:text-teal-500 inline-block text-white py-5 mx-5">
            Home
          </NavLink>
          <NavLink
            style={({ isActive }) => isActive ? activeStyle : undefined }
            to="/about" className="p-1.5 relative hover:text-teal-500 inline-block text-white py-5 mx-5">
            About
          </NavLink>
          <NavLink 
            style={({ isActive }) => isActive ? activeStyle : undefined }
            to="/portfolio" className="p-1.5 relative hover:text-teal-500 inline-block text-white py-5 mx-5">
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