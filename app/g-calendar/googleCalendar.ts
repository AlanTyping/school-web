import axios from 'axios';

const API_KEY = 'AIzaSyD2XxSwrYFaz9zqhGHkFihYKhxFu5haXzs'; // Reemplaza con tu clave de API
const CALENDAR_ID = 'primary'; // Puedes usar 'primary' para el calendario principal

async function fetchCalendarEvents() {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`
    );

    // Maneja los datos de los eventos aquí (response.data.items)
    console.log('Eventos del calendario:', response.data.items);
  } catch (error) {
    console.error('Error al obtener eventos del calendario:', error.message);
  }
}

export default fetchCalendarEvents;

