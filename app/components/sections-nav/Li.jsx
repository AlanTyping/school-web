'use client'

import { HashLink as Link } from 'react-router-hash-link';


const Li = ({ name, hash, active, setActive }) => {
  return (
    <li className='h-full w-full'>
      <Link onClick={() => setActive(hash)} to={`${hash}`} smooth
       className={ `h-full w-full flex justify-center items-center ${active === hash && 'bg-red-400'}`}>
        {name}
      </Link>
    </li>
  )
}

export default Li