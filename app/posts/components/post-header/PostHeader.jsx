import { figtreem, poppinsBold, figtreeBold } from '../../../../app/fonts/fonts';
import Image from 'next/image';
import logo from './svg/school.svg'

export default function PostHeader({ categoria }) {

  return (
    <div className="w-[90%] flex items-center flex-row">
      <div className="w-[70%] flex items-center flex-row">
        <div className="bg-[var(--bg)] h-[45px] w-[45px] rounded-[25px] flex-center">
          <Image height={25} width={25} className="rounded" alt="" src={logo} />
        </div>
        <div className={`ml-[10px] text-[1.15rem] ${poppinsBold.className}`}>
          <h1>Colegio Trinity</h1>
        </div>
      </div>

      {categoria && categoria !== 'libre' &&
        <div className="w-[30%] flex-center">
          <div className="bg-[#021321] flex-center flex-row rounded py-1 pr-2 pl-1 relative">
            <div className="flex-center w-[20px]">
              <div className={`
              ${categoria === 'proyectos' ? 'bg-[#492e08] border-[#f08c00]'
              : categoria === 'comunicado' ? 'bg-[#154a7b] border-[#a5d8ff]'
              : categoria === 'evento' && 'bg-[#460c4b] border-[#f7a5ff]'}
              h-[10px] rounded-[50%] w-[10px]  border-[2px]`} />
            </div>
            <div className="relative flex-center">
              <span className={`text-[0.75rem] ${figtreeBold.className}`}>{categoria}</span>
            </div>
          </div>
        </div>
      }

    </div>

  )
}

