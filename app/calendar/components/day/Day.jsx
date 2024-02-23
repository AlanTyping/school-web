import { isSameMonth, format, isSameDay, getMonth} from 'date-fns'
import { figtree } from '../../../fonts/fonts';
export default function Day({ day, monthStart, todaysDate, eventos, selectedDate, setSelectedDate }) {
  const fechaFormateada = day.toLocaleDateString('es-ES', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  const bg = eventos.some((e) => e.fecha === fechaFormateada);

  return (
    <div
      onClick={() => setSelectedDate(day)}
      className={`day py-2 ${figtree.className} px-3 ${isSameDay(day, selectedDate) ? 'border-[var(--lightContrast)] border-b-[3px]' : isSameDay(day, todaysDate) ? 'border-[var(--darkBg)] border-b-[3px] bg-[var(--lightContrast)] text-white' : bg && 'border-[var(--lightBg)] border-b-[3px] bg-blue-200'} ${!isSameMonth(day, monthStart) && 'outside-month'} hover:cursor-pointer`}
    >
      {format(day, 'd')}
    </div>
  )
}
