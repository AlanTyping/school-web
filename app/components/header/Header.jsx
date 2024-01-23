'use client'

import Link from 'next/link';
import Image from 'next/image';
import logo from './assets/student.svg';
import logoWhite from './assets/student-white.svg';

const Header = () => {
  return (
    <header className={`h-[110px] items-center border-b-[8px] border-[#004999] bg-[var(--bg)] md:bg-[#e4e4e4] md:border-none md:h-[85px] md:border-b-[4px] 2xl:h-[110px] 2xl:text-[1.6rem] md:absolute md:top-0 text-white flex justify-start relative w-full z-[1]`}>
      
      <Link className='flex flex-col items-start relative ml-10 md:ml-[6vw]' href='/'>
          <Image src={logo} alt='school logo' className='hidden md:flex h-[30px] w-[30px] 2xl:h-[45px] 2xl:w-[45px]' />
          <Image src={logoWhite} alt='school logo' className='md:hidden h-[30px] w-[30px] mb-[-3px]' />
          <h2 className='text-white md:text-[var(--bg)] text-[1.2rem] 2xl:text-[1.5rem]'>Logo escolar</h2>
      </Link>
    </header>
  )
}

export default Header