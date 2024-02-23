'use client'


import { useRef, useState } from 'react';
import FullEvento from '../full-evento/FullEvento';

export default function Evento({ fecha, titulo, i, desde, hasta, descripcion, eventos }) {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef(null);

  const openDialog = () => {
    dialogRef.current.showModal();
    setIsOpen(true)
  };

  const closeDialog = () => {
    setIsOpen(false)
    dialogRef.current.close();
  };

  return (
    <div className="w flex flex-col items-start mb-2 p-2 text-[0.95rem]">
      <button onClick={() => openDialog()} className='font-bold text-[#004690] border-[#007bff] text-[1.1rem]'>{titulo}</button>

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
