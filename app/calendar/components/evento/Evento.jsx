'use client'


import { useRef, useState } from 'react';
import FullEvento from '../full-evento/FullEvento';
import { figtree, figtreeBold, poppinsBold } from '../../../fonts/fonts';
import categorias from '../../categorias';

export default function Evento({ fecha, titulo, i, desde, hasta, descripcion, eventos, categoria }) {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef(null);
  let categoriaColor = '';

  if (categoria) {
    categoriaColor = categorias.filter(c => {
      if (c.categoria === categoria) {
        return c.borde
      }
    })
  }

  console.log(categoriaColor);

  const openDialog = () => {
    dialogRef.current.showModal();
    setIsOpen(true)
  };

  const closeDialog = () => {
    setIsOpen(false)
    dialogRef.current.close();
  };

  return (
    <div className="w flex flex-col items-start mb-2 text-[0.95rem]">
      {titulo &&
        <>
          <div className="w flex flex-row">
            <button onClick={() => openDialog()} className='font-bold text-[var(--lightContrast)] text-[1rem]'>{titulo}</button>
          </div>
          {/* <div className="w flex justify-start">
            <div className={`bg-[var(--bg)] flex-center flex-row rounded py-1 my-1 pr-2 relative`}>
              <div className="flex-center w-[25px]">
                <div className={`border-[var(--noClases)] w-[10px] h-[10px] md:h-[12px] md:w-[12px] rounded-[50%] border-[2px]`} />
              </div>
              <div className="relative flex-center">
                <span className={`text-[0.8rem] text-white ${figtree.className}`}>día sin clases</span>
              </div>
            </div>
          </div> */}
        </>
      }



      {desde &&
        <div className="w flex flex-row">
          <span>{desde}</span>
          {hasta &&
            <>
              <span className='mx-2'>-</span>
              <span>{hasta}</span>
            </>
          }
        </div>
      }

      <dialog ref={dialogRef} className={`${isOpen && 'p-10 rounded justify-start bg-white flex flex-col event-modal'}`}>
        {isOpen && <FullEvento closeDialog={closeDialog} i={i} eventos={eventos} />}
      </dialog>
    </div>
  )
}
