import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import TaskList from "./components/TaskList";
import CalendarComponent from "./components/CalendarComponent";

const localizer = momentLocalizer(moment);
const events = [];

function App() {
  return (
    <div>
      <h1>Bienvenue sur FamilyWall Clone</h1>
      <TaskList />
      <CalendarComponent />
      <div style={{ height: '500px' }}>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
        />
      </div>
    </div>
  );
}

export default App;
