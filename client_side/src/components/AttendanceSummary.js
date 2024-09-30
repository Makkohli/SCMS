// src/components/AttendanceSummary.js
import React from 'react';

const AttendanceSummary = () => {
  const totalStudents = 30;
  const presentStudents = 28;
  const absentStudents = totalStudents - presentStudents;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-gray-800">
      <h2 className="text-xl font-bold mb-4">Attendance Summary</h2>
      <div className="flex justify-around">
        <div>
          <p className="text-2xl font-bold">{totalStudents}</p>
          <p>Total Students</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-green-600">{presentStudents}</p>
          <p>Present</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-red-600">{absentStudents}</p>
          <p>Absent</p>
        </div>
      </div>
    </div>
  );
};

export default AttendanceSummary;
