'use client'

import { useState, useEffect } from "react"
import Link from "next/link";
import Image from "next/image";
import { figtreeBold, figtree, poppinsBold } from '../../../fonts/fonts'
import linkSvg from '../assets/link.svg';
import closeSvg from '../assets/close.svg';
import hour from '../assets/hour2.svg';
import BigImage from "../../../components/bigImage/BigImage";

export default function FullEvento({ eventos, closeDialog, i }) {
  const [currentIndex, setCurrentIndex] = useState(i);
  const [currentElement, setCurrentElement] = useState();
  const [leftDisable, setLeftDisable] = useState(false);
  const [rightDisable, setRightDisable] = useState(false);
  const [bigImage, setBigImage] = useState(false);

  useEffect(() => {
    const element = eventos[currentIndex];
    setCurrentElement(element);

    // if (currentIndex + 1 === eventos.length) {
    //   setRightDisable(true)
    // } else {
    //   setRightDisable(false)
    // }

    // if (currentIndex === 0) {
    //   setLeftDisable(true)
    // } else {
    //   setLeftDisable(false)
    // }

  }, [currentIndex])

  // const sumIndex = () => {
  //   setCurrentIndex((i) => i + 1)
  // }

  // const restIndex = () => {
  //   setCurrentIndex((i) => i - 1)
  // }

  if (currentElement) {
    const { fecha, titulo, descripcion, desde, hasta, lugar, link, categoria, turno, segmento, curso, imagen } = currentElement;

    return (
      <>
        {
          <>
            <div className="w flex justify-end">
              <Image src={closeSvg} alt="close" onClick={closeDialog} className="h-[22px] w-[22px]" />
            </div>

            <div className="w px-3">

              <div className={`w flex justify-start text-[var(--lightContrast)] ${figtreeBold.className}`}>
                <span className="text-[1.4rem] border-b-[2px] border-[var(--lightBorder)]">{fecha}</span>
              </div>

                {imagen && 
                <div className="relative h-[160px] sm:h-[180px] w-full mt-3">
                  <Image onClick={() => setBigImage(true)} className={`cursor-pointer rounded`} style={{ objectFit: "contain" }} quality={65} fill={true} sizes='30vw' alt="" src={imagen} />
                </div>}

                {titulo && 
                <div className={`text-[1.3rem] mt-4 leading-[23px] flex ${figtreeBold.className}`}>
                  <h1>{titulo}</h1>
                </div>}

                {desde &&
                  <div className={`w flex flex-row mt-1 items-center text-[0.85rem] text-[#6f8399] ${figtreeBold.className}`}>
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

              {descripcion && <div className={`max-h-[250px] overflow-y-auto  flex w-full mt-3 mb-2 justify-center text-[1rem] ${figtree.className}`}>
                <p>{descripcion}</p>
              </div>}

              {link.length > 5 &&
                <div className={`text-[0.85rem] mt-5 w-[97%] flex justify-start`}>
                  <Link className='flex truncate bg-[var(--bg)] text-white rounded mb-2 p-1 pr-4 flex-row items-center' href={link} target="blank">
                    <Image src={linkSvg} alt='' height={30} width={30} className='mr-[4px]' />
                    {link}
                  </Link>
                </div>}
            </div>
            {bigImage && <BigImage />}
          </>
        }
      </>
    )
  } else return <></>

}
