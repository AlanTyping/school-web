'use client'

import React from 'react';
import Link from 'next/link';
import Nav from '../header/nav/Nav';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import logo from './school-logo.png'
import './dynamicHeader.css';

const DynamicHeader = () => {
  const [hidden, setHidden] = useState(true);
  const [lastScrollPosition, setLastScrollPosition] = useState();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
        if (currentScrollPosition < lastScrollPosition) {
          setHidden(true);
        } else {
          if (currentScrollPosition > 400) {
            setHidden(false);
          }
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
    <header className={`${hidden && 'header-hidden'} h-[70px] border-b-[4px] border-[#004999] md:h-[80px] 2xl:h-[110px] 2xl:text-[1.6rem] bg-[#001d3d] text-white flex justify-start top-0 fixed w-full z-[1]`}>
      <Link className='h-full flex items-center ml-10' href='/'>
        <Image src={logo} alt='school logo' className='h-[75%] w-[110px] md:w-[130px] min-h-[2px]' />
      </Link>
      <Nav />
    </header>
  )
}

export default DynamicHeader