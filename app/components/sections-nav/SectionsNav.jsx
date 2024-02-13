'use client'

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { scrollStorage } from '../../../zustand/scrollStorage';
import Li from './Li';
import school from './assets/school.svg';
import culture from './assets/culture.svg';
import history from './assets/history.svg';
import quotes from './assets/quotes.svg';


const li = [
  {
    image: school,
    hash: '#identity'
  },
  {
    image: culture,
    hash: '#culture'
  },
  {
    image: history,
    hash: '#history'
  },
  {
    image: quotes,
    hash: '#quotes'
  }
]

const SectionsNav = () => {
  const [navActive, setNavActive] = useState(false);
  const [active, setActive] = useState(0);
  const { scroll, changeScroll } = scrollStorage();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);

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
    if (width < 800) {
      if (scroll > 800 && scroll < 3880) {
        setNavActive(true);
      } else {
        setNavActive(false)
      }
    } else if (width < 1500) {
      if (scroll > 800 && scroll < 3300) {
        setNavActive(true);
      } else {
        setNavActive(false)
      }
    } else if (width < 5000) {
      if (scroll > 1300 && scroll < 4000) {
        setNavActive(true);
      } else {
        setNavActive(false)
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
      animate={navActive ? "visible" : "hidden"}
      exit={{ opacity: 0 }}
      variants={container}

      className={`h-[60px] w-[200px] bottom-[3%] rounded border-x-[2px] border-[#ffa500] bg-[#001d3d7e]
       z-[2] fixed md:left-6 md:h-[200px] md:w-[55px] 2xl:h-[300px] 2xl:w-[80px] md:top-[35%]`}>
      <ul className='flex flex-row md:flex-col justify-center text-white h-full w-full rounded-l-lg'>
        {li.map((e, i) => <Li image={e.image} hash={e.hash} active={active} key={e.hash} index={i} />)}
      </ul>
    </motion.nav>
  )
}

export default SectionsNav