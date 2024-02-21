import { isSameMonth, format, isSameDay} from 'date-fns'

export default function Day({ day, monthStart, currentDate, eventos, selectedDate, setSelectedDate }) {
  const fechaFormateada = day.toLocaleDateString('es-ES', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  const bg = eventos.some((e) => e.fecha === fechaFormateada);

  return (
    <div
      onClick={() => setSelectedDate(day)}
      className={`day py-2 px-3 ${bg && 'bg-blue-300'} ${isSameDay(day, selectedDate) && 'bg-red-500 text-white'} ${!isSameMonth(day, monthStart) ? 'outside-month' : ''} ${isSameDay(day, currentDate) && currentDate.getMonth() === monthStart.getMonth() && 'current-day'} hover:cursor-pointer`}
    >
      {format(day, 'd')}
    </div>
  )
}
