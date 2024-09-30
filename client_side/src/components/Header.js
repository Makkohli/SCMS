import React, { useState, useRef, useEffect, useContext } from 'react';
import { Search, Bell } from 'lucide-react';
import { FaExclamationCircle } from 'react-icons/fa'; // Using react-icons for additional icons
import { NotificationsContext } from '../pages/NotificationsContext'; // Import the context

function Header({ onLogout }) {
  // State to manage the visibility of the notifications dropdown
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  // Ref for the notifications dropdown to handle outside clicks
  const dropdownRef = useRef(null);

  // Consume notifications from context
  const { notifications, loading, error } = useContext(NotificationsContext);

  // Toggle the visibility of the notifications dropdown
  const toggleNotifications = () => {
    setIsNotificationsOpen((prev) => !prev);
  };

  // Close the dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        event.target.getAttribute('aria-label') !== 'Notifications'
      ) {
        setIsNotificationsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='p-5 flex justify-between items-center bg-[#E5E7EB]'>
      {/* Left Section: Search Bar and Notifications */}
      <div className='flex items-center gap-4 flex-grow'>
        {/* Search Bar */}
        <div className='flex gap-3 items-center p-3 rounded-md max-w-6xl w-full bg-[#D1D5DB] shadow-md'>
          <Search className='text-[#111827] text-xl' />
          <input 
            type='text' 
            placeholder='Search...'
            className='bg-transparent w-full outline-none text-[#111827] placeholder-gray-400 text-lg'
            style={{ border: 'none' }}
            aria-label='Search'
          />
        </div>

        {/* Notifications Bell Icon */}
        <div className='relative'>
          <Bell 
            className='text-[#111827] text-2xl cursor-pointer' 
            onClick={toggleNotifications}
            aria-label='Notifications' // ARIA label for accessibility
          />
          {/* Notification Badge */}
          {notifications.length > 0 && (
            <span className='absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center'>
              {notifications.length > 9 ? '9+' : notifications.length}
            </span>
          )}

          {/* Notifications Dropdown */}
          {isNotificationsOpen && (
            <div 
              ref={dropdownRef}
              className='absolute right-0 mt-2 w-80 bg-[#D1D5DB] text-[#111827] rounded-lg shadow-lg z-50'
              role='menu'
              aria-label='Notifications Menu'
            >
              {/* Dropdown Header */}
              <div className='p-4 border-b border-[#B3B3B3] flex justify-between items-center'>
                <h3 className='text-lg font-semibold flex items-center'>
                  <FaExclamationCircle className='mr-2' />
                  Notifications
                </h3>
                <button 
                  onClick={() => setIsNotificationsOpen(false)}
                  className='text-gray-600 hover:text-[#111827] focus:outline-none'
                  aria-label='Close Notifications'
                >
                  &times;
                </button>
              </div>
              
              {/* Notifications List */}
              <ul className='max-h-60 overflow-y-auto'>
                {loading ? (
                  <li className='p-4 text-gray-400'>Loading...</li>
                ) : error ? (
                  <li className='p-4 text-red-500'>{error}</li>
                ) : notifications.length > 0 ? (
                  notifications.map((notification) => (
                    <li 
                      key={notification.id} 
                      className='p-4 hover:bg-[#B0BEC5] cursor-pointer transition-colors duration-200'
                      role='menuitem'
                    >
                      <h4 className='font-semibold'>{notification.title}</h4>
                      <p className='text-sm'>{notification.description}</p>
                      <span className='text-xs text-gray-400'>
                        {new Date(notification.dateCreated).toLocaleDateString()}
                      </span>
                    </li>
                  ))
                ) : (
                  <li className='p-4 text-gray-400'>No notifications available.</li>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Right Section: Logout Button */}
      <div className='flex gap-5 items-center'>
        <button 
          onClick={onLogout} 
          className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4'
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Header;
