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
        delay: ((index * 0.1) + 0.1),
      }
    }
  }

  return (
    <motion.li
      initial="hidden"
      animate="visible"
      variants={variants}
      className='h-[23vw] w-[26vw] sm:h-[110px] sm:w-[150px] 2xl:h-[150px] 2xl:w-[210px] m-2 sm:m-4 sm:mx-8 rounded bg-[#001d3d] flex items-center justify-center'>

      <Link href={`${hash}`} className={`h-full w-full p-6 flex justify-center items-center flex-col 2xl:text-[1.4rem]`}>
      <Image src={img} alt={`${name}`} className="h-[40px] w-[40px] 2xl:h-[55px] 2xl:w-[55px] mb-1 2xl:mb-2" />
        {name}
      </Link>
      
    </motion.li>
  )
}

export default Li