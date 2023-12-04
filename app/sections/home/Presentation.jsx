'use client'

import Link from 'next/link';
import Image from 'next/image';
import school from './assets/fiumba.svg';
import { Carousel } from './carousel/Carousel';
import { GuideNav } from '@/app/components/guide-nav/GuideNav';
import arrow from './assets/arrow.svg';


const Presentation = () => {
  const slides = [
    school,
    school,
    school,
    school,
  ]

  return (
    <div className='w-[100%] h-[400px] md:h-[720px] flex items-center justify-center relative text-white'>
      <Carousel autoSlide={true} >
        {[...slides.map((s, i) => (
          <div className='flex flex-col items-center justify-center text-[#001d3d]'>

            <h2 className={`m-4 text-[1.5rem]`}>imágenes de fondo</h2>
            <Image key={i} src={s} alt='' className='brightness-[0.6] z-[-1] w-[95vw] md:w-[25vw] h-[200px]' />

          </div>
        ))]}
      </Carousel>

      <div className='hidden h-[200px] w-full md:flex flex-col absolute bottom-0 items-center '>
        <GuideNav />
      </div>

      <Link href={`#section-one`} className='hidden md:flex absolute bottom-[3vh]'>
        <Image src={arrow} alt='arrow' height={40} width={40} />
      </Link>
    </div>
  )
}

export default Presentation