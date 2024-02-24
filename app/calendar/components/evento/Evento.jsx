'use client'

import { useRef, useState } from 'react';
import FullEvento from '../full-evento/FullEvento';
import { figtree, figtreeBold, poppinsBold } from '../../../fonts/fonts';
import categorias from '../../categorias';
import Image from 'next/image';
import hour from '../assets/hour2.svg'
 
export default function Evento({ fecha, titulo, i, desde, hasta, descripcion, eventos, categoria }) {  
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef(null);
  let categoriaColor = '';


  if (categoria) {
    categorias.forEach(c => {
      if (c.categoria.replace(/\s+/g, '') === categoria) {
        categoriaColor = c.bg;
        return;
      }
    });
  }

  const openDialog = () => {
    dialogRef.current.showModal();
    setIsOpen(true)
  };

  const closeDialog = () => {
    setIsOpen(false)
    dialogRef.current.close();
  };

  return (
    <div className="w flex flex-col relative items-start mb-4 pl-4 text-[0.95rem]">
       <div className={`inset-y-0 absolute left-0 w-[4px] rounded ${categoriaColor && `${categoriaColor}`}`} />
      {titulo &&
        <>
          <div className="w flex flex-row">
            <button onClick={() => openDialog()} className={`font-bold text-[var(--lightContrast)] text-[1rem]`}>{titulo}</button>
          </div>
        </>
      }



      {desde &&
        <div className={`w flex flex-row items-center text-[0.85rem] text-[#6f8399] ${figtreeBold.className}`}>
          <Image src={hour} alt='watch' className={`h-[15px] w-[15px] mr-2`} />
          <span>{desde}</span>
          {hasta &&
            <>
              <span className='mx-2'>-</span>
              <span>{hasta}</span>
            </>
          }
        </div>
      }

      <dialog ref={dialogRef} className={`${isOpen && 'p-4 rounded justify-start bg-white flex flex-col event-modal'}`}>
        {isOpen && <FullEvento closeDialog={closeDialog} i={i} eventos={eventos} />}
      </dialog>
    </div>
  )
}
