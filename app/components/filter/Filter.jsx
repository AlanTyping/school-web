import { useState } from "react";
import { figtreeBold, figtree } from '../../fonts/fonts';
import categorias from "@/app/calendar/categorias";

export default function Filter({ setFilteredElements, elements, backgroundBg, itemBg }) {
  const [filter, setFilter] = useState(false);

  const filterPosts = (categoria) => {
    if (categoria) return setFilteredElements(elements.filter(e => e.categoria === categoria.replace(/ /g,'')));
    return setFilteredElements(elements)
  }

  return (
    <div className="w text-[#eee] flex justify-center flex-col items-start md:items-end pb-2 pt-2">
      <div onClick={() => setFilter(!filter)} className={`w-[150px] md:w-[220px] rounded py-2 ${backgroundBg}`} >
        <h1 className="text-[1rem] text-center cursor-pointer">Filtrar</h1>

        <div className="relative">
          {filter &&
            <div
              className={`flex p-2 items-start flex-col absolute w-full top-0 h-auto pb-3 right-0 
              ${backgroundBg} z-10 rounded`}>
              {categorias.map(({ borde, categoria, color }, i) => (
                <button key={i} onClick={() => filterPosts(categoria)} className={`flex-center flex-row rounded py-2 my-1 pr-2 pl-1 relative`}>
                  <div className="flex-center w-[25px]">
                    <div className={`${borde} h-[12px] rounded-[50%] w-[12px]  border-[2px]`} />
                  </div>
                  <div className="relative flex-center">
                    <span className={`text-[0.95rem] ${figtreeBold.className}`}>{categoria}</span>
                  </div>
                </button>
              ))}

              <div className="w-[100%] bg-[var(--lightBg)] h-[1px] my-2" />

               <button onClick={() => filterPosts()} className={` w flex-center flex-row rounded py-2 my-1 pr-2 pl-1 relative`}>
                  <div className="relative flex-center">
                    <span className={`text-[0.95rem] ${figtree.className}`}>quitar filtros</span>
                  </div>
                </button>
            </div>}
        </div>
      </div>
    </div>
  )
}