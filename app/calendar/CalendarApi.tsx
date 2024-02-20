import React from 'react'
import { api } from '../api/api';
import { unstable_noStore as noStore } from 'next/cache';
import Calendar from './Calendar';

export default async function CalendarApi () {
  noStore()
  const eventos = await api.eventos();
  const posts = await api.posts();

  return <Calendar eventos={eventos} posts={posts} />
};
