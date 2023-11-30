'use client'

// import { HashLink as Link } from 'react-router-hash-link';
import Link from "next/link";
import { motion } from "framer-motion";



const Li = ({ name, hash, active, index }) => {
  const variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: ((index * 0.1) + 0.4),
      }
    }
  }

  return (
    <motion.li
      initial="hidden"
      animate="visible"
      variants={variants}
      className='h-full w-full'>
      <Link href={`${hash}`} className={`h-full w-full flex justify-center items-center ${active === (index + 1) && 'bg-[#001d3d9f]'}`}>
        {name}
      </Link>
    </motion.li>
  )
}

export default Li