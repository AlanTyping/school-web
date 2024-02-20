'use client'

import { useState, useEffect } from "react"

export default function FullEvento({ eventos, closeDialog, i }) {
  const [currentIndex, setCurrentIndex] = useState(i);
  const [currentElement, setCurrentElement] = useState();
  const [leftDisable, setLeftDisable] = useState(false);
  const [rightDisable, setRightDisable] = useState(false);

  useEffect(() => {
    const element = eventos.filter((e, i) => i === currentIndex)[0];
    setCurrentElement(element);

    if (currentIndex + 1 === eventos.length) {
      setRightDisable(true)
    } else {
      setRightDisable(false)
    }
    
    if (currentIndex === 0) {
      setLeftDisable(true)
    } else {
      setLeftDisable(false)
    }

  }, [currentIndex])

  const sumIndex = () => {
    setCurrentIndex((i) => i + 1)
  }

  const restIndex = () => {
    setCurrentIndex((i) => i - 1)
  }

  if (currentElement) {
    const {fecha, descripcion, titulo} = currentElement;

    return (
      <>
        {
          <>
           {!rightDisable && <button onClick={() => sumIndex()} className="h-[50px] w-[50px] bg-blue-300 flex-center rounded cursor-pointer absolute right-0">next</button>}
            {!leftDisable && <button onClick={() => restIndex()} disabled={leftDisable} className="h-[50px] w-[50px] bg-blue-300 flex-center rounded cursor-pointer absolute left-0">prev</button>}
            <button onClick={closeDialog}>Close</button>
            <span>{fecha}</span>
            <button className='font-bold text-[1.1rem]'>{titulo}</button>
            {descripcion && <p>{descripcion}</p>}
            {/* {eventos.map(e => <div>{e.titulo}</div>)} */}
          </>
        }
      </>
    )
  } else return <></>

}
