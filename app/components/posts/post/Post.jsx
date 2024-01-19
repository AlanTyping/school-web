import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from './svg/school.svg'
import linkSvg from './svg/link.svg'
import { Poppins, Figtree } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: "300" });
const figtree = Figtree({ subsets: ['latin'], weight: "300" });
const figtreeBold = Figtree({ subsets: ['latin'], weight: "600" });


export const Post = ({ fecha, titulo, descripcion, link, imagen, i }) => {
  return (
    <div className={`${i > 2 && ''} mx-5 w-[80%] h-auto flex flex-col max-w-[400px] pb-4 pt-8 min-w-[325px] items-center text-white bg-[#1a3275] my-5 rounded`}>

      {
        i > 2 &&
        <div className="w-[90%] flex items-center flex-row mb-5">
          <div className="bg-[#001d3d] h-[50px] w-[50px] rounded-[25px] flex-center">
            <Image height={30} width={30} className="rounded" alt="" src={logo} />
          </div>
          <div className="ml-[10px] text-[1.2rem]">
            <h1>Colegio Trinity</h1>
          </div>
        </div>
      }



      <div className="w-[90%] flex flex-col flex-center">
        <div className="flex flex-col flex-center w-full">
          {imagen && <div className="relative h-[150px] sm:h-[250px] w-full">
            <Image style={{ objectFit: "contain" }} quality={65} fill={true} sizes='50vw' className="rounded" alt="" src={imagen} />
          </div>}

          {titulo && <div className={`my-5 text-[1.5rem] text-[#eee] flex w-[97%] ${figtreeBold.className}`}>
            <h1 className='border-b-4 border-double border-[#ffa500]'>{titulo}</h1>
          </div>}
        </div>

        {descripcion && <div className={`mt-3 text-[#ddd] flex w-full justify-center text-[1rem] ${figtree.className}`}>
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


