'use client'

import { useState, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom';
import { useRouter } from 'next/navigation';
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
  const [active, setActive] = useState(typeof window !== 'undefined' ? window.location.hash : null);

  const [windowWidth, setWindowWidth] = useState();

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <BrowserRouter>
      <nav className={windowWidth > 768 ?
        'fixed left-6 h-[200px] w-[60px] top-[50%] rounded bg-orange-400 z-[2]' :
        'fixed h-[60px] w-[200px] bottom-[5%] rounded bg-orange-400 z-[2]'}>

        <ul className={windowWidth > 768 ?
          'flex flex-col justify-center text-white h-full w-full rounded-l-lg'
          :
          'flex flex-row justify-center text-white h-full w-full rounded-l-lg'}>
          {li.map((e) => <Li name={e.name} hash={e.hash} active={active} setActive={setActive} key={e.hash} />)}
        </ul>
      </nav>
    </BrowserRouter>
  )
}

export default SectionsNav