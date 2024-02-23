import Evento from "../evento/Evento";
import { figtreeBold, figtree } from '../../../fonts/fonts';
import { isSameDay } from "date-fns";

export default function Eventos({ selectedDate, formatedDate, currentEvents, eventos }) {
  const todaysDate = new Date();
  const diaSinClases = currentEvents.filter(e => e.categoria === 'díasinclases');

  return (
    <div className="w-[95%] md:w-[60%] h-[300px] mt-4 rounded">
      <div className={`w flex justify-start`}>
        <h4 className={`${figtreeBold.className} ${diaSinClases.length >= 1 ? 'border-[var(--noClases)]' : isSameDay(selectedDate, todaysDate) ? 'border-[var(--darkBg)]' : currentEvents.length >= 1 ? 'border-[var(--lightBorder)]' : 'border-[#bbb]'} text-[1.3rem] text-[var(--bg)] border-b-[3px]`}>
          {formatedDate}
        </h4>
        {diaSinClases.length >= 1 && <span className={`${figtreeBold.className} text-[var(--noClases)] text-[1.15rem] ml-6 mt-1`}>No hay clases</span>}
      </div>
      <div id="event-container" className="w max-h-[200px] mt-4 flex flex-col overflow-y-auto overflow-x-hidden">
        {currentEvents.map(({ titulo, fecha, descripcion, i, desde, hasta }) => <Evento i={i} eventos={eventos} descripcion={descripcion} desde={desde} hasta={hasta} fecha={fecha} titulo={titulo} key={i} />)}
      </div>
    </div>
  )
}
