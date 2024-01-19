import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from './svg/school.svg'
import linkSvg from './svg/link.svg'
import { Poppins, Figtree } from 'next/font/google'

const figtree = Figtree({ subsets: ['latin'], weight: "300" });
const poppinsBold = Poppins({ subsets: ['latin'], weight: "400" });
const figtreeBold = Figtree({ subsets: ['latin'], weight: "500" });


export const Post = ({ fecha, titulo, descripcion, link, imagen, i }) => {
  return (
    <div className={`${i > 2 && 'hidden'} overflow-y-auto mx-5 w-[80%] max-h-[300px] flex flex-col max-w-[400px] pb-4 pt-6 min-w-[325px] items-center text-white bg-[#1a3275] my-5 rounded`}>

      {
        <div className="w-[90%] flex items-center flex-row mb-5">
          <div className="bg-[var(--bg)] h-[50px] w-[50px] rounded-[25px] flex-center">
            <Image height={30} width={30} className="rounded" alt="" src={logo} />
          </div>
          <div className={`ml-[10px] text-[1.2rem] ${poppinsBold.className}`}>
            <h1>Colegio Trinity</h1>
          </div>
        </div>
      }



      {/* 
        <div className="flex flex-col flex-center w-full">
          {imagen && <div className="relative h-[150px] sm:h-[210px] w-full mb-1">
            <Image style={{ objectFit: "contain" }} quality={65} fill={true} sizes='50vw' className="rounded" alt="" src={imagen} />
          </div>}

          {fecha && <div className="justify-start flex text-[#ccc] text-[1rem] w-[97%]">
          <p className={`${figtree.className}`}>{fecha}</p>
        </div>}

          {titulo && <div className={`mb-5 text-[1.5rem] text-[#eee] flex w-[97%] ${figtreeBold.className}`}>
            <h1>{titulo}</h1>
          </div>}
        </div> */}

      <div className="w-[80%] flex flex-col flex-center">
        <div className="flex flex-col-reverse flex-center w-full">
          {imagen && <div className="relative h-[160px] sm:h-[210px] w-full mb-1">
            <Image style={{ objectFit: "contain" }} quality={65} fill={true} sizes='50vw' className="rounded" alt="" src={imagen} />
          </div>}

          {titulo && <div className={`mb-2 text-[1.5rem] text-[#eee] flex w-full ${figtreeBold.className}`}>
            <h1>{titulo}</h1>
          </div>}
        </div>


        {descripcion && <div className={`text-[#ddd] flex w-full mt-3 justify-center text-[1rem] ${figtree.className}`}>
          <p>{descripcion}</p>
        </div>}

        {link && <div className={`text-[0.85rem] mt-5 w-[97%] flex justify-start`}>
          <Link className='flex bg-[var(--bg)] rounded p-1 pr-4 flex-row items-center' href={link} target="blank"><Image src={linkSvg} alt='' height={30} width={30} className='mr-[4px]' />{link}</Link>
        </div>}


        {fecha && <div className="justify-end mt-4 flex text-[#ccc] text-[1rem] w-[97%]">
          <p className={`${figtree.className}`}>{fecha}</p>
        </div>}

      </div>

    </div>
  )
}


