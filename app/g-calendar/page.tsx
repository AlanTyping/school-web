'use client'

import {google} from 'googleapis'

const calendar = google.calendar({version: "v3"});

const SCOPES = 'https://www.googleapis.com/auth/calendar';

const CREDENTIALS = {"web":{"client_id":"825036012572-gibh795sdqid2e1fqa7370vie9drhsrd.apps.googleusercontent.com","project_id":"testing-403621","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_secret":"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","javascript_origins":["https://school-showcase.vercel.app","http://localhost:3000"]}}
const CALENDAR_ID='primary'

const auth = new google.auth.OAuth2()
// import { useEffect, useState } from 'react';

// const CalendarComponent = () => {
//   const [events, setEvents] = useState([]);

//   const API_KEY = 'AIzaSyD2XxSwrYFaz9zqhGHkFihYKhxFu5haXzs'; // Reemplaza con tu clave de API
//   const CALENDAR_ID = 'primary';

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const response = await fetch(
//           `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`
//         );
//         if (!response.ok) {
//           throw new Error('Failed to fetch events');
//         }
//         const data = await response.json();
//         setEvents(data.items);
//       } catch (error) {
//         console.error('Error fetching events:', error);
//       }
//     };

//     fetchEvents();
//   }, []);

//   return (
//     <div>
//       <h1>Calendar Events</h1>
//       <ul>
//         {events.map(event => (
//           <li key={event.id}>
//             {event.summary} - {new Date(event.start.dateTime).toLocaleString()}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default CalendarComponent;


// import fetchCalendarEvents from "./googleCalendar";

// const GoogleCalendar = () => {
//   fetchCalendarEvents();
//   return (
//     <div className=""></div>
//   )
// };

// export default GoogleCalendar;