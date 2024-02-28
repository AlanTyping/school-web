import Evento from "../evento/Evento";
import { figtreeBold, figtree } from '../../../fonts/fonts';
import { isSameDay } from "date-fns";
import calendario from '../assets/calendar.svg';
import Image from "next/image";
import categorias from "../../categorias";

export default function Eventos({ selectedDate, formatedDate, currentEvents, eventos }) {
  const todaysDate = new Date();
  const diaSinClases = currentEvents.filter(e => e.categoria === 'díasinclases');
  let singleCategorie = null;

  const bg = currentEvents.filter((e) => e.fecha === formatedDate);
  const cat = bg.reduce((acc, e) => {
    if (!acc.includes(e.categoria) && e.categoria !== "") return [...acc, e.categoria];
    return acc
  }, []);

  if (cat.length === 1) {
    categorias.forEach(c => {
      if (c.categoria.replace(/\s+/g, '') === cat[0]) {
        return singleCategorie = c;
      };
    });
  };

  return (
    <div className="w-[95%] md:w-[50%] md:pl-4 h-[300px] mt-4 md:mt-0 rounded">
      <div className={`w flex justify-start`}>
        <h4 className={`${figtreeBold.className} ${singleCategorie ? `${singleCategorie.borde}` : isSameDay(selectedDate, todaysDate) ? 'border-[var(--darkBg)]' : currentEvents.length >= 1 ? 'border-[var(--lightBorder)]' : 'border-[#bbb]'} text-[1.3rem] text-[var(--bg)] border-b-[3px]`}>
          {formatedDate}
        </h4>
      </div>
      <div id="event-container" className="w max-h-[200px] mt-6 flex flex-col overflow-y-auto overflow-x-hidden">
        {
          currentEvents.length === 0 ?
            <div className="w flex items-center justify-center h">
              <div className="flex-center flex-col">
                <h3 className={`${figtreeBold.className} text-[1.2rem] text-[var(--bg)]`}>Sin eventos para mostrar</h3>
                <Image src={calendario} alt='' className={`h-[120px] w-[120px] mt-6`} />
              </div>

            </div>
            :
            currentEvents.map(({ titulo, fecha, descripcion, i, desde, hasta, categoria, lugar }, indice) => <Evento categoria={categoria} i={i} eventos={eventos} descripcion={descripcion} desde={desde} hasta={hasta} lugar={lugar} fecha={fecha} titulo={titulo} key={indice} />)}
      </div>
    </div>
  )
}
