// src/components/Notifications.js
import React from 'react';

const Notifications = () => {
  const notifications = [
    { id: 1, message: 'Fire drill scheduled for tomorrow at 10 AM.' },
    { id: 2, message: 'New assignment uploaded for Mathematics.' },
    { id: 3, message: 'Staff meeting on Friday at 3 PM.' },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-gray-800 mt-6">
      <h2 className="text-xl font-bold mb-4">Notifications</h2>
      <ul>
        {notifications.map((notif) => (
          <li key={notif.id} className="mb-2">
            {notif.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
