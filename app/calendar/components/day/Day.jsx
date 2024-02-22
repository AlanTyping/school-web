import { isSameMonth, format, isSameDay, getMonth} from 'date-fns'
import { figtree } from '../../../fonts/fonts';
export default function Day({ day, monthStart, todaysDate, currentDate, eventos, selectedDate, setSelectedDate }) {
  const fechaFormateada = day.toLocaleDateString('es-ES', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  const bg = eventos.some((e) => e.fecha === fechaFormateada);

  return (
    <div
      onClick={() => setSelectedDate(day)}
      className={`day py-2 ${figtree.className} px-3 ${isSameDay(day, todaysDate) ? 'bg-[var(--lightContrast)] text-white' : bg && 'bg-blue-300'}  ${isSameDay(day, selectedDate) && 'bg-blue-400 text-white'} ${!isSameMonth(day, monthStart) ? 'outside-month' : ''} hover:cursor-pointer`}
    >
      {format(day, 'd')}
    </div>
  )
}
