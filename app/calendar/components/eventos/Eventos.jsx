import Evento from "../evento/Evento";
import { figtreeBold, figtree } from '../../../fonts/fonts';

export default function Eventos({ formatedDate, currentEvents, eventos }) {
  return (
    <div className="w-[95%] md:w-[60%] h-[300px] mt-4 rounded">
      <div className={`w flex justify-start`}>
        <h4 className={`${figtreeBold.className} text-[1.3rem] text-[var(--bg)] border-b-[3px] border-[var(--lightBg)]`}>{formatedDate}</h4>
      </div>
      <div id="event-container" className="w max-h-[200px] mt-4 flex flex-col overflow-y-auto overflow-x-hidden">
        {currentEvents.map(({ titulo, fecha, descripcion, i, desde, hasta }) => <Evento i={i} eventos={eventos} descripcion={descripcion} desde={desde} hasta={hasta} fecha={fecha} titulo={titulo} key={i} />)}
      </div>
    </div>
  )
}
