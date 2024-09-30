// src/pages/TeacherDashboard.js
import React from 'react';
import AttendanceSummary from '../components/AttendanceSummary';
import Schedule from '../components/Schedule';
import Notifications from '../components/Notifications';
import InteractiveTools from '../components/Interactivetools';
import PerformanceAnalytics from '../components/PerformanceAnalytics';
import Resources from '../components/Resources';

const TeacherDashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6">Welcome, Teacher!</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div>
          <AttendanceSummary />
          <InteractiveTools />
          <Resources />
        </div>
        {/* Right Column */}
        <div>
          <Schedule />
          <Notifications />
          <PerformanceAnalytics />
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
