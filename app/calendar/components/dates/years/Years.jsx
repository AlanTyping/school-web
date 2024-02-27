import React from 'react';
import { figtreeBold } from '@/app/fonts/fonts';

export default function Years({ years, setSelectedYear }) {

  return (
    <div className='absolute top-0 w flex-center flex-col bg-[var(--lightBg)] rounded-b'>
      {years.map((y, i) => (
        <button onClick={() => setSelectedYear(y)} key={i} className={`mb-1 py-1 w text-center bg-white ${figtreeBold.className}`}>
          {y}
        </button>
      ))}
    </div>
  )
}
