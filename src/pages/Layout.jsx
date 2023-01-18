import React from 'react';
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import NavbarMobile from "../components/NavbarMobile";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

const Layout = () => {
  library.add(fas);
  
  return (
    <> 
      <Navbar />
      <NavbarMobile />
      <Outlet />
      <Footer />
      <BackToTop />
    </>
  );
};

export default Layout;