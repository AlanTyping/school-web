'use client'

// import { HashLink as Link } from 'react-router-hash-link';
import Link from "next/link";

const Li = ({ name, hash, active, index }) => {
  return (
    <li className='h-full w-full'>
      <Link href={`${hash}`} className={ `h-full w-full flex justify-center items-center ${active === (index + 1) && 'bg-[#001d3d]'}`}>
        {name}
      </Link>
    </li>
  )
}

export default Li