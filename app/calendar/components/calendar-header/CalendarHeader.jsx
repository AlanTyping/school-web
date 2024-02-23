import { figtree, figtreeBold, poppinsBold } from '../../../fonts/fonts'

export default function CalendarHeader({ children }) {
  return (
    <>
      <div className="w py-2 mb-2 uppercase text-start font-bold text-[1.2rem] border-b-2 border-[#ccc]">
        <h2 className={`${figtreeBold.className}`}>Agenda</h2>
      </div>
      {children}
    </>
  )
}
