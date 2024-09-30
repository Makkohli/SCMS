// src/pages/ResourceManagement.js
import React, { useState } from 'react';
import resourcesData from '../data/resources.json';
import resourceSchedulesData from '../data/resourceSchedules.json';
import ResourceList from '../components/ResourceList';
import ResourceBooking from '../components/ResourceBooking';

const ResourceManagement = () => {
  const [selectedResource, setSelectedResource] = useState(null);

  console.log('resourcesData:', resourcesData);
  console.log('typeof resourcesData:', typeof resourcesData);
  console.log('Array.isArray(resourcesData):', Array.isArray(resourcesData));

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6">Resource Management</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Resource List */}
        <ResourceList
          resources={resourcesData}
          onSelectResource={setSelectedResource}
          selectedResource={selectedResource}
        />
        {/* Resource Booking */}
        {selectedResource && (
          <ResourceBooking
            resource={selectedResource}
            schedules={resourceSchedulesData}
          />
        )}
      </div>
    </div>
  );
};

export default ResourceManagement;
