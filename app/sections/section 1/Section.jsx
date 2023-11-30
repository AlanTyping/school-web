import React from 'react';
import Image from 'next/image';
import school from './assets/school.jpg'

const Section = () => {
  return (
    <div className='h-[auto] w-full flex items-center justify-center relative text-white'>
      <Image
        className='brightness-[0.4] z-[-1] w-full'
        src={school}
        alt="Picture of the author" />

        <div className='p-6 w-[full] text-[1.7rem] absolute'>
            <h1>School basics</h1>
        </div>
    </div>
  )
}

export default Section