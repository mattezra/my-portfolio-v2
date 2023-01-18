import React from "react";
import { SocialIcon } from 'react-social-icons';

function SocialMedia() {
    return (
        <span className="mt-2">
            <SocialIcon className="hover:bg-text-teal-500" url="https://www.instagram.com/mattezra__/" bgColor="transparent" fgColor="#000" style={{ height: 40, width: 40 }} network="instagram"/>
            <SocialIcon className="hover:bg-text-teal-500" url="https://github.com/mattezra" bgColor="transparent" fgColor="#000" style={{ height: 40, width: 40 }} network="github"/>
            <SocialIcon className="hover:bg-text-teal-500" url="https://www.linkedin.com/in/matthewezralabre/" bgColor="transparent" fgColor="#000" style={{ height: 40, width: 40 }}/>
        </span>
    )
}

export default SocialMedia