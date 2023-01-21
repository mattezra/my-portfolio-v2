import React, { useState, useEffect }  from 'react';
import { NavLink } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Preloader from "../components/Preloader";

function Home() {
    document.title = "Matthew Ezra Labre";
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    return (
        <>
        {loading ? (
            <Preloader />
        ) : (
            <>
                <div id="home" className="flex flex-col items-center justify-center bg-[url('/banner.jpg')] bg-auto bg-repeat bg-center bg-fixed h-screen text-center home-section">
                    <img src="/logo.png" alt="Logo" loading="lazy" />
                    <h1 className="mb-1 text-5xl text-white md:block hidden font-semibold">
                    <span className="inline-flex h-20 pt-2 overflow-x-hidden animate-type whitespace-nowrap">Hi, I'm Matt. A Developer.</span>
                    <span className="box-border inline-block w-1 h-10 ml-2 -mb-2 bg-white md:-mb-4 md:h-16 animate-cursor"></span>
                    </h1>
                    <h1 className="mb-1 text-5xl text-white md:hidden block">Hi, I'm Matt.<br/> A Developer.</h1>
                    <h2 className="mx-10 text-xl text-zinc-300 mt-10 md:mt-1 font-semibold tracking-wide">I write clean and efficient code and more importantly, I love what I do.</h2>
                    <HashLink to="#featured-projects" className="mt-20 block text-sm px-4 py-2 leading-none border rounded text-teal-500 border-teal-500 hover:text-white hover:bg-teal-500 mt-0">See my projects</HashLink>
                    <p className="absolute bottom-1 text-white text-xs animate-pulse">
                        Want to know more?<br/>
                        <HashLink to="#services" className="hover:text-teal-500"><FontAwesomeIcon icon="fa-solid fa-caret-down" size="lg"/></HashLink>
                    </p>
                </div>
                <div id="services" className="p-28 flex flex-col items-center services-section h-full text-center">
                    <h1 className="mb-1 text-2xl text-zinc-900 font-semibold uppercase">What I Do</h1>
                    <h2 className="text-md text-zinc-900 mt-1">I am very passionate about building digital products based on my client's needs. <br />This may be a website, a simple landing page or a web application.</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-30 mt-20">
                        <div>
                            <FontAwesomeIcon icon="fa-solid fa-link" size="2x" className="text-teal-500 mb-2"/>
                            <h3 className="text-lg text-zinc-900 mb-2 uppercase">Collaborate</h3>
                            <p className="text-sm text-justify text-zinc-900">I love meeting new people. I love sharing ideas with prospective clients. Having a hot coffee in the morning or a cold drink (beer?) in the evening with people I work and collaborate with is a time not wasted for me. Enjoying their company only makes it better to collaborate with them.</p>
                        </div>
                        <div>
                            <FontAwesomeIcon icon="fa-solid fa-code" size="2x" className="text-teal-500 mb-2"/>
                            <h3 className="text-lg text-zinc-900 mb-2 uppercase">Code</h3>
                            <p className="text-sm text-justify text-zinc-900">I have knowledge in technologies used in web development such as HTML 5, CSS 3 and JavaScript, front-end frameworks such as ReactJS, TailwindCSS, Bootstrap, JQuery and the like and back-end technologies such as PHP, Java, NodeJS and WordPress and back-end frameworks such as Laravel.</p>
                        </div>
                        <div>
                            <FontAwesomeIcon icon="fa-solid fa-check" size="2x" className="text-teal-500 mb-2"/>
                            <h3 className="text-lg text-zinc-900 mb-2 uppercase">Complete</h3>
                            <p className="text-sm text-justify text-zinc-900">I assure that a quality product is being delivered to the client and the deliverable meets the client's requirements and needs. It is also assured that the product is delivered on-time and is of high quality. A periodical update to the client is also assured for essential feedback.</p>
                        </div>
                    </div>
                </div>
                <div id="featured-projects" className="py-28 px-15 md:px-20 flex flex-col items-center h-full text-white bg-[url('/banner.jpg')] bg-auto bg-repeat bg-center bg-fixed featured-projects-section">
                    <h1 className="mb-1 text-2xl font-semibold uppercase text-center ">Some Things I've Built</h1>
                    <h2 className="text-center text-md mt-1 mx-10 text-zinc-400">Here are a few past projects I've worked on. Want to see more? Check them <NavLink to="/portfolio" className="relative text-teal-500 inline-block mt-0 hover:underline">here</NavLink>.</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-30 md:gap-y-32 gap-y-16 mt-20 md:text-left text-center items-center">
                        <div>
                            <h3 className="text-lg mb-2 uppercase"><FontAwesomeIcon icon="fa-solid fa-briefcase" size="sm" className="text-teal-500 mr-2"/> Meghan Blanton Photography</h3>
                            <p className="mb-1"><FontAwesomeIcon icon="fa-solid fa-gear" size="sm" className="text-teal-500 mr-2"/> Front-end | WordPress Optimization</p>
                            <p className="mb-3"><FontAwesomeIcon icon="fa-solid fa-code" size="sm" className="text-teal-500 mr-2"/> WordPress | SEO | PageSpeed Insight</p>
                            <a target="_blank" href="https://meghanblanton.com/" className="mt-20 text-sm px-4 py-2 leading-none border rounded text-teal-500 border-teal-500 hover:text-white hover:bg-teal-500 mt-0 group">Website<FontAwesomeIcon icon="fa-solid fa-up-right-from-square" size="sm" className="text-teal-500 ml-1 group-hover:text-white"/></a>
                        </div>
                        <div>
                            <img src="/meghanblanton.png" className="grayscale hover:grayscale-0 hover:scale-110 mx-auto" alt="Meghan Blanton Photography Website" loading="lazy" />
                        </div>
                        <div className="md:block hidden">
                            <img src="/labregadigitalservices.png" className="grayscale hover:grayscale-0 hover:scale-110 mx-auto" alt="Labrega Digital Services Website" loading="lazy" />
                        </div>
                        <div className="md:block hidden">
                            <h3 className="text-lg mb-2 uppercase"><FontAwesomeIcon icon="fa-solid fa-briefcase" size="sm" className="text-teal-500 mr-2"/> Labrega Digital Services</h3>
                            <p className="mb-1"><FontAwesomeIcon icon="fa-solid fa-gear" size="sm" className="text-teal-500 mr-2"/> Front-end | UI/UX | Mobile-responsive</p>
                            <p className="mb-3"><FontAwesomeIcon icon="fa-solid fa-code" size="sm" className="text-teal-500 mr-2"/> HTML 5 | CSS 3 | Javascript | JQuery | Bootstrap | Google Firebase</p>
                            <a target="_blank" href="https://labregadigitalservices.web.app/" className="mt-20 text-sm px-4 py-2 leading-none border rounded text-teal-500 border-teal-500 hover:text-white hover:bg-teal-500 mt-0 group">Website<FontAwesomeIcon icon="fa-solid fa-up-right-from-square" size="sm" className="text-teal-500 ml-1 group-hover:text-white"/></a>
                        </div>
                        <div className="md:hidden block">
                            <h3 className="text-lg mb-2 uppercase"><FontAwesomeIcon icon="fa-solid fa-briefcase" size="sm" className="text-teal-500 mr-2"/> Labrega Digital Services</h3>
                            <p className="mb-1"><FontAwesomeIcon icon="fa-solid fa-gear" size="sm" className="text-teal-500 mr-2"/> Front-end | UI/UX | Mobile-responsive</p>
                            <p className="mb-3"><FontAwesomeIcon icon="fa-solid fa-code" size="sm" className="text-teal-500 mr-2"/> HTML 5 | CSS 3 | Javascript | JQuery | Bootstrap | Google Firebase</p>
                            <a target="_blank" href="https://labregadigitalservices.web.app/" className="mt-20 text-sm px-4 py-2 leading-none border rounded text-teal-500 border-teal-500 hover:text-white hover:bg-teal-500 mt-0 group">Website<FontAwesomeIcon icon="fa-solid fa-up-right-from-square" size="sm" className="text-teal-500 ml-1 group-hover:text-white"/></a>
                        </div>
                        <div className="md:hidden block">
                            <img src="/labregadigitalservices.png" className="grayscale hover:grayscale-0 hover:scale-110 mx-auto" alt="Labrega Digital Services Website" loading="lazy" />
                        </div>
                        <div>
                            <h3 className="text-lg mb-2 uppercase"><FontAwesomeIcon icon="fa-solid fa-briefcase" size="sm" className="text-teal-500 mr-2"/> Steve Politis, DPT</h3>
                            <p className="mb-1"><FontAwesomeIcon icon="fa-solid fa-gear" size="sm" className="text-teal-500 mr-2"/> Front-end | Mobile-responsive | Adobe Photoshop</p>
                            <p className="mb-3"><FontAwesomeIcon icon="fa-solid fa-code" size="sm" className="text-teal-500 mr-2"/> WordPress | PHP | HTML 5 | CSS 3 | Javascript | JQuery | Bootstrap </p>
                            <a target="_blank" href="https://stevepolitisdpt.com/" className="mt-20 text-sm px-4 py-2 leading-none border rounded text-teal-500 border-teal-500 hover:text-white hover:bg-teal-500 mt-0 group">Website<FontAwesomeIcon icon="fa-solid fa-up-right-from-square" size="sm" className="text-teal-500 ml-1 group-hover:text-white"/></a>
                        </div>
                        <div>
                        <img src="/stevepolitisdpt.png" className="grayscale hover:grayscale-0 hover:scale-110 mx-auto" alt="Steve Politis, DPT" loading="lazy" />
                        </div>
                    </div>
                    <NavLink to="/portfolio" className="mx-2 inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-teal-500 hover:text-teal-500 mt-24">See all</NavLink>
                </div>
                <div id="testimonial" className="py-28 px-20 flex flex-col items-center testimonial-section h-full text-black text-center bg-gradient-to-r from-teal-500 to-teal-700">
                    <h1 className="mb-10 text-2xl font-semibold uppercase">Testimonial</h1>
                    <img src="/testimonial.jpg" className="w-36 rounded-full" alt="Meghan Blanton" loading="lazy" />
                    <p className="tracking-wide max-w-3xl mt-3"><FontAwesomeIcon icon="fa-solid fa-quote-left" size="2x" className="mr-2"/>I hired Matthew to help optimize my website's speed and SEO. He was very easy to work with, communicative, and efficient. After the project was completed, he created a detailed SOP for me to follow moving forward to ensure that anything new I created for my site would be optimized as well. He was able to complete our project in a timely manner and I saw immediate improvements from the optimization. Thank you, Matt!<FontAwesomeIcon icon="fa-solid fa-quote-right" size="2x" className="ml-2"/></p>
                    <h3 className="font-bold text-lg mt-10">Meghan Blanton</h3>
                    <p>Owner and Photographer, Meghan Blanton Photography</p>
                </div>
            </>
         )}
        </>
    );
}

export default Home;