import Evento from "../evento/Evento"

export default function Eventos({ formatedDate, currentEvents, eventos }) {
  return (
    <div className="p-2 w-[90%] md:w-[60%] h-[300px] m-2">
      <div className="text-end text-[1.3rem] font-bold">
        <h4>{formatedDate}</h4>
      </div>
      <div className="w h-[300px] overflow-y-auto event-container overflow-x-hidden">
        {currentEvents.map(({ titulo, fecha, descripcion, i }) => <Evento i={i} eventos={eventos} descripcion={descripcion} fecha={fecha} titulo={titulo} key={i} />)}
      </div>
    </div>
  )
}
