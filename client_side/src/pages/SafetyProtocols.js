// src/pages/SafetyProtocols.js
import React, { useState } from 'react';

const SafetyProtocols = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedProtocol, setExpandedProtocol] = useState(null);

  const protocols = [
    {
      id: 1,
      title: 'Fire Safety',
      content: 'In case of fire, follow these steps:\n1. Activate the nearest fire alarm.\n2. Evacuate the building immediately using the nearest exit.\n3. Do not use elevators.\n4. Assist those with disabilities.\n5. Once outside, move away from the building and assemble at the designated meeting point.',
    },
    {
      id: 2,
      title: 'Earthquake Safety',
      content: 'During an earthquake, follow these steps:\n1. Drop to the ground.\n2. Take cover under sturdy furniture.\n3. Hold on until the shaking stops.\n4. Stay away from windows and heavy objects.\n5. After the shaking stops, evacuate the building if safe to do so.',
    },
    {
      id: 3,
      title: 'Lockdown Procedure',
      content: 'In case of a lockdown, follow these steps:\n1. Lock all doors and windows.\n2. Turn off lights.\n3. Stay away from doors and windows.\n4. Remain quiet and do not open the door for anyone.\n5. Wait for official instructions from authorities.',
    },
    {
      id: 4,
      title: 'Medical Emergency',
      content: 'In case of a medical emergency:\n1. Call the emergency number immediately.\n2. Provide the exact location and nature of the emergency.\n3. Do not move the injured person unless necessary.\n4. Provide first aid if trained to do so.\n5. Stay with the person until help arrives.',
    },
    {
      id: 5,
      title: 'Chemical Spill',
      content: 'In case of a chemical spill:\n1. Evacuate the area immediately.\n2. Avoid breathing vapors or coming into contact with the substance.\n3. Notify the appropriate personnel or emergency services.\n4. Do not attempt to clean up the spill unless trained.\n5. Isolate the area to prevent others from entering.',
    },
    {
      id: 6,
      title: 'Severe Weather',
      content: 'In case of severe weather (e.g., tornado, hurricane):\n1. Seek shelter in a designated safe area.\n2. Stay away from windows and exterior doors.\n3. Monitor weather updates from reliable sources.\n4. Do not leave the shelter until an all-clear is given.\n5. Assist others in reaching safety if possible.',
    },
    {
      id: 7,
      title: 'Bomb Threat',
      content: 'If you receive a bomb threat:\n1. Remain calm.\n2. Try to keep the caller on the line and gather as much information as possible.\n3. Note the exact words of the caller and any background noises.\n4. Notify authorities immediately after the call.\n5. Follow instructions from emergency personnel.',
    },
    {
      id: 8,
      title: 'Active Shooter',
      content: 'In case of an active shooter:\n1. Run: If there is a safe escape path, attempt to evacuate.\n2. Hide: If evacuation is not possible, find a place to hide.\n3. Fight: As a last resort, and only if your life is in danger, attempt to incapacitate the shooter.\n4. Call emergency services when it is safe to do so.\n5. Follow instructions from law enforcement when they arrive.',
    },
    {
      id: 9,
      title: 'Gas Leak',
      content: 'In case of a gas leak:\n1. Evacuate the area immediately.\n2. Do not use electrical switches or devices.\n3. Avoid open flames or sparks.\n4. Notify authorities or maintenance personnel.\n5. Do not re-enter the area until it is declared safe.',
    },
    {
      id: 10,
      title: 'Flooding',
      content: 'In case of flooding:\n1. Move to higher ground immediately.\n2. Do not walk through moving water.\n3. Avoid driving through flooded areas.\n4. Follow instructions from emergency personnel.\n5. Stay informed about weather updates.',
    },
  ];

  // Filter protocols based on search term
  const filteredProtocols = protocols.filter((protocol) =>
    protocol.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleProtocol = (id) => {
    setExpandedProtocol(expandedProtocol === id ? null : id);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Safety Protocols</h2>

        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search protocols..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 border rounded shadow-sm"
          />
        </div>

        {/* Protocols List */}
        <div className="space-y-4">
          {filteredProtocols.map((protocol) => (
            <div key={protocol.id} className="bg-white rounded-lg shadow">
              <button
                onClick={() => toggleProtocol(protocol.id)}
                className="w-full flex justify-between items-center p-4 focus:outline-none"
              >
                <h3 className="text-xl font-semibold">{protocol.title}</h3>
                <span>
                  {expandedProtocol === protocol.id ? (
                    <svg
                      className="w-6 h-6 transform rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  ) : (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </span>
              </button>
              {expandedProtocol === protocol.id && (
                <div className="p-4 border-t">
                  {protocol.content.split('\n').map((line, index) => (
                    <p key={index} className="mb-2">
                      {line}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}

          {filteredProtocols.length === 0 && (
            <p className="text-center text-gray-600">No protocols found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SafetyProtocols;
