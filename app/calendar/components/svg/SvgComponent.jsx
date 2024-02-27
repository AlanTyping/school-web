import { motion } from 'framer-motion';
import calendar from '../assets/calendar.svg';
import Image from 'next/image';

const icon = {
  hidden: { pathLength: 0, opacity: 0, },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: { duration: 2, ease: 'easeInOut' }
  }
}

const SvgComponent = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    className="h-[60px] w-[60px] lg:h-[6vw] lg:w-[6vw]"
  >
     <motion.circle
          fill="#bfdbfe"
          cx="254.644"
          cy="254.644"
          r="254.644"
          variants={icon}
          initial="hidden"
          animate="visible"
        />
        <motion.rect
          fill="#F1F3F7"
          x="51.539"
          y="96.975"
          width="406.548"
          height="353.314"
          variants={icon}
          initial="hidden"
          animate="visible"
        />
        <motion.rect
          fill="#60a5fa"
          x="51.539"
          y="96.975"
          width="406.548"
          height="96.297"
          variants={icon}
          initial="hidden"
          animate="visible"
        />
        <motion.rect
          fill="#aaaaaa"
          x="222.771"
          y="235.317"
          width="64.085"
          height="59.677"
          variants={icon}
          initial="hidden"
          animate="visible"
        />
        <motion.rect
          fill="#aaaaaa"
          x="332.63"
          y="235.317"
          width="64.085"
          height="59.677"
          variants={icon}
          initial="hidden"
          animate="visible"
        />
        <motion.rect
          fill="#aaaaaa"
          x="112.911"
          y="335.004"
          width="64.085"
          height="59.677"
          variants={icon}
          initial="hidden"
          animate="visible"
        />
        <motion.rect
          fill="#aaaaaa"
          x="222.771"
          y="335.004"
          width="64.085"
          height="59.677"
          variants={icon}
          initial="hidden"
          animate="visible"
        />
        <motion.rect
          fill="#414753"
          x="120.032"
          y="128.509"
          width="72.223"
          height="16.615"
          variants={icon}
          initial="hidden"
          animate="visible"
        />
        <motion.rect
          fill="#004690"
          x="140.376"
          y="58.999"
          width="31.195"
          height="77.648"
          variants={icon}
          initial="hidden"
          animate="visible"
        />
        <motion.rect
          fill="#414753"
          x="317.033"
          y="128.509"
          width="72.223"
          height="16.615"
          variants={icon}
          initial="hidden"
          animate="visible"
        />
        <motion.rect
          fill="#004690"
          x="337.717"
          y="58.999"
          width="31.195"
          height="77.648"
          variants={icon}
          initial="hidden"
          animate="visible"
        />
  </svg>
)
export default SvgComponent
