import { useState, useEffect } from 'react';
import Image from 'next/image';
import arrow from './assets/blue-arrow.svg';

export const CultureCarousel = ({ children: slides, autoSlide = false, autoSlideInterval = 10000 }) => {
  const [curr, setCurr] = useState(0);
  const [transformValue, setTransformValue] = useState(`translateX(-${curr * 100}%)`);

  const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return
    const slideInterval = setInterval(next, autoSlideInterval)
    return () => clearInterval(slideInterval)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setTransformValue(`translateX(-${curr * 100}%)`);
      } else {
        setTransformValue(`translateX(-${curr * 100}%)`);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [curr]);

  return (
    <>

      <button onClick={prev} className='p-1 hidden md:flex rounded-full shadow absolute left-[20px] md:left-[80px]'>
        <Image src={arrow} height={50} width={50} alt='evento' className='rotate-90' />
      </button>

      <div className='overflow-hidden relative w-[75vw] md:w-[50vw] pb-16'>

        <div className='flex transition-transform ease-out-in duration-700 text-[0.95rem]' style={{ transform: transformValue }}>
          {slides}
        </div>

        <div className='absolute bottom-4 right-0 left-0'>
          <div className='flex items-center justify-center gap-2'>
            {slides.map((s, i) => (
              <div key={i} className={`transition-all w-1.5 h-1.5 bg-white rounded-full  ${curr === i ? "p-0.5" : "bg-opacity-50"}`} />
            ))}
          </div>
        </div>

        <div className="absolute md:hidden bottom-[-25px] w-full flex items-center justify-between p-4">
          <button onClick={prev}>
            <Image src={arrow} height={50} width={50} alt='' className='rotate-90' />
          </button>
          <button onClick={next}>
            <Image src={arrow} height={50} width={50} alt='' className='rotate-[270deg]' />
          </button>
        </div>
      </div>

      <button onClick={next} className='p-1 hidden md:flex rounded-full shadow absolute right-[20px] md:right-[80px]'>
        <Image src={arrow} height={50} width={50} alt='' className='rotate-[270deg]' />
      </button>
    </>



  )
}
