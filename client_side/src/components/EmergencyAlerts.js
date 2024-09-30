// src/components/EmergencyAlerts.js
import React from 'react';

const EmergencyAlerts = ({ alerts }) => {
  if (!alerts || alerts.length === 0) return null;

  return (
    <div className="bg-red-600 text-white p-4 rounded mb-4">
      <h2 className="text-xl font-bold">Emergency Alerts</h2>
      <ul>
        {alerts.map((alert) => (
          <li key={alert.id} className="mt-2">
            <p className="font-semibold">{alert.title}</p>
            <p>{alert.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmergencyAlerts;
