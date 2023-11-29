import React from 'react';
import Header from '../components/header/Header';
import Image from 'next/image';
import logo from './d.png'

const Inscription = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full relative'>
      <div className='w-full md:w-[50%] 2xl:w-[33%] flex items-start'>
        <Image className='ml-4 h-[150px] w-[250px]' alt='school-logo' src={logo} />
      </div>
        
        

      <iframe
        className='w-[100%] md:w-[50%]'
        src="https://docs.google.com/forms/d/e/1FAIpQLSdlbhhC6SVIJgc0RjAiGT2jmsQIum0OBz_vI-NP23u9pLIaRA/viewform?embedded=true"
        height="900"
      >Cargando…</iframe>
    </div>
  )
}

export default Inscription