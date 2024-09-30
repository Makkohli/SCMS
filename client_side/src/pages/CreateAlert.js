// src/pages/CreateAlert.js
import React, { useState } from 'react';

const CreateAlert = () => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const handleCreateAlert = () => {
    // For now, just log the alert; later, this can be integrated with backend or state management
    console.log('New Alert Created:', { title, message });
    // Reset fields
    setTitle('');
    setMessage('');
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h2 className="text-2xl font-bold mb-4">Create Emergency Alert</h2>
      <div className="mb-4">
        <label className="block mb-2">Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Message:</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-2 border rounded"
          rows="4"
        ></textarea>
      </div>
      <button
        onClick={handleCreateAlert}
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
      >
        Send Alert
      </button>
    </div>
  );
};

export default CreateAlert;
