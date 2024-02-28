import { isSameMonth, format, isSameDay, getMonth } from 'date-fns'
import { figtree } from '../../../fonts/fonts';
import categorias from '../../categorias';
export default function Day({ day, monthStart, todaysDate, eventos, selectedDate, setSelectedDate }) {
  const fechaFormateada = day.toLocaleDateString('es-ES', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  const bg = eventos.filter((e) => e.fecha === fechaFormateada);
  let singleCategorie = null;

  const cat = bg.reduce((acc, e) => {
    if (!acc.includes(e.categoria) && e.categoria !== "") return [...acc, e.categoria];
    return acc
  }, []);

  if (cat.length === 1) {
    categorias.forEach(c => {
      if (c.categoria.replace(/\s+/g, '') === cat[0]) {
        return singleCategorie = c;
      }
    });
  }

  let diaSinClases = [];

  if (bg.length >= 1) {
    diaSinClases = bg.filter(e => e.categoria === 'díasinclases')
  };

  return (
    <div
      onClick={() => setSelectedDate(day)}
      className={`day py-2 ${figtree.className} px-3 ${isSameDay(day, selectedDate) ? diaSinClases.length >= 1 ? 'border-[#fa6060] border-b-[3px]' : singleCategorie ? `${singleCategorie.borde} border-b-[3px]` : isSameDay(day, todaysDate) ? 'border-[var(--darkBg)] border-b-[3px]' :  bg.length >= 1 ? 'border-[var(--lightBorder)] border-b-[3px]' : 'border-[#aaa] border-b-[3px]' : isSameDay(day, todaysDate) ? 'border-[var(--darkBg)] border-b-[3px] bg-[var(--lightContrast)] text-white' : diaSinClases.length >= 1 ? 'border-[#fa6060] border-b-[3px] bg-[#febfbf]' : singleCategorie && singleCategorie.categoria !== 'comunicado' ? `${singleCategorie.bg} ${singleCategorie.borde} border-b-[3px]` : bg.length >= 1 && 'border-[var(--lightBorder)] border-b-[3px] bg-[var(--lightBg)]'} ${!isSameMonth(day, monthStart) && 'outside-month'} hover:cursor-pointer`}
    >
      {format(day, 'd')}
    </div>
  )
}
