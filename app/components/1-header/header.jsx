'use client'

import { useState, useEffect } from 'react';
import "./header.css";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons'
const Header = () => {

    const [showPopUp, setShowPopUp] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem('currentMode') ?? 'dark');

    useEffect(() => {
        if(theme === 'light') {
            document.body.classList.remove('dark');
            document.body.classList.add('light');
        } else {
            document.body.classList.remove('light');
            document.body.classList.add('dark');

        }
    }, [theme]);
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
            <label class="switch">
                <input onClick={() => {
                    localStorage.setItem('currentMode', theme === "dark" ? "light" : "dark");
                    setTheme(localStorage.getItem('currentMode'));
                }} type="checkbox" class="input__check"></input>
                <span class="slider"></span>
            </label>


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
