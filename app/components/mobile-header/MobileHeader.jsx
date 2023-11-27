'use client'

import React from 'react';
import { useState, useEffect } from 'react';
import './mobileHeader.css';

const MobileHeader = () => {
  const [hidden, setHidden] = useState(true);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      if (currentScrollPosition < lastScrollPosition) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastScrollPosition(currentScrollPosition);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollPosition]);

  return (
    <div className='h-[80px] w-full'>
      <h2>School identity</h2>
      <header className={`${hidden && 'header-hidden'} h-[60px] bg-blue-900 flex justify-center xl:h-[80px] top-0 fixed w-full`}>

      </header>
    </div>
  )
}

export default MobileHeader