'use client'

import React, { useRef, useState } from 'react';
import FullEvento from '../components/FullEvento';

export default function Evento({ fecha, titulo, i, descripcion, eventos }) {
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
    <div className="w-[90%] h-[100px] flex flex-col items-start m-2 p-2 text-[0.95rem]">
      <span>{fecha}</span>
      <button onClick={() => openDialog()} className='font-bold text-[1.1rem]'>{titulo}</button>

      <dialog ref={dialogRef} className={`${isOpen && 'p-10 rounded bg-slate-300 flex flex-col event-modal'}`}>
        {isOpen && <FullEvento closeDialog={closeDialog} i={i} eventos={eventos} />}
      </dialog>
    </div>
    // <div className="w-[90%] h-[100px] flex flex-col items-start m-2 p-2 text-[0.95rem]">
    //   <span>20:00hs - 21:00hs</span>
    //   <span>{fecha}</span>
    //   <button className='font-bold text-[1.1rem]'>{titulo}</button>
    // </div>
  )
}
