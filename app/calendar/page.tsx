"use client";
import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';

export default function CalendarPage() {
  const [date] = useState<Date | Date[]>(new Date());

  return (
    <div>
      <h1>Calendar</h1>
      <p>Selected date: {Array.isArray(date) ? date.map(d => d.toDateString()).join(', ') : date.toDateString()}</p>
    </div>
  );
}