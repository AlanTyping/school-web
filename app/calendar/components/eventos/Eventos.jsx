import Evento from "../evento/Evento"

export default function Eventos({ formatedDate, currentEvents, eventos }) {
  return (
    <div className="p-4 w-[95%] md:w-[60%] h-[300px] m-2 rounded">
      <div className="text-end text-[1.25rem]">
        <h4>{formatedDate}</h4>
      </div>
      <div id="event-container" className="w h-[200px] mt-2 flex  flex-col overflow-y-auto overflow-x-hidden">
        {currentEvents.map(({ titulo, fecha, descripcion, i, desde, hasta }) => <Evento i={i} eventos={eventos} descripcion={descripcion} desde={desde} hasta={hasta} fecha={fecha} titulo={titulo} key={i} />)}
      </div>
    </div>
  )
}
