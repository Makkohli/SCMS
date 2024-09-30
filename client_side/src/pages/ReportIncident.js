// src/pages/ReportIncident.js
import React, { useState } from 'react';

const ReportIncident = () => {
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [showAlert, setShowAlert] = useState(false); // New state for alert

  const handleReportIncident = () => {
    // For now, just log the incident; later, this can be integrated with backend or state management
    console.log('Incident Reported:', { date, location, description });
    // Reset fields
    setDate('');
    setLocation('');
    setDescription('');
    // Show the alert
    setShowAlert(true);
  };

  // Function to close the alert
  const closeAlert = () => {
    setShowAlert(false);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {showAlert && (
        <div className="bg-green-500 text-white p-4 rounded mb-4">
          <p className="font-semibold">Incident report submitted successfully!</p>
          <button
            onClick={closeAlert}
            className="mt-2 bg-green-700 px-3 py-1 rounded"
          >
            Close
          </button>
        </div>
      )}
      <h2 className="text-2xl font-bold mb-4">Report an Incident</h2>
      <div className="mb-4">
        <label className="block mb-2">Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Location:</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded"
          rows="4"
        ></textarea>
      </div>
      <button
        onClick={handleReportIncident}
        className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700"
      >
        Submit Report
      </button>
    </div>
  );
};

export default ReportIncident;
