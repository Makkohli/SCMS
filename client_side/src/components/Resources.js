// src/components/Resources.js
import React from 'react';

const Resources = () => {
  const resources = [
    { id: 1, name: 'Mathematics Lecture Notes', link: '#' },
    { id: 2, name: 'Physics Lab Manual', link: '#' },
    { id: 3, name: 'Chemistry Assignment Sheet', link: '#' },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-gray-800 mt-6">
      <h2 className="text-xl font-bold mb-4">Teaching Resources</h2>
      <ul>
        {resources.map((resource) => (
          <li key={resource.id} className="mb-2">
            <a href={resource.link} className="text-blue-500 hover:underline">
              {resource.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Resources;
