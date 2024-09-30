// src/components/InteractiveTools.js
import React from 'react';

const InteractiveTools = () => {
  const tools = [
    { id: 1, name: 'Quiz Maker', description: 'Create interactive quizzes for students.' },
    { id: 2, name: 'Poll Creator', description: 'Engage students with live polls.' },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-gray-800 mt-6">
      <h2 className="text-xl font-bold mb-4">Interactive Learning Tools</h2>
      <ul>
        {tools.map((tool) => (
          <li key={tool.id} className="mb-4">
            <h3 className="text-lg font-semibold">{tool.name}</h3>
            <p>{tool.description}</p>
            <button className="mt-2 bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600">
              Launch
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InteractiveTools;
