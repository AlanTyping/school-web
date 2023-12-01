'use client'

import Link from 'next/link';
import Image from 'next/image';
import school from './assets/school.jpg';
import { Carousel } from './carousel/Carousel';
import { GuideNav } from '@/app/components/guide-nav/GuideNav';
import arrow from './assets/arrow.svg';

const Presentation = () => {
  // const [photo, setPhoto] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setPhoto(prevPhoto => (prevPhoto === 4 ? 0 : prevPhoto + 1));
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);

  const slides = [
    school,
    school,
    school,
    school,
  ]

  return (
    // <div className='h-[auto] w-full flex items-center justify-center relative text-white'>
    //   <Image
    //     className='brightness-[0.4] z-[-1] w-full'
    //     src={school}
    //     alt="Picture of the author" />

    //     <div className='p-6 w-[full] text-[1.7rem] absolute'>
    //         <h1>{ photo }</h1>
    //     </div>
    // </div> 
    <div className='w-[100vw] md:h-[100vh] flex items-center justify-center relative text-white'>
      <Carousel autoSlide={true} >
        {[...slides.map((s, i) => (
          <Image key={i} src={s} alt='' className='brightness-[0.6] z-[-1] w-[150vw] sm:w-[100vw]' />
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