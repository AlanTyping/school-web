'use client'

import { useState, useEffect } from "react"
import Link from "next/link";
import Image from "next/image";
import { figtreeBold, figtree } from '../../../fonts/fonts'
import linkSvg from '../assets/link.svg';
import closeSvg from '../assets/close.svg';

export default function FullEvento({ eventos, closeDialog, i }) {
  const [currentIndex, setCurrentIndex] = useState(i);
  const [currentElement, setCurrentElement] = useState();
  const [leftDisable, setLeftDisable] = useState(false);
  const [rightDisable, setRightDisable] = useState(false);

  useEffect(() => {
    const element = eventos[currentIndex];
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
    const { fecha, titulo, descripcion, desde, hasta, lugar, link, categoria, turno, segmento, curso, imagen } = currentElement;

    return (
      <>
        {
          <>
            <div className="w flex justify-end">
              <Image src={closeSvg} alt="close" onClick={closeDialog} className="h-[25px] w-[25px]" />
            </div>
            <span>{fecha}</span>
            <div className="flex flex-col-reverse flex-center w-full">
              {imagen && <div className="relative h-[160px] sm:h-[180px] w-full mt-3">
                <Image onClick={() => setBigImage(true)} className={`cursor-pointer rounded`} style={{ objectFit: "contain" }} quality={65} fill={true} sizes='30vw' alt="" src={imagen} />
              </div>}

              {titulo && <div className={`text-[1.5rem] mt-4 flex w-full ${figtreeBold.className}`}>
                <h1 className="border-b-[2px] border-blue-400">{titulo}</h1>
              </div>}
            </div>

            {descripcion && <div className={`max-h-[300px] overflow-y-auto  flex w-full mt-3 mb-2 justify-center text-[1rem] ${figtree.className}`}>
              <p>{descripcion}</p>
            </div>}

            {link.length > 5 &&
              <div className={`text-[0.85rem] mt-5 w-[97%] flex justify-start`}>
                <Link className='flex bg-[var(--bg)] rounded mb-2 p-1 pr-4 flex-row items-center' href={link} target="blank">
                  <Image src={linkSvg} alt='' height={30} width={30} className='mr-[4px]' />
                  {link}
                </Link>
              </div>}
            <div className="mt-8">
              {!rightDisable && <button onClick={() => sumIndex()} className="h-[50px] w-[50px] bg-blue-300 flex-center rounded cursor-pointer absolute right-0 bottom-0">next</button>}
              {!leftDisable && <button onClick={() => restIndex()} disabled={leftDisable} className="h-[50px] w-[50px] bg-blue-300 flex-center rounded cursor-pointer absolute left-0 bottom-0">prev</button>}
            </div>

            {/* {eventos.map(e => <div>{e.titulo}</div>)} */}
          </>
        }
      </>
    )
  } else return <></>

}
