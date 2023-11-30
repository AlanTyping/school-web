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
    hash: '#section-one'
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
  }
]

const SectionsNav = () => {
  const [active, setActive] = useState(0);
  const { scroll, changeScroll } = scrollStorage();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    // Suscripción al evento de cambio de tamaño
    window.addEventListener('resize', handleResize);

    // Limpieza del event listener en el desmontaje del componente
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  useEffect(() => {
    if (typeof window !== 'undefined') {
      setActive(window.location.hash)
    }
  }, []);

  useEffect(() => {
    if (width < 600) {
      if (scroll < 1500) {
        setActive(1)
      } else if (scroll < 1600) {
        setActive(2)
      } else if (scroll < 2300) {
        setActive(3)
      } else if (scroll < 2600) {
        setActive(4)
      }
    }

    if (width < 1400) {
      if (scroll < 600) {
        setActive(0)
      } else if (scroll < 1300) {
        setActive(1)
      } else if (scroll < 2000) {
        setActive(2)
      } else if (scroll < 2600) {
        setActive(3)
      } else if (scroll < 3100) {
        setActive(4)
      }
    }

  }, [scroll]);

  const container = {
    hidden: { opacity: 0, scaleX: 0 },
    visible: {
      opacity: 1,
      scaleX: 1
    }
  }

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={container}
      className={` h-[60px] w-[200px] bottom-[5%] rounded border-x-[2px] border-[#ffa500] bg-[#001d3d7e] z-[2] fixed md:left-6 md:h-[200px] md:w-[55px] md:top-[35%]`}>
      <ul className='flex flex-row md:flex-col justify-center text-white h-full w-full rounded-l-lg'>
        {li.map((e, i) => <Li name={e.name} hash={e.hash} active={active} key={e.hash} index={i} />)}
      </ul>
    </motion.nav>
  )
}

export default SectionsNav