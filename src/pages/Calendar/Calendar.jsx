import React from 'react'
import './Calendar.css'

const CALENDAR_URL = 'https://outlook.office365.com/calendar/published/b1348913de224d4da022233cb3c66eb0@uoguelph.ca/d074a27cd3ba4a5082c12426e0e8948d2314191237874545725/calendar.html'

const Calendar = () => {
  return (
    <div className='calendar'>
      <p className='calendar-intro'>
        All upcoming CCMPSSC and club events in one place.
        Click an event for details, or open the full calendar
        in a new tab.
      </p>
      <div className='calendar-frame'>
        <iframe
          src={CALENDAR_URL}
          title='CCMPSSC Events Calendar'
        ></iframe>
      </div>
      <a href={CALENDAR_URL} target='_blank' rel='noopener noreferrer' className='btn dark-btn'>
        Open Full Calendar
      </a>
    </div>
  )
}

export default Calendar
