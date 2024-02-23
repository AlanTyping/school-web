import Image from 'next/image'
import arrow from './assets/arrow.svg'


export default function LeftNav({onClick, disabled}) {
  return (
    <Image src={arrow} alt='' className='rotate-[180deg] cursor-pointer h-[80px] w-[80px] top-[50%] z-[2] translate-y-[-50%] absolute left-0' onClick={onClick} />
  )
}
