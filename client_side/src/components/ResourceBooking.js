// src/components/ResourceBooking.js
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ResourceBooking = ({ resource, schedules }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [timeSlot, setTimeSlot] = useState('');
  const [bookedBy, setBookedBy] = useState('');
  const [bookings, setBookings] = useState(() => {
    const resourceSchedule = schedules.find(
      (schedule) => schedule.resourceId === resource.id
    );
    return resourceSchedule ? resourceSchedule.bookings : [];
  });

  const handleBooking = () => {
    if (timeSlot && bookedBy) {
      const newBooking = {
        date: selectedDate.toISOString().split('T')[0],
        time: timeSlot,
        bookedBy,
      };
      setBookings([...bookings, newBooking]);
      // Reset fields
      setTimeSlot('');
      setBookedBy('');
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-gray-800 mt-6 md:mt-0">
      <h2 className="text-xl font-bold mb-4">Manage Bookings for {resource.name}</h2>
      <div className="mb-4">
        <label className="block mb-2">Select Date:</label>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          className="p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Time Slot:</label>
        <input
          type="text"
          value={timeSlot}
          onChange={(e) => setTimeSlot(e.target.value)}
          placeholder="e.g., 09:00 AM - 11:00 AM"
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Booked By:</label>
        <input
          type="text"
          value={bookedBy}
          onChange={(e) => setBookedBy(e.target.value)}
          placeholder="Enter your name"
          className="w-full p-2 border rounded"
        />
      </div>
      <button
        onClick={handleBooking}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add Booking
      </button>
      <h3 className="text-lg font-bold mt-6 mb-4">Existing Bookings</h3>
      {bookings.length > 0 ? (
        <ul>
          {bookings.map((booking, index) => (
            <li key={index} className="mb-2">
              <div className="flex justify-between">
                <span>{booking.date}</span>
                <span>{booking.time}</span>
                <span>{booking.bookedBy}</span>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No bookings for this resource.</p>
      )}
    </div>
  );
};

export default ResourceBooking;
