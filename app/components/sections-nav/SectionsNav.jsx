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
  const [active, setActive] = useState('asd');
  const [windowWidth, setWindowWidth] = useState(123);

  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     setActive(window.location.hash)
  //   }
  // }, []);


  return (
    <BrowserRouter>
      <nav className='h-[60px] w-[200px] bottom-[5%] rounded bg-orange-400 z-[2] fixed md:left-6 md:h-[200px] md:w-[60px] md:top-[50%]'>
        <ul className='flex flex-row md:flex-col justify-center text-white h-full w-full rounded-l-lg'>
          {li.map((e) => <Li name={e.name} hash={e.hash} active={active} setActive={setActive} key={e.hash} />)}
        </ul>
      </nav>
    </BrowserRouter>
  )
}

export default SectionsNav