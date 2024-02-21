'use client'

import './calendar.css'
import { useState, useEffect } from 'react';
import Dates from './components/dates/Dates';
import Eventos from './components/eventos/Eventos';
import CalendarHeader from './components/calendar-header/CalendarHeader';
import Filter from '../components/filter/Filter';

const Calendar = ({ eventosProp }) => {
  const [eventos, setEventos] = useState([]);
  const [formatedDate, setFormatedDate] = useState('');
  const [currentEvents, setCurrentEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [eventosFiltrados, setEventosFiltrados] = useState([]);

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

  useEffect(() => {
    //setear los eventos ordenados por fechas
    // al renderizar el componente
    const eventosOrdenados = eventosProp.sort(compararFechas);
    setEventos(eventosOrdenados);
    setEventosFiltrados(eventosOrdenados);

    //setear si hay, las eventos que coincidan
    //con la fecha seleccionada
    setCurrentEvents(eventosOrdenados.map((e, i) => {
      if (e.fecha === fechaFormateada) return { ...e, i: i }
      else return undefined;
    }).filter((element) => element !== undefined));
  }, []);

  function getYears(array) {
    return array.reduce((acc, e) => {
      const fecha = parseInt(e.fecha.substring(e.fecha.length - 2))

      if (!acc.includes(fecha)) {
        return [...acc, fecha]
      }
      return acc
    }, [])
  }

  const categorias = [{
    categoria: 'proyectos',
    color: '#492e08',
    borde: '#f08c00'
  }, {
    categoria: 'comunicado',
    color: '#154a7b',
    borde: '#a5d8ff'
  }, {
    categoria: 'eventos',
    color: '#460c4b',
    borde: '#f7a5ff'
  },];

  return (
    <div className="bg-white h w flex flex-col items-center">
      <div className="w flex-center">
        <div className="w-[90%] md:w-[80%] flex flex-col">
          <CalendarHeader>
            <Filter categorias={categorias} elements={eventos} setFilteredElements={setEventosFiltrados} />
          </CalendarHeader>

          <div className="w flex flex-col md:flex-row items-center">
            <Dates eventos={eventosFiltrados} selectedDate={selectedDate} setSelectedDate={setSelectedDate} setFormatedDate={setFormatedDate} setCurrentEvents={setCurrentEvents} />
            <Eventos formatedDate={formatedDate} eventos={eventosFiltrados} currentEvents={currentEvents} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;