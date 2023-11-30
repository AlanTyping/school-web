'use client'

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Nav = () => {

  return (
    <nav className='w-[50%] md:w-[20%] hidden md:mr-[5vw] h-full md:flex flex-row justify-end md:text-[1.1rem] rounded-xl 2xl:text-[1.5rem] absolute right-0'>
      <motion.ul initial={{ scale: 0 }} animate={{ scale: 1 }} className='flex flex-row justify-evenly text-white h-full w-full rounded-l-lg'>
        <motion.li whileHover={{ color: '#ffa500' }}
          className='h-full px-4'>
          <Link href='/inscripcion' className='h-full flex justify-center items-center'>
            inscripción
          </Link>
        </motion.li>
        <motion.li whileHover={{ color: '#ffa500' }}
          className='h-full px-4'>
          <Link href='/pagos' className='h-full flex justify-center items-center'>
            pagos
          </Link>
        </motion.li>
      </motion.ul>
    </nav>
  )
}

export default Nav