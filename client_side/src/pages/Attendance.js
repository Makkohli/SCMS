// src/pages/Attendance.js
import React, { useState } from 'react';
import studentsData from '../data/students.json';

const Attendance = () => {
  const [students, setStudents] = useState(studentsData);

  const toggleAttendance = (id) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === id ? { ...student, isPresent: !student.isPresent } : student
      )
    );
  };

  const presentCount = students.filter((s) => s.isPresent).length;
  const absentCount = students.length - presentCount;

  return (
    <div className="bg-gray-900 min-h-screen text-white p-6">
      <h2 className="text-3xl font-bold mb-6">Attendance</h2>
      <div className="mb-4">
        <p>Total Students: {students.length}</p>
        <p>Present: {presentCount}</p>
        <p>Absent: {absentCount}</p>
      </div>
      <table className="min-w-full bg-gray-800 rounded">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Student Name</th>
            <th className="py-2 px-4 border-b">Status</th>
            <th className="py-2 px-4 border-b">Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id} className="text-center">
              <td className="py-2 px-4 border-b">{student.name}</td>
              <td className="py-2 px-4 border-b">
                {student.isPresent ? 'Present' : 'Absent'}
              </td>
              <td className="py-2 px-4 border-b">
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded"
                  onClick={() => toggleAttendance(student.id)}
                >
                  Toggle
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Attendance;
