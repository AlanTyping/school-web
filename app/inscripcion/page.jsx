import React from 'react';
import Header from '../components/header/Header';
import Image from 'next/image';
import logo from './d.png'

const Inscription = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full relative'>
      <div className='w-full md:w-[50%] flex items-start'>
        <Image className='ml-4 h-[150px] w-[250px]' src={logo} />
      </div>
        
        

      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSdlbhhC6SVIJgc0RjAiGT2jmsQIum0OBz_vI-NP23u9pLIaRA/viewform?embedded=true"
        width="100%" height="900" frameborder="0" marginheight="0" marginwidth="0"
      >Cargando…</iframe>
    </div>
  )
}

export default Inscription