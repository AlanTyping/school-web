'use client'

import React from 'react';
import Link from 'next/link';
import Nav from './nav/Nav';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import logo from './m.png'
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
    <div className='w-full h-[60px] md:h-auto bg-[#001d3d]'>
      <header className={`${hidden && 'header-hidden'} h-[60px] md:h-[80px] 2xl:h-[110px] 2xl:text-[1.6rem] bg-[#001d3d] text-white flex justify-start top-0 fixed w-full z-[1]`}>
        <Link className='h-full flex items-center ml-10' href='/'>
          <Image src={logo} alt='school logo' className='h-[75%] w-[150px] min-h-[2px]' />
        </Link>
        <Nav />
      </header>
    </div>
  )
}

export default Header