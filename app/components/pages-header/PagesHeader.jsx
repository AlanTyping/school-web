'use client'

import Link from 'next/link';
import Image from 'next/image';
import logoWhite from './assets/student-white.svg';

export default function PagesHeader () {
  return (
    <header className={`h-[110px] border-b-[4px] border-[#004999] bg-[var(--bg)] md:h-[85px] 2xl:h-[110px] 2xl:text-[1.6rem] text-white flex justify-start relative w-full z-[1]`}>
      <Link className='h-full flex flex-col items-center relative ml-10 md:ml-[6vw]' href='/'>
        <div className='h-full w-full flex relative items-end justify-start mb-[-10px] 2xl:mb-[-17px]'>
          <Image src={logoWhite} alt='school logo' className='h-[30px] w-[30px] mb-[-3px]' />
        </div>
        <div className='h-full w-full flex items-center justify-center text-white text-[1.2rem] 2xl:text-[1.5rem]'>
          <h2>Tu logo escolar</h2>
        </div>
      </Link>
    </header>
  )
}
