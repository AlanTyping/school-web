'use client'

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { scrollStorage } from '@/zustand/scrollStorage';
// import { BrowserRouter } from 'react-router-dom';
// import { useRouter } from 'next/navigation';
import Li from './Li';

const li = [
  {
    name: '1',
    hash: '#section'
  },
  {
    name: '2',
    hash: '#section-two'
  },
  {
    name: '3',
    hash: '#section-three'
  },
  {
    name: '4',
    hash: '#section-four'
  },
]

const SectionsNav = () => {
  const [active, setActive] = useState(1);
  const { scroll, changeScroll } = scrollStorage();


  useEffect(() => {
    if (typeof window !== 'undefined') {
      setActive(window.location.hash)
    }
  }, []);

  useEffect(() => {
    if (scroll < 600) {
      setActive(1)
    } else if (scroll < 1300) {
      setActive(2)
    } else if (scroll < 2000) {
      setActive(3)
    } else if (scroll < 2600) {
      setActive(4)
    } 
  }, [scroll])

  return (
    <motion.nav /* initial={{ scale: 0, x: -50 }} animate={{ scale: 1, x: 0 }}*/
      className={` h-[60px] w-[200px] bottom-[5%] rounded border-x-[2px] border-[#ffa500] bg-[#001d3d7e] z-[2] fixed md:left-6 md:h-[200px] md:w-[60px] md:top-[35%]`}>
      <ul className='flex flex-row md:flex-col justify-center text-white h-full w-full rounded-l-lg'>
        {li.map((e, i) => <Li name={e.name} hash={e.hash} active={active} key={e.hash} index={i} />)}
      </ul> 
    </motion.nav>
  )
}

export default SectionsNav