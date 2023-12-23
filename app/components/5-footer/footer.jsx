import './footer.css';

import React from 'react';

const Footer = () => {
    return (
            <footer className="links flex">
                <ul className='flex'>
                    <li><a href="#about">About</a></li>
                    <li><a href="#project">Projects</a></li>
                    <li><a href="#contact">Contact us</a></li>
                </ul>
                <p>© 2023 Coding by <span>Abufadel.</span> </p>
            </footer>
            
    );
}

export default Footer;
