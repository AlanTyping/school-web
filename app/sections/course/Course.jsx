import React from 'react';

export const Course = () => {
  return (
    <section id='info' className='flex-col flex-center text-white w-[90%] sm:w-[80%] px-7 sm:px-24 py-10'>
      <div className='w-full flex-center'>
        <h2 className='text-[2rem] 2xl:text-[2.5rem]'>Info cursada</h2>
      </div>

      <ul className='mt-6 w-full 2xl:text-[1.4rem]'>
        <li className='py-4 list-disc'>Mesas de exámenes</li>
        <li className='py-4 list-disc'>Horarios del personal</li>
        <li className='py-4 list-disc'>Cronogramas</li>
      </ul>
    </section>
  )
}
