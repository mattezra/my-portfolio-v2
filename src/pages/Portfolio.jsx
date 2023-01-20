import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Portfolio() {
    document.title = "Portfolio | Matthew Ezra Labre";

    return (
        <div className="py-28 px-15 md:px-20 flex flex-col items-center h-full text-white bg-[url('/banner.jpg')] bg-auto bg-repeat bg-center bg-fixed featured-projects-section">
            <h1 className="mb-1 text-2xl font-semibold uppercase">Portfolio</h1>
            <h2 className="text-md mt-1 text-zinc-400">A list of things I've worked on.</h2>
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
                    <h3 className="text-lg mb-2 uppercase"><FontAwesomeIcon icon="fa-solid fa-briefcase" size="sm" className="text-teal-500 mr-2"/> Balay Mobile Application</h3>
                    <p className="mb-1"><FontAwesomeIcon icon="fa-solid fa-gear" size="sm" className="text-teal-500 mr-2"/> Database | Cross-Platform App</p>
                    <p className="mb-3"><FontAwesomeIcon icon="fa-solid fa-code" size="sm" className="text-teal-500 mr-2"/> Ionic 2 | MySQL | Java | Google Maps API | Amazon Web Services</p>
                </div>
                <div>
                    <img src="/balay-mobile.png" className="grayscale hover:grayscale-0 hover:scale-110 mx-auto" alt="Balay Mobile Application" loading="lazy" />
                </div>
                <div className="md:block hidden">
                    <img src="/balay-web.png" className="grayscale hover:grayscale-0 hover:scale-110 mx-auto" alt="Balay Web Application" loading="lazy" />
                </div>
                <div className="md:block hidden">
                    <h3 className="text-lg mb-2 uppercase"><FontAwesomeIcon icon="fa-solid fa-briefcase" size="sm" className="text-teal-500 mr-2"/> Balay Web Application</h3>
                    <p className="mb-1"><FontAwesomeIcon icon="fa-solid fa-gear" size="sm" className="text-teal-500 mr-2"/> Front-end | Back-end | Database </p>
                    <p className="mb-3"><FontAwesomeIcon icon="fa-solid fa-code" size="sm" className="text-teal-500 mr-2"/> JQuery | Bootstrap | MySQL | PHP | Google Maps API | Amazon Web Services</p>
                </div>
                <div className="md:hidden block">
                    <h3 className="text-lg mb-2 uppercase"><FontAwesomeIcon icon="fa-solid fa-briefcase" size="sm" className="text-teal-500 mr-2"/> Balay Web Application</h3>
                    <p className="mb-1"><FontAwesomeIcon icon="fa-solid fa-gear" size="sm" className="text-teal-500 mr-2"/> Front-end | Back-end | Database </p>
                    <p className="mb-3"><FontAwesomeIcon icon="fa-solid fa-code" size="sm" className="text-teal-500 mr-2"/> JQuery | Bootstrap | MySQL | PHP | Google Maps API | Amazon Web Services</p>
                </div>
                <div className="md:hidden block">
                    <img src="/balay-web.png" className="grayscale hover:grayscale-0 hover:scale-110 mx-auto" alt="Balay Web Application" loading="lazy" />
                </div>
                <div>
                    <h3 className="text-lg mb-2 uppercase"><FontAwesomeIcon icon="fa-solid fa-briefcase" size="sm" className="text-teal-500 mr-2"/> Balay Website</h3>
                    <p className="mb-1"><FontAwesomeIcon icon="fa-solid fa-gear" size="sm" className="text-teal-500 mr-2"/> Front-end| UI/UX | Mobile-responsive</p>
                    <p className="mb-3"><FontAwesomeIcon icon="fa-solid fa-code" size="sm" className="text-teal-500 mr-2"/> HTML 5, CSS 3, Javascript, JQuery, Bootstrap | Google Firebase</p>
                    <a target="_blank" href="https://balay-2aa89.firebaseapp.com/" className="mt-20 text-sm px-4 py-2 leading-none border rounded text-teal-500 border-teal-500 hover:text-white hover:bg-teal-500 mt-0 group">Website<FontAwesomeIcon icon="fa-solid fa-up-right-from-square" size="sm" className="text-teal-500 ml-1 group-hover:text-white"/></a>
                </div>
                <div>
                    <img src="/balay.png" className="grayscale hover:grayscale-0 hover:scale-110 mx-auto" alt="Balay Mobile Application" loading="lazy" />
                </div>
                <div className="md:block hidden">
                    <img src="/stevepolitisdpt.png" className="grayscale hover:grayscale-0 hover:scale-110 mx-auto" alt="Steve Politis, DPT" loading="lazy" />
                </div>
                <div className="md:block hidden">
                    <h3 className="text-lg mb-2 uppercase"><FontAwesomeIcon icon="fa-solid fa-briefcase" size="sm" className="text-teal-500 mr-2"/> Steve Politis, DPT</h3>
                    <p className="mb-1"><FontAwesomeIcon icon="fa-solid fa-gear" size="sm" className="text-teal-500 mr-2"/> Front-end | Mobile-responsive | Adobe Photoshop</p>
                    <p className="mb-3"><FontAwesomeIcon icon="fa-solid fa-code" size="sm" className="text-teal-500 mr-2"/> WordPress | PHP | HTML 5 | CSS 3 | Javascript | JQuery | Bootstrap </p>
                    <a target="_blank" href="https://stevepolitisdpt.com/" className="mt-20 text-sm px-4 py-2 leading-none border rounded text-teal-500 border-teal-500 hover:text-white hover:bg-teal-500 mt-0 group">Website<FontAwesomeIcon icon="fa-solid fa-up-right-from-square" size="sm" className="text-teal-500 ml-1 group-hover:text-white"/></a>
                </div>
                <div className="md:hidden block">
                    <h3 className="text-lg mb-2 uppercase"><FontAwesomeIcon icon="fa-solid fa-briefcase" size="sm" className="text-teal-500 mr-2"/> Steve Politis, DPT</h3>
                    <p className="mb-1"><FontAwesomeIcon icon="fa-solid fa-gear" size="sm" className="text-teal-500 mr-2"/> Front-end | Mobile-responsive | Adobe Photoshop</p>
                    <p className="mb-3"><FontAwesomeIcon icon="fa-solid fa-code" size="sm" className="text-teal-500 mr-2"/> WordPress | HTML 5 | CSS 3 | Javascript | JQuery | Bootstrap </p>
                    <a target="_blank" href="https://stevepolitisdpt.com/" className="mt-20 text-sm px-4 py-2 leading-none border rounded text-teal-500 border-teal-500 hover:text-white hover:bg-teal-500 mt-0 group">Website<FontAwesomeIcon icon="fa-solid fa-up-right-from-square" size="sm" className="text-teal-500 ml-1 group-hover:text-white"/></a>
                </div>
                <div className="md:hidden block">
                    <img src="/stevepolitisdpt.png" className="grayscale hover:grayscale-0 hover:scale-110 mx-auto" alt="Steve Politis, DPT" loading="lazy" />
                </div>
                <div>
                    <h3 className="text-lg mb-2 uppercase"><FontAwesomeIcon icon="fa-solid fa-briefcase" size="sm" className="text-teal-500 mr-2"/> Living Fit Training</h3>
                    <p className="mb-1"><FontAwesomeIcon icon="fa-solid fa-gear" size="sm" className="text-teal-500 mr-2"/> Front-end | Mobile-responsive | Adobe Photoshop</p>
                    <p className="mb-3"><FontAwesomeIcon icon="fa-solid fa-code" size="sm" className="text-teal-500 mr-2"/> WordPress | PHP | HTML 5 | CSS 3 | Javascript | JQuery | Bootstrap </p>
                    <a target="_blank" href="http://livingfit.training/" className="mt-20 text-sm px-4 py-2 leading-none border rounded text-teal-500 border-teal-500 hover:text-white hover:bg-teal-500 mt-0 group">Website<FontAwesomeIcon icon="fa-solid fa-up-right-from-square" size="sm" className="text-teal-500 ml-1 group-hover:text-white"/></a>
                </div>
                <div>
                    <img src="/livingfit.png" className="grayscale hover:grayscale-0 hover:scale-110 mx-auto" alt="Living Fit Training" loading="lazy" />
                </div>
                <div className="md:block hidden">
                    <img src="/performancebuilders.png" className="grayscale hover:grayscale-0 hover:scale-110 mx-auto" alt="Performance Builders" loading="lazy" />
                </div>
                <div className="md:block hidden">
                    <h3 className="text-lg mb-2 uppercase"><FontAwesomeIcon icon="fa-solid fa-briefcase" size="sm" className="text-teal-500 mr-2"/> Performance Builders</h3>
                    <p className="mb-1"><FontAwesomeIcon icon="fa-solid fa-gear" size="sm" className="text-teal-500 mr-2"/> Front-end | Mobile-responsive | Adobe Photoshop</p>
                    <p className="mb-3"><FontAwesomeIcon icon="fa-solid fa-code" size="sm" className="text-teal-500 mr-2"/> WordPress | PHP | HTML 5 | CSS 3 | Javascript | JQuery | Bootstrap </p>
                    <a target="_blank" href="http://performancebuilders.com/" className="mt-20 text-sm px-4 py-2 leading-none border rounded text-teal-500 border-teal-500 hover:text-white hover:bg-teal-500 mt-0 group">Website<FontAwesomeIcon icon="fa-solid fa-up-right-from-square" size="sm" className="text-teal-500 ml-1 group-hover:text-white"/></a>
                </div>
                <div className="md:hidden block">
                    <h3 className="text-lg mb-2 uppercase"><FontAwesomeIcon icon="fa-solid fa-briefcase" size="sm" className="text-teal-500 mr-2"/> Performance Builders</h3>
                    <p className="mb-1"><FontAwesomeIcon icon="fa-solid fa-gear" size="sm" className="text-teal-500 mr-2"/> Front-end | Mobile-responsive | Adobe Photoshop</p>
                    <p className="mb-3"><FontAwesomeIcon icon="fa-solid fa-code" size="sm" className="text-teal-500 mr-2"/> WordPress | PHP | HTML 5 | CSS 3 | Javascript | JQuery | Bootstrap </p>
                    <a target="_blank" href="http://performancebuilders.com/" className="mt-20 text-sm px-4 py-2 leading-none border rounded text-teal-500 border-teal-500 hover:text-white hover:bg-teal-500 mt-0 group">Website<FontAwesomeIcon icon="fa-solid fa-up-right-from-square" size="sm" className="text-teal-500 ml-1 group-hover:text-white"/></a>
                </div>
                <div className="md:hidden block">
                    <img src="/performancebuilders.png" className="grayscale hover:grayscale-0 hover:scale-110 mx-auto" alt="Performance Builders" loading="lazy" />
                </div>
                <div>
                    <h3 className="text-lg mb-2 uppercase"><FontAwesomeIcon icon="fa-solid fa-briefcase" size="sm" className="text-teal-500 mr-2"/> OJT Virtual Portal</h3>
                    <p className="mb-1"><FontAwesomeIcon icon="fa-solid fa-gear" size="sm" className="text-teal-500 mr-2"/> Back-end | Database</p>
                    <p className="mb-3"><FontAwesomeIcon icon="fa-solid fa-code" size="sm" className="text-teal-500 mr-2"/> PHP | Laravel | MySQL</p>
                </div>
                <div>
                    <img src="/studentportal.png" className="grayscale hover:grayscale-0 hover:scale-110 mx-auto" alt="OJT Virtual Portal" loading="lazy" />
                </div>
            </div>
        </div>
    );
}

export default Portfolio;