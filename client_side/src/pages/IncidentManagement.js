// src/pages/IncidentManagement.js
import React, { useState } from 'react';

const IncidentManagement = () => {
  // Sample hardcoded incidents
  const [incidents] = useState([
    {
      id: 1,
      date: '2023-10-01',
      location: 'Hallway',
      description: 'Student slipped and fell.',
    },
    {
      id: 2,
      date: '2023-10-02',
      location: 'Laboratory',
      description: 'Chemical spill reported.',
    },
  ]);

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h2 className="text-2xl font-bold mb-4">Incident Management</h2>
      {incidents.map((incident) => (
        <div key={incident.id} className="mb-6 p-4 bg-white rounded shadow">
          <p>
            <strong>Date:</strong> {incident.date}
          </p>
          <p>
            <strong>Location:</strong> {incident.location}
          </p>
          <p>
            <strong>Description:</strong> {incident.description}
          </p>
          {/* Add options to categorize or mark as resolved */}
        </div>
      ))}
    </div>
  );
};

export default IncidentManagement;
