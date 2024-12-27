"use client";
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function CalendarPage() {
  const [date, setDate] = useState<Date | Date[]>(new Date());

  const onChange = (value: Date | Date[] | null, event: React.MouseEvent<HTMLButtonElement>) => {
    if (value !== null) {
      setDate(value);
    }
  };

  return (
    <div>
      <h1>Calendar</h1>
      <p>Selected date: {Array.isArray(date) ? date.map(d => d.toDateString()).join(', ') : date.toDateString()}</p>
    </div>
  );
}