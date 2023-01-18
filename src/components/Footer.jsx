import React from "react";
import SocialMedia from "./SocialMedia";
import { NavLink } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

function Footer() {
    return (
        <footer className="bg-white flex items-center flex-col pt-8 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-30">
                <div>
                    <h3 className="text-2xl text-zinc-900 mb-2 font-semibold">Services</h3>
                    <p className="text-sm text-zinc-900 mb-0">Website / Landing Page</p>
                    <p className="text-sm text-zinc-900 mb-0">Web Application</p>
                    <p className="text-sm text-zinc-900 mb-0">Content Management System</p>
                    <p className="text-sm text-zinc-900 mb-0">Web Development Consultation</p>
                </div>
                <div className="md:items-center items-left flex flex-col">
                    <h3 className="text-2xl text-zinc-900 mb-0 font-semibold">Get In Touch</h3>
                    <p className="text-md text-zinc-900 mb-3">Have a project in mind?</p>
                    <a href="mailto:labrematthewezra@gmail.com" className="block text-sm px-4 py-2 leading-none border rounded text-zinc-900 border-zinc-900 hover:text-white hover:bg-zinc-900 w-max" target="_blank">Say Hello</a>
                    <SocialMedia />
                </div>
                <div>
                    <h3 className="text-2xl text-zinc-900 mb-2 font-semibold">Navigation</h3>
                    <HashLink to="/#home" className="w-max block text-sm text-zinc-900 mb-0 hover:underline">Home</HashLink>
                    <NavLink to="/about" className="w-max block text-sm text-zinc-900 mb-0 hover:underline">About</NavLink>
                    <NavLink to="/portfolio" className="w-max block text-sm text-zinc-900 mb-0 hover:underline">Portfolio</NavLink>
                    <a href="https://drive.google.com/file/d/12LuHEpymfVCj0ELCKhkrSMKc-jDEsnqy/view?usp=sharing" className="w-max block text-sm text-zinc-900 mb-0 hover:underline" target="_blank">Resume</a>
                </div>
            </div>
            <p className="text-zinc-500 mt-3 text-xs pb-3">© {new Date().getFullYear()} Matthew Ezra Labre</p>
        </footer>
    )
}

export default Footer