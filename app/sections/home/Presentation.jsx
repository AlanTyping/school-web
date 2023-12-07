'use client'

import Link from 'next/link';
import Image from 'next/image';
import school from './assets/fiumba.svg';
import { Carousel } from './carousel/Carousel';
import { GuideNav } from '@/app/components/guide-nav/GuideNav';
import arrow from './assets/blue-arrow.svg';


const Presentation = () => {
  const slides = [
    school,
    school,
    school,
    school,
  ]

  return (
    <div className='w-[100%] h-[500px] md:h-[100vh] md:min-h-[550px] 2xl:min-h-[700px] flex items-center bg-white justify-center relative text-white'>
      <Carousel autoSlide={true} >
        {[...slides.map((s, i) => (
          <div key={i} className='flex flex-col items-center justify-center text-[#001d3d]'>

            <h2 className={`m-4 text-[1.5rem] 2xl:text-[2rem]`}>imágenes de fondo</h2>
            <Image src={s} alt='' className='brightness-[0.6] z-[-1] w-[95vw] md:w-[25vw] h-[200px] 2xl:h-[300px]' />

          </div>
        ))]}
      </Carousel>

      <div className='w-full md:flex flex-col absolute bottom-[40px] 2xl:bottom-[80px] items-center '>
        <GuideNav />
      </div>

      <Link href={`#info`} className='hidden md:flex absolute bottom-[10px] 2xl:bottom-[20px]'>
        <Image src={arrow} alt='arrow' className='h-[40px] w-[40px] 2xl:h-[60px] 2xl:w-[60px]' />
      </Link>
    </div>
  )
}

export default Presentation