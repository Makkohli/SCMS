// src/components/PerformanceAnalytics.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, BarElement, CategoryScale, LinearScale } from 'chart.js';

// Register the required components
Chart.register(BarElement, CategoryScale, LinearScale);

const PerformanceAnalytics = () => {
  const data = {
    labels: ['Assignment 1', 'Assignment 2', 'Quiz 1', 'Midterm'],
    datasets: [
      {
        label: 'Class Average (%)',
        data: [85, 78, 92, 88],
        backgroundColor: 'rgba(75,192,192,0.6)',
      },
    ],
  };

  const options = {
    scales: {
      y: { beginAtZero: true, max: 100 },
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-gray-800 mt-6">
      <h2 className="text-xl font-bold mb-4">Performance Analytics</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default PerformanceAnalytics;
