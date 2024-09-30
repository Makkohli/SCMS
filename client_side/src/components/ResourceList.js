// src/components/ResourceList.js
import React from 'react';

const ResourceList = ({ resources, onSelectResource, selectedResource }) => {
  console.log('resources:', resources);
  console.log('typeof resources:', typeof resources);
  console.log('Array.isArray(resources):', Array.isArray(resources));
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-gray-800">
      <h2 className="text-xl font-bold mb-4">Available Resources</h2>
      <ul>
        {resources.map((resource) => (
          <li
            key={resource.id}
            className={`mb-2 p-2 rounded cursor-pointer ${
              selectedResource && selectedResource.id === resource.id
                ? 'bg-blue-100'
                : 'hover:bg-gray-100'
            }`}
            onClick={() => onSelectResource(resource)}
          >
            <div className="flex justify-between">
              <span>{resource.name}</span>
              <span
                className={`font-semibold ${
                  resource.status === 'Available'
                    ? 'text-green-600'
                    : resource.status === 'In Use'
                    ? 'text-yellow-600'
                    : 'text-red-600'
                }`}
              >
                {resource.status}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResourceList;
