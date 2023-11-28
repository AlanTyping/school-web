'use client'

import React from 'react';
import Nav from './nav/Nav';
import { useState, useEffect } from 'react';
import './header.css';

const Header = () => {
  const [hidden, setHidden] = useState(false);
  const [lastScrollPosition, setLastScrollPosition] = useState();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;

      if (currentScrollPosition > lastScrollPosition) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastScrollPosition(currentScrollPosition);
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [lastScrollPosition]);

  return (
    <div className='w-full h-[60px] md:h-[80px] bg-blue-400'>
      <header className={`${hidden && 'header-hidden'} h-[60px] md:h-[80px] bg-blue-400 flex justify-center top-0 fixed w-full z-[1]`}>
        <Nav />
      </header>
    </div>
  )
}

export default Header