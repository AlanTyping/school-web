'use client'

import { useState, useEffect } from "react";
import Day from "../day/Day";
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay, addMonths, isSameYear } from 'date-fns';
import { poppinsBold, figtreeBold } from '../../../fonts/fonts'
import '../../calendar.css'

export default function Dates({ eventos, selectedDate, setSelectedDate, setFormatedDate, setCurrentEvents}) {
  const [todaysDate, setTodaysDate] = useState(new Date());
  const [currentDate, setCurrentDate] = useState(new Date());

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const rows = [];
  let days = [];
  let day = startDate;

  const fechaFormateada = selectedDate.toLocaleDateString('es-ES', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      days.push(<Day eventos={eventos} todaysDate={todaysDate} day={day} selectedDate={selectedDate} setSelectedDate={setSelectedDate} monthStart={monthStart} key={i} />);
      day = addDays(day, 1);
    }
    rows.push(<div key={Math.random()} className="row">{days}</div>);
    days = [];
  }

  useEffect(() => {
    if (eventos.length !== 0) {
      setCurrentEvents(eventos.map((e, i) => {
        if (e.fecha === fechaFormateada) return { ...e, i: i }
        else return undefined;
      }).filter((element) => element !== undefined));
    }

    setFormatedDate(fechaFormateada);
  }, [selectedDate, eventos]);

  const prevMonth = () => {
    setCurrentDate(prev => addMonths(prev, -1));
  };

  const nextMonth = () => {
    setCurrentDate(prev => addMonths(prev, 1));
  };

  return (
    <div className="calendar m-2">
      <div className="header">
        <button onClick={prevMonth}>{'<'}</button>
        <h2 className={`${poppinsBold.className} text-[1.1rem]`}>{format(monthStart, 'MMMM yyyy')}</h2>
        <button onClick={nextMonth}>{'>'}</button>
      </div>
      <div className="days">
        <div className="row">
          {['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'].map(day => (
            <div key={day} className={`day-header ${poppinsBold.className}`}>{day}</div>
          ))}
        </div>
        {rows}
      </div>
    </div>
  )
}
