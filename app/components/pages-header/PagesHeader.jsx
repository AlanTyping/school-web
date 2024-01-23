'use client'

import Link from 'next/link';
import Image from 'next/image';
import logoWhite from './assets/student-white.svg';

export default function PagesHeader () {
  return (
    <header className={`bg-[var(--bg)] h-[85px] 2xl:h-[110px] 2xl:text-[1.6rem] text-white flex items-center justify-start relative w-full z-[1]`}>
      <Link className='flex flex-col items-start relative ml-10 md:ml-[6vw]' href='/'>
          <Image src={logoWhite} alt='school logo' className='h-[30px] w-[30px] mb-[-3px]' />
          <h2 className='text-[1.2rem] 2xl:text-[1.5rem]'>Logo escolar</h2>
      </Link>
    </header>
  )
}
