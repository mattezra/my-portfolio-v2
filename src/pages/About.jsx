import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function About() {
    document.title = "About | Matthew Ezra Labre";

    return (
        <div className="p-28 flex flex-col items-center about-section h-full text-white bg-[url('/banner.jpg')] bg-auto bg-repeat bg-center bg-fixed">
            <h1 className="mb-1 text-2xl font-semibold uppercase">Hey There</h1>
            <h2 className="text-md mt-1 text-zinc-400">Let me introduce myself.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-30 md:gap-y-32 gap-y-16 mt-20 md:text-left text-center">
                <div>
                    <img src="/aboutme.jpg" className="max-h-full" alt="Matthew Ezra Labre" loading="lazy" />
                </div>
                <div>
                    <h3 className="text-3xl font-bold mb-5 text-teal-500">I am Matt, a web developer with 6 years work experience based in the Philippines.</h3>
                    <p className="mb-3 text-md">My web development career started when I was in high school around 2013. I loved playing computer games and the pressure of what course to take in college started, so because of my passion in playing computer games, I thought of getting Information Technology to somehow create games soon but ended up loving web development, creating websites and landing pages as well as building web applications. </p>
                    <h3 className="text-xl font-bold m-0 text-teal-500 uppercase">Work Experience</h3>
                    <p className="text-lg font-bold text-gray-300"><a className="underline hover:text-teal-500" href="https://zesty.io/">Zesty.io</a> | Remote | 2022 - Present</p>
                    <p className="text-md">Back-end Developer</p>
                    <h3 className="text-sm mb-3">NodeJS, MySQL, Google Cloud Platform</h3>
                    <p className="text-lg font-bold text-gray-300">Giant International Software Station, Inc. | Philippines | 2017 - 2022</p>
                    <p className="text-md">Web Application Developer</p>
                    <h3 className="text-sm mb-3">HTML, CSS, JavaScript, C#, MySQL, Amazon Web Services</h3>
                    <a target="_blank" href="https://drive.google.com/file/d/12LuHEpymfVCj0ELCKhkrSMKc-jDEsnqy/view?usp=sharing" className="group mt-2 inline-block text-sm px-4 py-2 leading-none border rounded hover:text-white hover:bg-teal-500 border-teal-500 text-teal-500 mt-0">Resume <FontAwesomeIcon icon="fa-solid fa-up-right-from-square" size="sm" className="text-teal-500 ml-1 group-hover:text-white"/></a>
                    <h3 className="text-xl font-bold mt-5 text-teal-500 uppercase">Life</h3>
                    <p className="text-md">When I am not coding, I enjoy <a className="underline hover:text-teal-500" href="https://www.instagram.com/mattezra__/">traveling</a>, <a className="underline hover:text-teal-500" href="https://www.instagram.com/mattezra.fb/">fingerboarding</a> and spending time with my wife Juna, our dog Kaia and our daughter Yohannah. I am the biggest fan of coffee, beer and roots, rock, reggae music.</p>
                    <h3 className="text-xl font-bold mt-5 text-teal-500 uppercase">Let's connect</h3>
                    <SocialIcon className="hover:scale-110 mt-3 mr-3" url="https://www.instagram.com/mattezra__/" bgColor="#fff" fgColor="#000" style={{ height: 45, width: 45 }} network="instagram"/>
                    <SocialIcon className="hover:scale-110 mt-3 mr-3" url="https://github.com/mattezra" bgColor="#fff" fgColor="#000" style={{ height: 45, width: 45 }} network="github"/>
                    <SocialIcon className="hover:scale-110 mt-3 mr-3" url="https://www.linkedin.com/in/matthewezralabre/" bgColor="#fff" fgColor="#000" style={{ height: 45, width: 45 }}/><br />
                    <a target="_blank" href="mailto:labrematthewzra@gmail.com" className="group mt-5 inline-block text-sm px-4 py-2 leading-none border rounded hover:text-white hover:bg-teal-500 border-teal-500 text-teal-500 mt-0">Say hello <FontAwesomeIcon icon="fa-solid fa-hand" size="sm" className="text-teal-500 ml-1 group-hover:text-white"/></a>
                </div>
            </div>
        </div>
    );
}

export default About;