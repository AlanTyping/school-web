'use client'

import { motion, usetScroll, useTransform, useScroll } from 'framer-motion';
import Link from 'next/link';
import Nav from '../header/nav/Nav';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import logo from './school-logo.png'
import './dynamicHeader.css';
import { scrollStorage } from '@/zustand/scrollStorage';

const DynamicHeader = () => {
  const [hidden, setHidden] = useState(true);
  const { scroll, changeScroll } = scrollStorage();

  useEffect(() => {

    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
        if (currentScrollPosition > scroll) {
          setHidden(true);
        } else {
          if (currentScrollPosition > 400) {
            setHidden(false);
          }
        }
        changeScroll(currentScrollPosition);
      }

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);


      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }

  }, [scroll]);

  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

  return (
    <motion.header className={`${hidden && 'header-hidden'} h-[70px] border-b-[4px] border-[#004999] md:h-[80px] 2xl:h-[110px] 2xl:text-[1.6rem] bg-[#001d3d] text-white flex justify-start top-0 fixed w-full z-[12]`}>
      <Link className='h-full flex items-center ml-10 md:ml-[6vw]' href='/'>
        <Image src={logo} alt='school logo' className='h-[75%] w-[110px] md:w-[140px] min-h-[2px]' />
      </Link>
      <Nav />
    </motion.header>
  )
}

export default DynamicHeader