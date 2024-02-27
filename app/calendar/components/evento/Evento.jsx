'use client'

import { useRef, useState } from 'react';
import FullEvento from '../full-evento/FullEvento';
import { figtree, figtreeBold, poppinsBold } from '../../../fonts/fonts';
import categorias from '../../categorias';
import Image from 'next/image';
import hour from '../assets/hour.svg'
import location from '../assets/location.svg'

export default function Evento({ fecha, titulo, i, desde, hasta, descripcion, eventos, categoria, lugar }) {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef(null);
  let categoriaStyle = '';


  if (categoria) {
    categorias.forEach(c => {
      if (c.categoria.replace(/\s+/g, '') === categoria) {
        categoriaStyle = c;
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
      <div className={`inset-y-0 absolute left-0 w-[4px] rounded ${categoriaStyle && `${categoriaStyle.bg}`}`} />
      {titulo &&
        <>
          <div className="w flex flex-row">
            <button onClick={() => openDialog()} className={`${categoriaStyle ? `${categoriaStyle.texto}` : 'text-[var(--lightContrast)]'} font-bold  truncate text-[1rem]`}>{titulo}</button>
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

      {lugar &&
        <div className={`w flex flex-row items-center text-[0.85rem] text-[#6f8399] ${figtreeBold.className}`}>
          <Image src={location} alt='' className={`h-[15px] w-[15px] mr-2`} />
          <span>{lugar}</span>
        </div>
      }

      <dialog ref={dialogRef} className={`${isOpen && 'p-4 rounded justify-start bg-white flex flex-col event-modal'}`}>
        {isOpen && <FullEvento closeDialog={closeDialog} i={i} eventos={eventos} />}
      </dialog>
    </div>
  )
}
