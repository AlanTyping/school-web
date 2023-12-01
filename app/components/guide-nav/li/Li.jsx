'use client'

// import { HashLink as Link } from 'react-router-hash-link';
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";



const Li = ({ name, hash, index, img }) => {
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
      // initial="hidden"
      // animate="visible"
      // variants={variants}
      className='h-[100px] w-[140px] m-4 mx-8 rounded bg-[#001d3dd3] flex items-center justify-center'>
      <Link href={`${hash}`} className={`h-full w-full flex justify-center items-center flex-col`}>
      <Image src={img} alt={`${name}`} height={40} width={40} />
        {name}
      </Link>
    </motion.li>
  )
}

export default Li