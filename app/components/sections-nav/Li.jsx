'use client'

// import { HashLink as Link } from 'react-router-hash-link';
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";


const Li = ({ image, hash, active, index }) => {
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
      <Link href={`${hash}`} className={`h-full w-full flex justify-center items-center `}>
        <Image src={image} alt="" className="h-[25px] w-[25px] 2xl:h-[35px] 2xl:w-[35px]" />
      </Link>
    </motion.li>
  )
}

export default Li