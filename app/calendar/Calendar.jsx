'use client'

import './calendar.css'
import { useState, useEffect } from 'react';
import Dates from './components/dates/Dates';
import Eventos from './components/eventos/Eventos';
import CalendarHeader from './components/calendar-header/CalendarHeader';
import Filter from '../components/filter/Filter';
import categorias from './categorias';
import calendario from '../calendar/components/assets/calendar.svg';

const Calendar = ({ eventosProp }) => {
  const [eventos, setEventos] = useState([]);
  const [formatedDate, setFormatedDate] = useState('');
  const [currentEvents, setCurrentEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [eventosFiltrados, setEventosFiltrados] = useState([]);
  const [years, setYears] = useState([]);

  const compararFechas = (a, b) => {
    // Convertir las fechas al formato 'yyyy/mm/dd' para compararlas

    let fechaA = new Date(a.fecha.split('/').reverse().join('/'));
    let fechaB = new Date(b.fecha.split('/').reverse().join('/'));

    // Comparar las fechas
    if (fechaA < fechaB) {
      return -1;
    }
    if (fechaA > fechaB) {
      return 1;
    }
    return 0;
  };

  const fechaFormateada = selectedDate.toLocaleDateString('es-ES', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  function getYears(array) {
    return array.reduce((acc, e) => {
      const fecha = parseInt(e.fecha.substring(e.fecha.length - 4))

      if (!acc.includes(fecha)) {
        return [...acc, fecha]
      }
      return acc
    }, [])
  }

  useEffect(() => {
    //setear los eventos ordenados por fechas
    // al renderizar el componente
    const eventosOrdenados = eventosProp.sort(compararFechas).map((e, i) => ({ ...e, i: i }));

    setYears(getYears(eventosOrdenados));

    setEventos(eventosOrdenados);
    setEventosFiltrados(eventosOrdenados);

    //setear si hay, las eventos que coincidan
    //con la fecha seleccionada
    setCurrentEvents(eventosOrdenados.map(e => {
      if (e.fecha === fechaFormateada) return e
    }).filter((e) => e !== undefined));
  }, []);

  

  return (
    <div className="bg-white h min-h-[900px] md:min-h-[700px] w flex flex-col items-center">

      <div className="w-[90%] md:w-[90%] md:items-center flex flex-col mt-6">
        <div className="w md:w-[85%]">
          <CalendarHeader>
            <Filter backgroundBg={'bg-[var(--bg)]'} itemBg={'bg-[var(--lightContrast)]'} categorias={categorias} elements={eventos} setFilteredElements={setEventosFiltrados} />
          </CalendarHeader>
        </div>

        <div className="w flex flex-col md:flex-row md:justify-evenly items-center">
          <Dates years={years} eventos={eventosFiltrados} selectedDate={selectedDate} setSelectedDate={setSelectedDate} setFormatedDate={setFormatedDate} setCurrentEvents={setCurrentEvents} />
          <Eventos selectedDate={selectedDate} formatedDate={formatedDate} eventos={eventos} currentEvents={currentEvents} />
        </div>
      </div>

    </div>
  );
};

export default Calendar;