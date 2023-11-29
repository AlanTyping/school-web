import React from 'react';
import Link from 'next/link';

const Nav = () => {

  return (
      <nav className='w-[50%] md:w-[25%] h-full flex flex-row justify-end md:text-[1.1rem] 2xl:text-[1.5rem] absolute right-0'>
        <ul className='flex flex-row justify-evenly text-white h-full w-full rounded-l-lg'>
          <li className='h-full px-4'>
            <Link href='/inscripcion' className='h-full flex justify-center items-center'>
              inscripción
            </Link>
          </li>
          <li className='h-full px-4'>
            <Link href='/pagos' className='h-full flex justify-center items-center'>
              pagos
            </Link>
          </li>
        </ul>
      </nav>
  )
}

export default Nav