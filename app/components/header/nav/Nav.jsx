import React from 'react';
import Link from 'next/link';

const Nav = () => {

  return (
      <nav className='w-full h-full relative flex flex-row justify-end'>
        <ul className='flex flex-row justify-center text-white h-full w-[50%] md:w-[30%] bg-blue-900 rounded-l-lg'>
          <li className='h-full px-4'>
            <Link href='/inscripcion' className='h-full flex justify-center items-center'>
              inscripcion
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