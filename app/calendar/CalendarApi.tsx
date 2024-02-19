import React from 'react'
import { api } from '../api/api';
import { unstable_noStore as noStore } from 'next/cache';
import Calendar from './Calendar';

export default async function CalendarApi () {
  noStore()
  const eventos = await api.eventos();
  
  return <Calendar eventos={eventos} />
};
