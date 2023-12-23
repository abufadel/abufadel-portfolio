'use client'

import Header from './components/1-header/header';
import Hero from './components/2-hero/hero';
import Main from './components/3-main/main';
import Contact from './components/4-contact/contact';
import Footer from './components/5-footer/footer';
import { useEffect, useState } from "react";
import React from 'react';


export default function Home() {

  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowScroll(true)
      } else {
        setShowScroll(false)
      }
    })
  }, []);


  return (
      <div id='about' className='container'>
        <Header  />
        <Hero />
        <div id='project' className='line'></div>
        <Main />
        <div id='contact' className='line'></div>
        <Contact />
        <div className='line'></div>
        <Footer />
      <a style={{opacity: showScroll? 1 : 0, transition: "0.3s"}} href="#about">
        <button class="button">
          <svg class="svgIcon" viewBox="0 0 384 512">
            <path
              d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
            ></path>
          </svg>
        </button>
      </a>
        
      </div>
  )
}
