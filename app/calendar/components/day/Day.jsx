import { isSameMonth, format, isSameDay, getMonth } from 'date-fns'
import { figtree } from '../../../fonts/fonts';
export default function Day({ day, monthStart, todaysDate, eventos, selectedDate, setSelectedDate }) {
  const fechaFormateada = day.toLocaleDateString('es-ES', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  const bg = eventos.filter((e) => e.fecha === fechaFormateada);

  let diaSinClases = [];

  if (bg.length >= 1) {
    diaSinClases = bg.filter(e => e.categoria === 'díasinclases')
  }

  return (
    <div
      onClick={() => setSelectedDate(day)}
      className={`day py-2 ${figtree.className} px-3 ${isSameDay(day, selectedDate) ? diaSinClases.length >= 1 ? 'border-[#fa6060] border-b-[3px]' : isSameDay(day, todaysDate) ? 'border-[var(--darkBg)] border-b-[3px]' : bg.length >= 1 ? 'border-[var(--lightBorder)] border-b-[3px]' : 'border-[#aaa] border-b-[3px]' : isSameDay(day, todaysDate) ? 'border-[var(--darkBg)] border-b-[3px] bg-[var(--lightContrast)] text-white' : diaSinClases.length >= 1 ? 'border-[#fa6060] border-b-[3px] bg-[#febfbf]' : bg.length >= 1 && 'border-[var(--lightBorder)] border-b-[3px] bg-[var(--lightBg)]'} ${!isSameMonth(day, monthStart) && 'outside-month'} hover:cursor-pointer`}
    >
      {format(day, 'd')}
    </div>
  )
}
