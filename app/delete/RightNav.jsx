import Image from 'next/image'
import arrow from './assets/arrow.svg'


export default function RightNav({onClick, disabled}) {
  return (
    <Image src={arrow} alt='' className='h-[80px] cursor-pointer w-[80px] top-[50%] z-[2] translate-y-[-50%] absolute right-0' onClick={onClick} />
  )
}
