import React from 'react';
import Image from 'next/image';
import school from './assets/school.jpg'

const Section = () => {
  return (
    <div className='h-[720px] w-full flex items-center justify-center relative'>
      <Image
        className='brightness-[0.8] absolute top-0 z-[-1]'
        src={school}
        width={'100%'}
        height={'auto'}
        alt="Picture of the author" />
        <div className='p-6 w-[full] text-[1.7rem]'>
            <h1>Manolo school</h1>
        </div>
    </div>
  )
}

export default Section