import { Component } from '@angular/core';
import { CalendarOptions, DatesSetArg, EventClickArg } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { isSameDay } from 'date-fns';

@Component({
  selector: 'app-calender123',
  templateUrl: './calender123.component.html',
  styleUrls: ['./calender123.component.css']
})
export class Calender123Component {
  tasks = [
    { count: 17, label: 'Completed', class: 'completed' },
    { count: 34, label: 'ToDo', class: 'todo' },
    { count: 78, label: 'All Tasks', class: 'all-tasks' }
    // Add more tasks if needed
  ];

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    events: [
      { title: 'event 1', date: '2019-04-01' },
      { title: 'event 2', date: '2019-04-02' }
    ],
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: ''
    },
    datesSet: (dateInfo: DatesSetArg) => {
      console.log('Date set:', dateInfo);
    },
    eventClick: (eventInfo: EventClickArg) => {
      console.log('Event clicked:', eventInfo);
    }
  };

  handleDateClick(arg) {
    const currentDate = new Date();
    const clickedDate = new Date(arg.date);

    if (isSameDay(currentDate, clickedDate)) {
      alert('Clicked on the current date!');
    }
  }
}
