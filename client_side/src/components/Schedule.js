// src/components/Schedule.js
import React from 'react';

const Schedule = () => {
  const classes = [
    { time: '9:00 AM', subject: 'Mathematics', room: 'Room 101' },
    { time: '11:00 AM', subject: 'Physics', room: 'Room 202' },
    { time: '2:00 PM', subject: 'Chemistry', room: 'Lab 1' },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-gray-800 mt-6">
      <h2 className="text-xl font-bold mb-4">Today's Schedule</h2>
      <ul>
        {classes.map((cls, index) => (
          <li key={index} className="mb-2">
            <div className="flex justify-between">
              <span>{cls.time}</span>
              <span>{cls.subject}</span>
              <span>{cls.room}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Schedule;
