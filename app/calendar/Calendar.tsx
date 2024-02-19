'use client'

import React, { useState, useEffect } from 'react';
import Day from './components/Day';
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay, addMonths, isSameYear } from 'date-fns';
import './calendar.css'

const Calendar = ({ eventos }) => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [formatedDate, setFormatedDate] = useState<string>('')
  const [currentEvents, setCurrentEvents] = useState<any>([])

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);


  const rows = [];
  let days = [];
  let day = startDate;

  useEffect(() => {
    const fechaFormateada = selectedDate.toLocaleDateString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });

    setCurrentEvents(eventos.filter((e: any) => e.fecha === fechaFormateada));
    setFormatedDate(fechaFormateada);
  }, [selectedDate])

  function getYears(array: any[]) {
    return array.reduce((acc, e) => {
      const fecha = parseInt(e.fecha.substring(e.fecha.length - 2))

      if (!acc.includes(fecha)) {
        return [...acc, fecha]
      }
      return acc
    }, [])
  }

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      days.push(<Day eventos={eventos} day={day} selectedDate={selectedDate} setSelectedDate={setSelectedDate} currentDate={currentDate} monthStart={monthStart} key={i} />);
      day = addDays(day, 1);
    }
    rows.push(<div key={Math.random()} className="row">{days}</div>);
    days = [];
  }



  const prevMonth = () => {
    setCurrentDate(prev => addMonths(prev, -1));
  };

  const nextMonth = () => {
    setCurrentDate(prev => addMonths(prev, 1));
  };

  return (
    <div className="bg-white h w flex flex-col items-center">
      <div className="w flex-center">
        <div className="w-[90%] md:w-[80%] flex flex-col">
          <div className="w text-start font-bold text-[1.2rem]"><h2>Agenda</h2></div>
          <div className="w text-center border-y-2 uppercase border-[#CCC] my-2"><h3>mes</h3></div>

          <div className="w flex flex-col md:flex-row items-center">
            <div className="">
              <div className="calendar m-2">
                <div className="header">
                  <button onClick={prevMonth}>{'<'}</button>
                  <h2>{format(monthStart, 'MMMM yyyy')}</h2>
                  <button onClick={nextMonth}>{'>'}</button>
                </div>
                <div className="days">
                  <div className="row">
                    {['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'].map(day => (
                      <div key={day} className="day-header font-bold">{day}</div>
                    ))}
                  </div>
                  {rows}
                </div>
              </div>
            </div>
            <div className="p-2 w-[90%] md:w-[60%] h-[300px] m-2">
              <div className="text-end text-[1.3rem] font-bold">
                <h4>{formatedDate}</h4>
              </div>
              <div className="w h-[300px] overflow-y-auto event-container overflow-x-hidden">
                {currentEvents.map(({ titulo, fecha }) => (
                  <div className="w-[90%] h-[100px] flex flex-col items-start m-2 p-2 text-[0.95rem]">
                    <span>20:00hs - 21:00hs</span>
                    <span>{fecha}</span>
                    <button className='font-bold text-[1.1rem]'>{titulo}</button>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;

// import React from 'react'

// export default function page() {
//   return (
//     <div className='w flex-center py- 5'>
//       <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FArgentina%2FBuenos_Aires&showCalendars=0&showTitle=0&showTabs=0&showTz=0&showPrint=0&src=YWxhbi5hLm4uci5hckBnbWFpbC5jb20&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=Y2xhc3Nyb29tMTA2NTIyNjIzMzQ0MjEwNzY4MDQ1QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTExNTQzMTcyMTExMzM5OTAzNzY0QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTAzODQyODU5MTMwNDI3MDExNDgzQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTExNTc0Mzc3MjIwNDU1NDYyODI0QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=ZmFtaWx5MTI5ODA0NTU3MDY0ODkwMjQyNTJAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=ZXMuYXIjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTE1NDg3MjQxODYxMzM1NTgwMjk0QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTEwMDExNjI5MzkwOTk3MjI1NjE3QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTExODkyNDA0ODcyODA5MDU2NDQxQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23EF6C00&color=%237986CB&color=%23E67C73&color=%23137333&color=%23202124&color=%23202124&color=%23C0CA33&color=%237986CB&color=%23202124&color=%23202124&color=%230047a8" style={{ borderWidth: 0 }} width="800" height="600" frameborder="0" scrolling="no"></iframe>
//     </div>
//   )
// }
