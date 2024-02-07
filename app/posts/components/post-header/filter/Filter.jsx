import { useState } from "react"
import { figtreeBold } from '../../../../fonts/fonts'

export default function Filter({ filterPosts }) {
  const [filter, setFilter] = useState(false);

  const categorias = [{
    categoria: 'proyectos',
    color: '#492e08',
    borde: '#f08c00'
  }, {
    categoria: 'comunicado',
    color: '#154a7b',
    borde: '#a5d8ff'
  }, {
    categoria: 'eventos',
    color: '#460c4b',
    borde: '#f7a5ff'
  },];

  return (
    <div className="w-full text-[#eee] flex justify-center flex-col items-end pb-2 pt-2">
      <div onClick={() => setFilter(!filter)} className="mr-8 w-[220px] rounded py-2 bg-[var(--darkBg)]" >
        <h1 className="text-[1.1rem] text-center cursor-pointer">Filtrar</h1>

        <div className="relative">
          {filter &&
            <div
              className="flex p-2 items-start flex-col absolute w-full top-0 h-auto pb-3 right-0 
              bg-[var(--darkBg)] z-10 rounded">
              {categorias.map(({ borde, categoria, color }, i) => (

                <button key={i} onClick={() => filterPosts(categoria)} className="flex-center flex-row rounded py-2 my-1 bg-[var(--bg)] pr-2 pl-1 relative">
                  <div className="flex-center w-[25px]">
                    <div className={`bg-[${color}] border-[${borde}] h-[12px] rounded-[50%] w-[12px]  border-[2px]`} />
                  </div>
                  <div className="relative flex-center">
                    <span className={`text-[0.95rem] ${figtreeBold.className}`}>{categoria}</span>
                  </div>
                </button>
              ))}
            </div>}
        </div>
      </div>
    </div>
  )
}