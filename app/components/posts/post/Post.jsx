import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from './svg/school.svg'
import linkSvg from './svg/link.svg'
import { DM_Sans } from 'next/font/google'

const montserrat = DM_Sans({ subsets: ['latin'], weight: "300" });

export const Post = ({ fecha, titulo, descripcion, link, imagen }) => {
  return (
    <div className="w-[90%] flex flex-col p-6 pb-4 pt-8 items-center text-white bg-[#1a3275] my-5 rounded sm:max-w-[500px]">

      <div className="w-[95%] flex items-center flex-row mb-5">
        <div className="bg-[#001d3d] h-[50px] w-[50px] rounded-[25px] flex-center">
          <Image height={30} width={30} className="rounded" alt="" src={logo} />
        </div>
        <div className="ml-[10px] text-[1.2rem]">
          <h1>Colegio Trinity</h1>
        </div>
      </div>


      <div className="w-[90%]">
        {imagen && <div className="relative mb-6 h-[160px] w-full">
          <Image style={{ objectFit: "contain" }} fill={true} className="rounded" alt="" src={imagen} />
        </div>}

        {titulo && <div className={`my-1 text-[1.32rem]`}><h1>{titulo}</h1></div>}

        {descripcion && <div className={`my-5 text-[#eee] text-[1rem] ${montserrat.className}`}><p>{descripcion}</p></div>}

        {link && <div className={`text-[0.85rem] flex`}><Link className='flex bg-[#001d3d] rounded p-2 pr-4 flex-row items-center' href={link} target="blank"><Image src={linkSvg} alt='' height={30} width={30} />{link}</Link></div>}

        {fecha && <div className="mb-2 mt-6 justify-end flex text-[#ccc] text-[1rem]">
          <p className='border-b-[2px] border-b-[#ffa500]'>{fecha}</p>
          </div>}
      </div>

    </div>
  )
}


