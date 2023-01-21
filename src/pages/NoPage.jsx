import React from 'react';
import { NavLink } from "react-router-dom";

function NoPage() {
    document.title = "Page Not Found | Matthew Ezra Labre";

    return (
        <div className="flex flex-col items-center justify-center bg-[url('/banner.jpg')] bg-auto bg-repeat bg-center bg-fixed h-screen text-center home-section">
            <h1 className="mb-1 text-5xl text-white md:block hidden font-semibold">404</h1>
            <h2 className="mx-10 text-xl text-zinc-300 mt-10 md:mt-1 font-semibold tracking-wide">Page Not Found</h2>
            <NavLink to="/" className="mt-20 block text-sm px-4 py-2 leading-none border rounded text-teal-500 border-teal-500 hover:text-white hover:bg-teal-500 mt-0">Go back</NavLink>
        </div>
    );
}

export default NoPage;