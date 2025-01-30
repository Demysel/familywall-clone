import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
//import { fetchData, saveData } from "./api";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);
const CALENDAR_BIN_ID = "679b8a1bad19ca34f8f6fdc5";

function CalendarComponent() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function loadEvents() {
      const data = await fetchData(CALENDAR_BIN_ID);
      setEvents(data.record || []);
    }
    loadEvents();
  }, []);

  const handleSelectSlot = async ({ start, end }) => {
    const title = prompt("Titre de l'événement :");
    if (title) {
      const newEvent = { title, start, end };
      const updatedEvents = [...events, newEvent];
      setEvents(updatedEvents);
      await saveData(CALENDAR_BIN_ID, updatedEvents);
    }
  };

  return (
    <div>
      <h2>Calendrier Partagé</h2>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable
        style={{ height: 500 }}
        onSelectSlot={handleSelectSlot}
      />
    </div>
  );
}

export default CalendarComponent;
