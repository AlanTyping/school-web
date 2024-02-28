import React from 'react';
import { figtree } from '../../../../fonts/fonts';

export default function Years({ years, setSelectedYear }) {

  return (
    <div className='absolute top-0 w flex-center flex-col bg-[var(--lightBg)] max-h-[200px] overflow-y-auto rounded-b'>
      {years.map((y, i) => (
        <button onClick={() => setSelectedYear(y)} key={i} className={`mb-1 py-2 w text-center bg-white ${figtreeBold.className}`}>
          {y}
        </button>
      ))}
    </div>
  )
}
