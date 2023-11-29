import React from 'react';
import Header from '../components/header/Header';
import Image from 'next/image';
import logo from './d.png'

const Inscription = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
        <Image className='md:mr-[300px]' src={logo} width={600} />

      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSdlbhhC6SVIJgc0RjAiGT2jmsQIum0OBz_vI-NP23u9pLIaRA/viewform?embedded=true"
        width="640" height="585" frameborder="0" marginheight="0" marginwidth="0"
      >Cargando…</iframe>
    </div>
  )
}

export default Inscription