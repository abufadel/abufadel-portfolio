'use client'

import { useState, useEffect } from 'react';
import "./header.css";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import { motion } from "framer-motion"
import abufadelLogo from './fadelLogo.ico';

const Header = () => {



    const [showPopUp, setShowPopUp] = useState(false);
    

    return (
        <header className="flex" >
            <div className='menu' onClick={() => {
                setShowPopUp(true);
            }}>
            <input id="checkbox" type="checkbox"></input>
                <label class="toggle" for="checkbox">
                    <div id="bar1" class="bars"></div>
                    <div id="bar2" class="bars"></div>
                    <div id="bar3" class="bars"></div>
                </label>
            </div>

            <motion.div className='abufadel-logo-div' 
                initial={{ transform: "scale(0)" }}
                animate={{ transform: "scale(1.1)" }}
                transition={{ damping: 6, type: "spring", stiffness: 100 }}
            >
            <Image className='abufadel-logo' src={abufadelLogo} alt="abufadel-Logo" />
            </motion.div>
            <div />

            <nav>
                <ul className="flex" >
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#project">Projects</a>
                    </li>
                    <li>
                        <a href="#contact">Contact Us</a>
                    </li>
                </ul>
            </nav>

            {showPopUp && (<div className="fixed">
                <ul className="model">
                    <li>
                        <FontAwesomeIcon className='x-close' onClick={() => {
                            setShowPopUp(false);
                        }} icon={faXmark} />
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>)}


        </header>
    );
};

export default Header;
