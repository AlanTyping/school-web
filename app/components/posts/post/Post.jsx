import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from './svg/school.svg'
import linkSvg from './svg/link.svg'
import { Poppins } from 'next/font/google'

const montserrat = Poppins({ subsets: ['latin'], weight: "300" });

export const Post = ({ fecha, titulo, descripcion, link, imagen }) => {
  return (
    <div className="w-[90%] flex flex-col max-w-[500px] pb-4 pt-8 min-w-[325px] items-center text-white bg-[#1a3275] my-5 rounded">

      <div className="w-[90%] flex items-center flex-row mb-5">
        <div className="bg-[#001d3d] h-[50px] w-[50px] rounded-[25px] flex-center">
          <Image height={30} width={30} className="rounded" alt="" src={logo} />
        </div>
        <div className="ml-[10px] text-[1.2rem]">
          <h1>Colegio Trinity</h1>
        </div>
      </div>


      <div className="w-[85%] flex flex-col flex-center">
        {imagen && <div className="relative mb-6 h-[160px] sm:h-[250px] w-full">
          <Image style={{ objectFit: "contain" }} quality={65} fill={true} sizes='50vw' className="rounded" alt="" src={imagen} />
        </div>}

        {titulo && <div className={`my-1 text-[1.5rem] text-[#eee] w-[97%]`}>
          <h1>{titulo}</h1>
        </div>}

        {descripcion && <div className={`mt-3 text-[#ddd] flex w-full justify-center text-[1rem] ${montserrat.className}`}>
          <p className='w-[97%]'>{descripcion}</p>
        </div>}

        {link && <div className={`text-[0.85rem] mt-5 w-[97%] flex justify-start`}>
          <Link className='flex bg-[#001d3d] rounded p-1 pr-4 flex-row items-center' href={link} target="blank"><Image src={linkSvg} alt='' height={30} width={30} className='mr-[4px]' />{link}</Link>
        </div>}

        {fecha && <div className="mb-2 mt-8 justify-end flex text-[#ccc] text-[1.05rem] w-[97%]">
          <p className='border-b-[2px] border-b-[#ffa500]'>{fecha}</p>
        </div>}
      </div>

    </div>
  )
}


