import { useState, useEffect } from 'react';
import Image from 'next/image';
import arrow from './assets/arrow.svg';

export const TestimoniosCarousel = ({ children: slides, autoSlide = false, autoSlideInterval = 10000 }) => {
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
    <div className='overflow-hidden relative w-[85vw] md:w-[40vw]'>

      <div className='flex transition-transform ease-out-in duration-700 text-[0.95rem]' style={{ transform: transformValue }}>
        {slides}
      </div>

      <div className="absolute bottom-[-10px] w-full 2xl:mb-2 flex items-center justify-between p-4">
        <button onClick={prev} className='p-1 rounded-full shadow bg-[#2563eb]'>
          <Image src={arrow} height={30} width={30} alt='' className='rotate-90 2xl:ml-14' />
        </button>

        <button onClick={next} className='p-1 rounded-full shadow bg-[#2563eb]'>
          <Image src={arrow} height={30} width={30} alt='' className='rotate-[270deg] 2xl:mr-14' />
        </button>
      </div>

      <div className='absolute bottom-4 right-0 left-0'>
        <div className='flex items-center justify-center gap-2'>
          {slides.map((s, i) => (
            <div key={i} className={`transition-all w-1.5 h-1.5 bg-white rounded-full  ${curr === i ? "p-0.5" : "bg-opacity-50"}`} />
          ))}
        </div>
      </div>
    </div>
  )
}
