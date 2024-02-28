import { useState } from "react";
import { figtreeBold, figtree } from '../../fonts/fonts';
import categorias from "../../calendar/categorias";

export default function Filter({ setFilteredElements, elements, backgroundBg, itemBg }) {
  const [filter, setFilter] = useState(false);

  const filterPosts = (categoria) => {
    if (categoria) return setFilteredElements(elements.filter(e => e.categoria === categoria.replace(/ /g, '')));
    return setFilteredElements(elements)
  }

  return (
    <div className="w text-[#eee] flex justify-center flex-col items-start md:items-end pt-2">
      <div onClick={() => setFilter(!filter)} className={`w-[150px] md:w-[220px] rounded py-2 ${backgroundBg}`} >
        <h1 className={`text-[1rem] text-center cursor-pointer ${figtreeBold.className}`}>Filtrar</h1>

        <div className="relative">
          {filter &&
            <div
              className={`flex p-2 items-start flex-col absolute w-full top-0 h-auto right-0 
              ${backgroundBg} z-10 rounded`}>
              {categorias.map(({ borde, categoria, bg }, i) => (
                <button key={i} onClick={() => filterPosts(categoria)} className={`pl-4 relative ml-1 flex-center flex-row rounded py-2 my-1 pr-2`}>
                  <div className={`${bg} inset-y-0 absolute left-0 w-[4px] rounded`} />

                  <div className="relative flex-center">
                    <span className={`text-[0.95rem] ${figtreeBold.className}`}>{categoria}</span>
                  </div>
                </button>
              ))}
 
              <div className="w flex-center my-2 mt-4">
                <div className="w-[90%] bg-[var(--lightBg)] h-[1px]" />
              </div>
              

              <button onClick={() => filterPosts()} className={`w flex-center flex-row rounded py-1`}>
                <div className="flex-center">
                  <span className={`text-[0.95rem] ${figtree.className}`}>quitar filtros</span>
                </div>
              </button>
            </div>}
        </div>
      </div>
    </div>
  )
}