import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

function BackToTop() {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        let isVisible = false;
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 200) {
            if (!isVisible) {
                setVisible(true);
                isVisible = true;
            }
            
        } else {
            setVisible(false);
            isVisible = false;
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <span className="back-to-top">
            <NavLink to="#" style={{display: visible ? 'block' : 'none'}} onClick={scrollToTop} className="animate-bounce">Back to Top</NavLink>
        </span>
    )
}

export default BackToTop